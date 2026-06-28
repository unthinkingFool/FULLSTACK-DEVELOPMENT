import { ArrowUpRight } from 'lucide-react';
import Rightimg from './rightImg';

function Rightcontent(props){
    return(
        <div className="h-full w-2/3 bg-gray-300 p-5 rounded-3xl flex flex-nowrap gap-[20px]">
            {props.users.map(function(elem,idx){
                return <Rightimg key={idx} id={idx} img={elem.img} intro={elem.intro} tag={elem.tag}/>
            })}
        </div>
    )
}

export default Rightcontent;