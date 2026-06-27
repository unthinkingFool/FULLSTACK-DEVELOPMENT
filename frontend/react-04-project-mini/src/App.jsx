import "./App.css";
import {Bookmark} from 'lucide-react';

function App() {
  return (
    <div className="parent">

      <div className="card">

        <div className="top">
          <img src="https://www.wired.com/2015/09/googles-new-logo-trying-really-hard-look-friendly/" />
          <button>Save <Bookmark /></button>
        </div>

        <div className="center">
          <h3>Google<span> 3 days ago</span></h3>
          <h2>Senior Software Engineer</h2>
          <div>
            <h4>part time</h4>
          </div>
        </div>

        <div className="bottom">
            <div>
              <h3>$120/hr</h3>
              <p>Salary</p>
            </div>
            <button>Apply Now</button>
        </div>

      </div>
    </div>
  );
}

export default App;