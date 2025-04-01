import { useParams, useNavigate} from "react-router-dom";
import NavBar from "../components/NavBar";
import Comments from "../components/Comments";
import { Link } from "react-router-dom";
import arrow from "../assets/arrow.png";
import { useEffect, useState } from "react";
import Auth from "../@Types/Auth";
import threedot from "../assets/threedot.webp";
import profilepic from "../assets/profilepic.png";
import Utils from "../utils/Utils";
import Post from "../@Types/Post";
import comment from "../assets/comment.png";
import heart from "../assets/heart.png";
import CreateComment from "../components/CreateComment";
import Comment from "../@Types/Comment";

const PostPage = () =>
{
    const navigate = useNavigate();
    const [post, setPost] = useState<Post>();
    const {username, postid} = useParams();
    const [authInfo, setAuthInfo] = useState<Auth>();

    useEffect(() => {
      fetch(`${import.meta.env.VITE_BE_URL}/login/info`, {
        method: "GET",
        credentials: "include",
      })
        .then((response: Response) => response.json())
        .then((data) => {
            if (!data.authInfo) 
                navigate("/");
            setAuthInfo(data.authInfo);
        })
        .catch((error) => console.log("Error mengambil data: ", error));
    }, [])

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BE_URL}/posts/${authInfo?.userid}/${postid}`, {
            method: "GET",
            credentials: "include",
        })
        .then((response: Response) => response.json())
        .then((data) => setPost(data.post))
        .catch((error) => console.log("Error mengambil data: ", error));
    }, [])

    if (!post)
        return (
            <>
                <div>404 NOT FOUND!</div>1
            </>
        );

    return (
        <>
        <div id="root" className="grid grid-cols-[25vw_50vw_25vw] h-screen w-screen border-gray-400">
            <NavBar />
            <div className="flex flex-col border-r-[0.7px] border-gray-400 h-full w-full shadow-2xl gap-8 pl-5 pr-5">
                <div className="flex flex-row mt-8">
                    <div className="flex flex-row items-center gap-5">
                        <Link to="/Home"><img src={arrow} alt="go back" className="rotate-180 size-8 mt-1"/></Link>
                        <p className="font-bold text-2xl">{username}'s Post</p>
                    </div>
                    <div>
                        {(postid === authInfo?.userid) ? <img src={threedot} alt="icon" className="size-5"></img> : <></>}
                    </div>
                </div>
                <div className="flex flex-col gap-3 w-full">
                    <div className="flex flex-row gap-3 border-b-[0.7px] border-t-[0.7px] border-gray-400 pt-2">
                        <img src={profilepic} alt="profilepic" className="size-15"/>
                        <div className="grid grid-rows-[20%_auto_auto] mt-1 gap-2 items-start">
                            <div className="flex justify-items-start gap-1.5 text-gray-500 text-[0.9rem]" >
                                <p className="text-[0.9rem]">{username}</p> <p>·</p> <p className="text-[0.9rem]">{Utils.getDateString(new Date(post.created_at))}</p>
                            </div>
                            <div>
                                <p>{post.konten}</p>
                                {post.image_url ? <img src={post.image_url}></img> : <></>}
                            </div>
                            <div className="flex flex-row gap-15 items-start mb-3">
                                <div className="flex flex-row items-center gap-1 text-[14px] hover:cursor-pointer"><img src={comment} alt="" className="size-[1rem] mt-0.5"/><p>{post.comments}</p></div>
                                <div className="flex flex-row items-center gap-1 text-[14px] hover:cursor-pointer"><img src={heart} alt="" className="size-4 mt-0.5"/><p>{post.likes}</p></div>
                            </div>
                        </div>
                    </div>
                    <CreateComment postid={Number(postid)}/>
                    <Comments postid={Number(postid)} />
                </div>
            </div>
        </div>
        </>
    )
}

export default PostPage;
