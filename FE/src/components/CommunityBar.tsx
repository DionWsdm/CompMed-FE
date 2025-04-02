// import { useState } from "react";
// import Community from "../@Types/Community";


const CommunityBar = () => 
{
    // const [communitiesJoined, setCommunitiesJoined] = useState<Community[]>([])

    return (
       <>
        <div className="h-full">
            <div className="flex flex-col gap-5 h-full fixed ml-10 mt-3">
                <div className="flex flex-col">
                    <p className="font-bold text-3xl">Your Community</p>
                </div>
                <div className="flex flex-col">
                    <p className="font-bold text-3xl">Community to follow</p>
                </div>
            </div>
        </div>
       </> 
    )
}

export default CommunityBar;