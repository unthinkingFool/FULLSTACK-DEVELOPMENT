import { useEffect } from "react";
import React, { useState } from "react";
import axios from "axios";


const AllPosts = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      image: "https://ik.imagekit.io/helloSwapnil/image_okzRmck2M.jpg",
      caption: "A beautiful sunset over the mountains.",
    },
  ]);

  useEffect(() => {
    const fetchPosts = async () => {
        try {
            const response = await axios.get("http://localhost:3000/posts");
            setPosts(response.data.posts);
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    };

    fetchPosts();
  }, []);


  return (
    <div className="min-h-screen bg-gray-950 py-10 px-4">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white text-center mb-8">
          Posts
        </h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
            <div
                key={post.id}
                className="bg-gray-900 border border-gray-800 rounded-xl shadow-lg overflow-hidden"
                >
                <img
                    src={post.image}
                    alt={post.caption}
                    className="w-full h-64 object-cover"
                />

                <div className="p-5">
                    <p className="text-gray-200 text-lg">{post.caption}</p>
                </div>
            </div>
        ))}
    </div>
      </section>
    </div>
  );
};

export default AllPosts;