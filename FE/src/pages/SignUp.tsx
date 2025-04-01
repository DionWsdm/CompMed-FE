import { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const [registerStatus, setRegisterStatus] = useState<string>("");

  const SignUp = async () => 
    {
      const username = (document.getElementById("username") as HTMLInputElement).value;
      const password = (document.getElementById("password") as HTMLInputElement).value;
      const fullName = (document.getElementById("fullname") as HTMLInputElement).value;
      const email = (document.getElementById("email") as HTMLInputElement).value;
      await fetch(`${import.meta.env.VITE_BE_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          pwd: password,
          full_name: fullName,
          email: email,
        }),
        credentials: "include",
      })
      .then((response: Response) => {
        console.log("here Works")
        setRegisterStatus((response.status === 409) ? "Username or Email already in use" : "Sign up success, please sign in")
      })
      .catch((error) => console.log("Error mengambil data: ", error));
    }

    return (
      <>
        <div className="flex justify-center items-center h-screen bg-[#F5F5F5]">
          <div className="flex flex-col items-center font-mono h-[70vh] w-[40vw] gap-5 shadow-2xl rounded-2xl bg-white">
            <div className="flex flex-col items-center w-full gap-3">
              <h1 className="mt-3 font-extrabold text-5xl">CompMed</h1>
              <p className="mt-2 text-2xl text-gray-500">Sign Up</p>
            </div>
            <div className="flex flex-col items-center w-full">
              <form className="flex flex-col w-[70%] mt-3 gap-3">
                <div className="flex flex-col">
                  <label htmlFor="password">Full Name:</label>
                  <input id="fullname" type="text" className="border-b-2 focus:border-b-2 outline-0" name="fullname"/>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="username">Email</label>
                  <input id="email" type="text" className="border-b-2 focus:border-b-2 outline-0" name="email"/>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="username">Username:</label>
                  <input id="username" type="text" className="border-b-2 focus:border-b-2 outline-0" name="username"/>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="password">Password:</label>
                  <input id="password" type="password" className="border-b-2 focus:border-b-2 outline-0" name="password"/>
                </div>
              </form>
            </div>
            <div className="flex flex-col items-center w-full gap-3 mt-7">
              {registerStatus ? <p className={registerStatus === "Username or Email already in use" ? "text-red-500" : "text-green-500"}>{registerStatus}</p> : <></>} 
              <button className="flex w-[50%] justify-center items-center text-center text-white bg-blue-500 h-10 rounded-2xl hover:bg-blue-600 hover:cursor-pointer" onClick={SignUp}><p>Sign Up</p></button>
              <p className="mt-2 text-[0.8rem] text-gray-500">Already have an account? Sign in</p>
              <Link to={"/"} className="flex w-[50%] justify-center items-center text-center text-white bg-green-400 h-10 rounded-2xl hover:bg-green-500">Sign In</Link>
            </div>
          </div>
        </div>
      </>
    );
  }
export default SignUpPage