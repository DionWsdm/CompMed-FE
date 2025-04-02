import Post from "../@Types/Post";
import profilepic from "../assets/profilepic.png";

const EditPopUp = ({setPopUpEdit, post} : {setPopUpEdit: Function, post: Post}) =>
{
    const handleEdit = async () =>
    {
        const textarea = document.getElementById("new-content") as HTMLTextAreaElement;
        const content = textarea.value;
        await fetch(`${import.meta.env.VITE_BE_URL}/posts/${post.id}`, {
            method: "PATCH",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                konten: content,
            })
        })
        window.location.reload();
    }

    return (
    <div id="modal" className="fixed inset-0 flex items-center justify-center bg-gray-950/50">
        <div className="grid grid-rows-[10%_75%_10%] shadow-2xl rounded-lg h-[60vh] w-[60vw] fixed bg-white items-center">
            <div className="flex flex-row h-full w-full bg-blue-400 items-center text-white"><p>Editing Post</p></div>
            <div className="flex flex-row gap-2">
                <img src={profilepic} alt="profile" className="size-15" />
                <div
                className="w-[100%]"
                id="textbox-container"
                onClick={() => console.log("Here")}
                >
                <textarea
                    className="text-2xl mt-3 focus:border-none focus:outline-none"
                    name=""
                    id="new-content"
                    defaultValue={post.konten}
                    readOnly={false}
                    disabled={false}
                ></textarea>
                </div>
            </div>
            <div className="flex flex-row delete-box-container-buttons items-end gap-5 ml-2 w-full">
                <button onClick={() => setPopUpEdit(false)} className="delete-box-container-buttons-cancel bg-gray-300 rounded-full p-1 pr-2 pl-2 hover:cursor-pointer hover:bg-gray-400">Cancel</button>
                <button onClick={handleEdit} className="bg-blue-400 p-1 pr-2 pl-2 rounded-full hover:cursor-pointer hover:bg-blue-500 text-white">Edit</button>
            </div>
        </div>
    </div>
    )
}

export default EditPopUp