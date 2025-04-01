import Comment from "../@Types/Comment";
import { useEffect, useState } from "react";
import profilepic from "../assets/profilepic.png";
import Utils from "../utils/Utils";

const Comments = ({postid} : {postid: number}) =>
{
    const [comments, setComments] = useState<Comment[]>([])
    useEffect(() => {
        fetch(`${import.meta.env.VITE_BE_URL}/comments/${postid}`, {
            method: "GET",
            credentials: "include",
        })
        .then((response: Response) => response.json())
        .then((data) => setComments(data.comments))
        .catch((error) => console.log("Error saat mengambil data: ", error))
    }, [])
    
    return (
        <>
            <div className="flex flex-col">
                <p className="font-bold mb-2">Comments</p>
            {comments.map((comment) => (
                <div className="flex flex-row gap-3">
                    <img src={profilepic} alt="" className="size-15"/>
                    <div className="grid grid-rows-[20%_auto_auto] mt-1 gap-2">
                        <div className="flex justify-items-start gap-1.5 text-gray-500 text-[0.9rem]" >
                            <p className="text-[0.9rem]">{comment.username}</p> <p>·</p> <p className="text-[0.9rem]">{Utils.getDateString(new Date(comment.created_at))}</p>
                        </div>
                        <div>
                            <p>{comment.content}</p>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </>
    )
}

export default Comments;