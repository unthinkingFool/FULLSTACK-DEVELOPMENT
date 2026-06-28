import {Bookmark} from 'lucide-react';
function Card(props){
    return (
        <div className="card">

        <div className="top">
          <img src={props.logo}/>
          <button>Save <Bookmark /></button>
        </div>

        <div className="center">
          <h3>{props.company}<span>   {props.days}  days ago</span></h3>
          <h2>{props.post}</h2>
          <div className="position">
            <h4>{props.tag1}</h4>
          </div>
        </div>

        <div className="bottom">
            <div>
              <h3>{props.salary}</h3>
              <p>Salary</p>
            </div>
            <button>Apply Now</button>
        </div>

      </div>
    )
}

export default Card;
