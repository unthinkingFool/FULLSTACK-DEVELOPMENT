import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [index, setindex] = useState(1)

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=30`
    );
    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, [index]);

  let printData = <h2 className="text-center text-gray-500">Loading...</h2>;

  if (data.length > 0) {
    printData = data.map((elem) => (
      <a
        key={elem.id}
        href={elem.url}
        target="_blank"
        rel="noreferrer"
        className="group"
      >
        <div className="overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:scale-105 hover:shadow-xl">
          <img
            src={elem.download_url}
            alt={elem.author}
            className="h-64 w-full object-cover"
          />

          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600">
              {elem.author}
            </h2>
          </div>
        </div>
      </a>
    ));
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col justify-between h-100vh w-full">
      <h1 className="mb-8 text-center text-4xl font-bold">
         Photo Gallery
      </h1>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {printData}
      </div>
      <div className="mt-10 flex items-center justify-center gap-6">
       <button onClick={()=>{ if(index>1) {setindex(index-1); setData([])}  }} className="rounded-lg bg-gray-800 px-6 py-3 text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-gray-900 hover:shadow-lg active:scale-95">
          ← Previous
       </button>
        <h1>Page {index} </h1>
       <button onClick={()=>{ setindex(index+1) ; setData([]) }} className="rounded-lg bg-gray-600 px-6 py-3 text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-gray-800 hover:shadow-lg active:scale-95">
         Next →
        </button>
      </div>
    </div>
  );
};

export default App;