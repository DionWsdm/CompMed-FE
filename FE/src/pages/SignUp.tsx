import "../App.css";
import { Link } from "react-router-dom";

const SignUpPage = () => {
    return (
      <>
        <body className="flex justify-center items-center h-screen bg-[#F5F5F5]">
          <div className="flex flex-col items-center font-mono h-[60vh] w-[40vw] gap-3 shadow-2xl rounded-2xl bg-white">
            <h1 className="mt-3 font-extrabold text-5xl">CompMed</h1>
            <p className="mt-2 text-2xl text-gray-500">Sign Up</p>
            <form className="flex flex-col w-[70%] mt-3">
              <label htmlFor="username">Username:</label>
              <input type="text" className="border-b-2 mb-7 focus:border-b-2 outline-0" name="username"/>
              <label htmlFor="password">Password:</label>
              <input type="password" className="border-b-2 mb-7 focus:border-b-2 outline-0" name="password"/>
            </form>
            <Link to={"/SignUp/"} className="flex w-[50%] justify-center items-center text-center text-white bg-blue-500 h-10 rounded-2xl hover:bg-blue-600"><p>Sign Up</p></Link>
            <p className="mt-2 text-[0.8rem] text-gray-500">Already have an account? Sign in</p>
            <Link to={"/"} className="flex w-[50%] justify-center items-center text-center text-white bg-green-400 h-10 rounded-2xl hover:bg-green-500">Sign In</Link>
          </div>
        </body>
      </>
    );
  }
export default SignUpPage