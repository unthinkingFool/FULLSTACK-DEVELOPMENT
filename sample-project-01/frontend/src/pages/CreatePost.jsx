import React from "react";
import { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";


const CreatePost = () => {
    const navigate=useNavigate();

    const [formData, setFormData] = useState({
        image: null,
        caption: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData=new FormData(e.target);

         axios.post("http://localhost:3000/create-post", formData)
        .then((response) => {
            console.log("Post created successfully:", response.data);
            alert("Post created successfully!");
            navigate("/all-posts");
        })
        .catch((error) => {
            console.error("Error creating post:", error);
            alert("Error creating post. Please try again.");
        });
            
    };
    
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <section className="w-full max-w-md bg-gray-900 border border-gray-800 shadow-2xl rounded-xl p-8">
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Create Post
        </h1>

        <form  onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Upload Image
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              className="w-full border border-gray-700 bg-gray-800 text-gray-300 rounded-lg p-2 text-sm file:mr-4 file:py-2 file:px-4 file:border-0 file:rounded-md file:bg-blue-600 file:text-white file:cursor-pointer hover:file:bg-blue-700"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Caption
            </label>
            <input
              type="text"
              name="caption"
              required
              placeholder="Enter the caption"
              className="w-full bg-gray-800 text-white placeholder-gray-400 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition duration-200"
          >
            Create Post
          </button>
        </form>
      </section>
    </div>
  );
};

export default CreatePost;