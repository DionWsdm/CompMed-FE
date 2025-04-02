import { useEffect, useState } from "react";
import profilepic from "../assets/profilepic.png";
import Post from "../@Types/Post";
import Posts from "../components/Posts";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Auth from "../@Types/Auth";

const HomePage = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<Post[]>([]);
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
    fetch(`${import.meta.env.VITE_BE_URL}/posts`)
      .then((response: Response) => response.json())
      .then((data) => setPosts(data.posts))
      .catch((error) => console.log("Error mengambil data: ", error));
  }, []);
  
  const createPost = async () => {
    const textarea = document.getElementById(
      "new-content"
    ) as HTMLTextAreaElement;
    const content = textarea.value;
    await fetch(`${import.meta.env.VITE_BE_URL}/posts`, {
      method: "POST",
      body: JSON.stringify({
        konten: content,
      }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    window.location.reload();
  };

  return (
    <>
      <div
        id="root"
        className="grid grid-cols-[25vw_50vw_25vw] h-screen border-gray-400"
      >
        <NavBar />
        <div className="border-r-[0.7px] border-gray-400 h-[100%] shadow-2xl">
          <div
            id="post-something"
            className="flex justify-items-start border-b-[0.7px] h-45 w-[100%] pl-3 pt-3 gap-1.5"
          >
            <img src={profilepic} alt="profile" className="size-15" />
            <div
              className="grid grid-rows-[75%_25%] w-[100%]"
              id="textbox-container"
              onClick={() => console.log("Here")}
            >
              <textarea
                className="text-2xl mt-3 focus:border-none focus:outline-none"
                name=""
                id="new-content"
                placeholder={`Hi ${authInfo?.username}! Any Good News?`}
              ></textarea>
              <div className="flex justify-between">
                <button className="w-30 h-8 text-[1rem] rounded-full bg-gray-300 hover:bg-gray-400 hover:cursor-pointer">
                  Image/Video
                </button>
                <button
                  className="w-30 mr-4 h-8 text-[1rem] text-white rounded-full bg-blue-500 hover:bg-blue-600 hover:cursor-pointer"
                  onClick={createPost}
                >
                  Post
                </button>
              </div>
            </div>
          </div>
          <Posts posts={posts}/>
        </div>
        <div className="p-1">This is your side</div>
      </div>
    </>
  );
};

export default HomePage;
