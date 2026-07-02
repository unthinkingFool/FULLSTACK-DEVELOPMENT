const { pool } = require("../db/db");

const createPost = async (image, caption) => {
  const query = `
    INSERT INTO posts (image, caption)
    VALUES ($1, $2)
    RETURNING *;
  `;

  const result = await pool.query(query, [image, caption]);

  return result.rows[0];
};

const getAllPosts = async () => {
  const query = `
    SELECT *
    FROM posts
    ORDER BY id DESC;
  `;

  const result = await pool.query(query);

  return result.rows;
};

const getPostById = async (id) => {
  const query = `
    SELECT *
    FROM posts
    WHERE id = $1;
  `;

  const result = await pool.query(query, [id]);

  return result.rows[0];
};

const deletePost = async (id) => {
  const query = `
    DELETE FROM posts
    WHERE id = $1
    RETURNING *;
  `;

  const result = await pool.query(query, [id]);

  return result.rows[0];
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  deletePost,
};