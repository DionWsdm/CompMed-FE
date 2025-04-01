import profilepic from "../assets/profilepic.png";

const adjustHeight = (plus: boolean) =>
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

const CreateComment = () => 
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
        </div>
        </>
    )
}

export default CreateComment;