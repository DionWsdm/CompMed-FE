import Post from "../data/Post";
import profilepic from "../assets/profilepic.png";
import { Link } from "react-router-dom";

const getDateString = (date: Date) =>
{
  return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
}

const Posts = ({posts}: {posts: Post[]}) => {
  return (
    <>
      {posts.map((post) => (
        <Link to={""}>
        <div className="flex justify-items-start border-b-[0.7px] w-[100%] pl-3 pt-3 pb-3 gap-1.5 hover:bg-gray-200">
            <img src={profilepic} alt="profile" className="size-15"/>
            <div id="content-area" className="grid grid-rows-[25%_75%] w-[100%] gap-1">
              <div className="flex justify-items-start gap-1.5 text-gray-500 text-[0.9rem]" >
                <p className="text-[0.9rem]">{post.username}</p> <p>·</p> <p className="text-[0.9rem]">{getDateString(new Date(post.created_at))}</p>
              </div>
              <p>{post.konten}</p>
              {(post.image_url) ? <img src={post.image_url} alt="" className=""/> : <></>}
            </div>
        </div>
        </Link>
      ))}
    </>
  );
};

export default Posts;
