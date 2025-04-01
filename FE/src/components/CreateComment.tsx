import profilepic from "../assets/profilepic.png";

const adjustHeight = (plus: boolean): void =>
{
    const textarea = document.getElementById("comment-textarea") as HTMLTextAreaElement;
    if(plus)
        textarea.rows++;
    else
    {
        const rows = textarea.value.split("\n");
        (textarea.rows > rows.length) ? textarea.rows-- : textarea;
    }
}

const addComment = async (postid: number): Promise<void> =>
{
    const textarea = document.getElementById("comment-textarea") as HTMLTextAreaElement;
    const content = textarea.value;
    await fetch(`${import.meta.env.VITE_BE_URL}/comments/${postid}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            content: content,
        }),
        credentials: "include"
    });
    window.location.reload();
}

const cancelComment = () => 
{
    const textarea = document.getElementById("comment-textarea") as HTMLTextAreaElement;
    textarea.value = "";
    textarea.rows = 1;
}

const CreateComment = ({postid} : {postid: number}) =>
{
    return (
        <>
        <div className="flex flex-col gap-2 w-full">
            <p className="font-bold">Leave a Comment</p>
            <div className="flex flex-row w-full gap-2 items-center">
                <img src={profilepic} alt="" className="size-15"/>
                <div className="w-full">
                    <textarea name="" id="comment-textarea" className="border-b-2 w-full focus:outline-none overflow-hidden h-auto" placeholder="Write a comment" rows={1} onKeyUp={(event) => {
                        if (event.key === "Enter")
                            adjustHeight(true);
                        else if (event.key === "Backspace")
                            adjustHeight(false)
                    }}></textarea>
                </div>
            </div>
            <div className="flex flex-row justify-end w-full gap-10">
                <button className="hover:cursor-pointer bg-gray-300 hover:bg-gray-400 pt-1 pb-1 pr-3 pl-3 rounded-full" onClick={cancelComment}>Cancel</button>
                <button className="hover:cursor-pointer bg-blue-400 hover:bg-blue-500 pt-1 pb-1 pr-3 pl-3 rounded-full text-white" onClick={() => addComment(postid)}>Comment</button>
            </div>
        </div>
        </>
    )
}

export default CreateComment;