import { Link } from "react-router-dom";
import home from "../assets/home.png";
import community from "../assets/community.png";
import person from "../assets/person.png";
import mail from "../assets/mail.webp";
import signout from "../assets/signout.png";

const NavBar = () =>
{
    return (
        <>
        <div className="border-r-[0.7px] border-gray-400 h-[100%] p-1 ml-[6vw]">
            <div className="flex flex-col fixed">
                <div className="flex flex-col items-start h-[90vh] gap-3" id="internal-nav">
                    <Link to="/Home" className="font-extrabold text-[3vw]">CompMed</Link>
                    <Link to="/Home" className="flex flex-row justify-center items-center text-[1.2rem]">
                        <img src={home} alt="icon" className="size-15"/>
                        <p>Home</p>
                    </Link>
                    <Link to="/Communities" className="flex flex-row justify-center items-center text-[1.2rem] ml-3 gap-3">
                        <img src={community} alt="icon" className="size-9"/>
                        <p>Communities</p>
                    </Link>
                    <Link to="/Profile" className="flex flex-row justify-center items-center text-[1.2rem] ml-0.5 gap-1">
                        <img src={person} alt="icon" className="size-14"/>
                        <p>Profile</p>
                    </Link>
                    <Link to="/Messages" className="flex flex-row justify-center items-center text-[1.2rem] ml-3 gap-3.5">
                        <img src={mail} alt="icon" className="size-9"/>
                        <p>Messages</p>
                    </Link>
                </div>
                <div className="flex flex-col" id="external-nav">
                    <Link to="/LogOut" className="flex flex-row items-center ml-2">
                        <img src={signout} alt="" className="size-12 rotate-180"/>
                        <p>Sign Out</p>
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default NavBar;