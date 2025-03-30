import { useState } from "react";
import "../App.css";
import { Link, useNavigate} from "react-router-dom";

const SignIn = async (valid: number, setValid: Function) =>
  {
    console.log(Boolean(""))
    const username = (document.getElementById("username") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement).value;
    const response = await fetch(`${import.meta.env.VITE_BE_URL}/login/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({username: username, pwd: password}),
      credentials: "include",
    })
    const result = await response.json();
    if (result.success)
    {
      localStorage.setItem("username", username)
      console.log(document.cookie);
      return "/Home/";
    }
    setValid(valid+1)
    return "/";
  }

const SignInPage = () => {
  const navigate = useNavigate();
  const [valid, setValid] = useState<number>(0);

  const handleSignIn = async () =>
  {
    const path = await SignIn(valid, setValid);
    console.log(path)
    navigate(path);
    console.log("Works")
  }

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-[#F5F5F5]" id="root">
        <div className="flex flex-col items-center font-mono h-[60vh] w-[40vw] gap-3 shadow-2xl rounded-2xl bg-white">
          <h1 className="mt-3 font-extrabold text-5xl">CompMed</h1>
          <p className="mt-2 text-2xl text-gray-500">Sign In</p>
          <form className="flex flex-col w-[70%] mt-3">
            <label htmlFor="username">Username: </label>
            <input type="text" className="border-b-2 mb-7 focus:border-b-2 outline-0" name="username" id="username"/>
            <label htmlFor="password">Password:</label>
            <input type="password" className="border-b-2 mb-7 focus:border-b-2 outline-0" name="password" id="password"/>
          </form>
          <button onClick={() => {handleSignIn()}} className="flex w-[50%] justify-center items-center text-center text-white bg-blue-500 h-10 rounded-2xl hover:bg-blue-600 hover:cursor-pointer"><p>Sign In</p></button>
          <p className="mt-2 text-[0.8rem] text-gray-500">Don't have an account? Sign up</p>
          <Link to={"/SignUp/"} className="flex w-[50%] justify-center items-center text-center text-white bg-green-400 h-10 rounded-2xl hover:bg-green-500">Sign Up</Link>
        </div>
      </div>
    </>
  );
}

export default SignInPage;
