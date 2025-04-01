import Comment from "../@Types/Comment";
import { useEffect, useState } from "react";
import profilepic from "../assets/profilepic.png";

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
                <p className="font-bold">Comments</p>
            {comments.map((comment) => (
                <div className="flex flex-row gap-3">
                    <img src={profilepic} alt="" />
                    <div className="grid grid-cols-[20%_auto_auto]">
                        <p>{comment.username}</p>
                    </div>
                </div>
            ))}
            </div>
        </>
    )
}

export default Comments;