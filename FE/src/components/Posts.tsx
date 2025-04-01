import Post from "../@Types/Post";
import profilepic from "../assets/profilepic.png";
import { Link } from "react-router-dom";
import comment from "../assets/comment.png";
import heart from "../assets/heart.png";
import Utils from "../utils/Utils";

const Posts = ({posts}: {posts: Post[]}) => {
  return (
    <>
      {posts.map((post) => (
        <Link to={`/Post/${post.username}/${post.id}`}>
        <div className="flex justify-items-start border-b-[0.7px] w-[100%] pl-3 pt-3 pb-3 gap-1.5 hover:bg-gray-200">
            <img src={profilepic} alt="profile" className="size-15"/>
            <div id="content-area" className="grid grid-rows-[20%_auto_20%] w-[100%] gap-1.5">
              <div className="flex justify-items-start gap-1.5 text-gray-500 text-[0.9rem]" >
                <p className="text-[0.9rem]">{post.username}</p> <p>·</p> <p className="text-[0.9rem]">{Utils.getDateString(new Date(post.created_at))}</p>
              </div>
              <p>{post.konten}</p>
              {(post.image_url) ? <img src={post.image_url} alt="" className=""/> : <></>}
              <div className="flex flex-row gap-15">
                <div className="flex flex-row items-center gap-1 text-[14px]"><img src={comment} alt="" className="size-[1rem] mt-0.5"/><p>{post.comments}</p></div>
                <div className="flex flex-row items-center gap-1 text-[14px]"><img src={heart} alt="" className="size-4 mt-0.5"/><p>{post.likes}</p></div>
              </div>
            </div>
        </div>
        </Link>
      ))}
    </>
  );
}

export default Posts;
