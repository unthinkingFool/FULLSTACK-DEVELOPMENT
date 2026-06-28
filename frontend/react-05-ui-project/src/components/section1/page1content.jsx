import Leftcontent from "./leftcontent";
import Rightcontent from "./rightcontent.jsx";

function Page1content(props){
    return (
        <div className="flex items-center justify-between py-10 px-18 bg-gray-700 h-[90vh]"> 
            <Leftcontent/>
            <Rightcontent users={props.users}/>
        </div>

    )
}

export default Page1content;