import { ArrowUpRight } from 'lucide-react';

function Leftcontent(){
    return(
        <div className="h-full flex flex-col justify-between w-1/3">
            <div className='p-5'>
                <h2 className='text-gray-50 text-6xl p-2 font-bold'>Welcome to Customer Segment</h2>
                <h3 className='text-gray-500 text-2xl p-2 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nobis vitae tempore cum quae itaque ut tenetur fugit id velit!</h3>
            </div>
            <div className='p-7'>
                <ArrowUpRight size={80}/>
            </div>
        </div>
    )
}

export default Leftcontent;