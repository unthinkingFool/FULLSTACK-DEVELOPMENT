const express = require("express");
const multer = require("multer");
const uploadFile = require("./services/storage.service");
const postModel = require("./models/post.model");

const app = express();

app.use(express.json());

const upload = multer({
  storage: multer.memoryStorage(),
});

app.post("/create-post", upload.single("image"), async (req, res) => {
  try {
    const { caption } = req.body;

    if (!req.file) {
      return res.status(400).json({
        message: "Image is required",
      });
    }

    // Upload image to ImageKit
    const uploadedImage = await uploadFile(req.file.buffer);

    // Save image URL and caption to PostgreSQL
    const post = await postModel.createPost(
      uploadedImage.url,
      caption
    );

    res.status(201).json({
      message: "Post created successfully",
      post: post
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: "Internal Server Error",
      post:post
    });
  }
});

app.get("/posts", async (req, res) => {
    const posts = await postModel.getAllPosts();
    res.status(200).json({
        message: "Posts fetched successfully",
        posts: posts
    });
  }
);


module.exports = app;