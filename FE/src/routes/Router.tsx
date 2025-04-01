import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignInPage from "../pages/SignIn";
import SignUpPage from "../pages/SignUp";
import HomePage from "../pages/Home";
import PostPage from "../pages/PostPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path: "/Home/", element: <HomePage />},
            {path: "/SignUp/", element: <SignUpPage />},
            {path: "/Post/:username/:postid", element: <PostPage />},
            {path: "/", element: <SignInPage />},
        ]
    }
])

export default router