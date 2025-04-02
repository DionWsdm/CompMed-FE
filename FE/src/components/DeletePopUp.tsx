import { JSX } from "react";
import { useNavigate } from "react-router-dom";


const DeletePopUp = ({setPopUpDelete, postid} : {setPopUpDelete: Function, postid: number}): JSX.Element =>
{
    console.log("postid: ", postid);
    const navigate = useNavigate();
    const handleDelete = async () =>
    {
        await fetch(`${import.meta.env.VITE_BE_URL}/posts/${postid}`, {
            method: "DELETE",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
        })
        navigate("/Home");
    }   

    return (
    <div id="modal" className="fixed inset-0 flex items-center justify-center bg-gray-950/50">
        <div className="grid grid-rows-[10%_75%_10%] shadow-2xl rounded-lg h-[30vh] w-[30vw] fixed bg-white items-center">
            <div className="flex flex-row h-full w-full bg-red-400 items-center"><p>Are you sure?</p></div>
            <div className="delete-box-container-main h-full justify-center items-center">
                <p>Are you sure you want to delete this post?<br />Click "Delete" to delete the post.<br />Click "Cancel" to cancel.</p>
            </div>
            <div className="flex flex-row delete-box-container-buttons items-end gap-5 ml-2 w-full">
                <button onClick={() => setPopUpDelete(false)} className="delete-box-container-buttons-cancel bg-gray-300 rounded-full p-1 pr-2 pl-2 hover:cursor-pointer hover:bg-gray-400">Cancel</button>
                <button onClick={handleDelete} className="bg-red-500 p-1 pr-2 pl-2 rounded-full hover:cursor-pointer hover:bg-red-600">Delete</button>
            </div>
        </div>
    </div>
    )
}

export default DeletePopUp;