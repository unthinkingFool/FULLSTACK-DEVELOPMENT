const { pool } = require("../db/db");
const jwt = require("jsonwebtoken");

async function registerUser(req, res) {
  try {
    const { username, email, password } = req.body;

    // Check if user already exists
    const existingUser = await pool.query(
      "SELECT * FROM auth WHERE email = $1",
      [email]
    );

    if (existingUser.rows.length > 0) {
      return res.status(409).json({
        message: "User already exists",
      });
    }

    // Insert new user
    const query = `
      INSERT INTO auth (username, email, password)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;

    const result = await pool.query(query, [
      username,
      email,
      password,
    ]);

    // Generate JWT
    const token = jwt.sign(
      { userId: result.rows[0].id },
      process.env.JWT_SECRET,
      {
        expiresIn: "15h",
      }
    );

    res.cookie("token", token);

    res.status(201).json({
      message: "User registered successfully",
      user: result.rows[0],
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
}

module.exports = {
  registerUser,
};