import React from "react";
import axios from "axios";
import {useState} from 'react'
const App = () => {

  const [data, setdata] = useState([])

  const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");

    const data = await response.json();

    console.log(data);
  };

  const getData2 = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");
    setdata(response.data)
  };

  return (
    <div>
      <button onClick={getData}>Click to fetch</button> <br /> <br />
      <button onClick={getData2}>Click yo axios</button>
      <div>
        {data.map((elem) => (
          <img
            key={elem.id}
            src={elem.download_url}
            alt={elem.author}
            width="200"
          />
        ))}
      </div>
    </div>
  );
};

export default App;
