import Navbar from './navbar'
import Page1content from './page1content';
function Section1(props){
    return(
        <div className="h-screen w-full">
            <Navbar/>
            <Page1content users={props.users}/>
        </div>
    )
}

export default Section1;