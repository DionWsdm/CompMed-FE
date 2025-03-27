import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignInPage from "../pages/SignIn";
import SignUpPage from "../pages/SignUp";
import HomePage from "../pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path: "/Home/", element: <HomePage />},
            {path: "/SignUp/", element: <SignUpPage />},
            {path: "/", element: <SignInPage />},
        ]
    }
])

export default router