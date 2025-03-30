import { useEffect, useState } from "react";
import profilepic from "../assets/profilepic.png";
import Post from "../data/Post";
import Posts from "../components/Posts";

const signedIn = async () => {
  if (!document.cookie) 
  {
    console.log("It goes here");
    // window.location.href="/";
  }
};

const createPost = async () =>
{
  const textarea = document.getElementById("new-content") as HTMLTextAreaElement;
  const content = textarea.value;
  const response = await fetch(`${import.meta.env.VITE_BE_URL}/posts/`, {
    method: "POST",
    body: JSON.stringify({
      konten: content,
    }),
    headers: { "Content-Type": "application/json"},
    credentials: "include",
  })
  console.log(response)
  window.location.href="/Home/";
}

const HomePage = () => {
  signedIn();
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BE_URL}/posts/`).then((response: Response) => response.json())
    .then((data) => setPosts(data.posts)).catch((error) => console.log("Error mengambil data: ", error))
  }, [])

  return (
    <>
      <div id="root" className="grid grid-cols-[25vw_50vw_25vw] h-full bg-[#F5F5F5]">
        <div className="border-r-[0.7px] border-gray-400 h-[100%] p-1">This is navigation</div>
        <div className="border-r-[0.7px] border-gray-400 h-[100%] shadow-2xl">
            <div id="post-something" className="flex justify-items-start border-b-[0.7px] h-45 w-[100%] pl-3 pt-3 gap-1.5">
                <img src={profilepic} alt="profile" className="size-15" />
                <div className="grid grid-rows-[75%_25%] w-[100%]" id="textbox-container" onClick={() => console.log("Here")}>
                  <textarea className="text-2xl mt-3 focus:border-none focus:outline-none" name="" id="new-content" placeholder={`Hi ${localStorage.getItem("username")}! Any Good News?`} ></textarea>
                  <div className="flex justify-between">
                    <button className="w-30 h-8 text-[1rem] rounded-full bg-gray-300 hover:bg-gray-400 hover:cursor-pointer">Image/Video</button>
                    <button className="w-30 mr-4 h-8 text-[1rem] text-white rounded-full bg-blue-500 hover:bg-blue-600 hover:cursor-pointer" onClick={() => createPost()}>Post</button>
                  </div>
                </div>
            </div>
          <Posts posts={posts} />
        </div>
        <div className="p-1">This is your side</div>
      </div>
    </>
  );
};

export default HomePage;
