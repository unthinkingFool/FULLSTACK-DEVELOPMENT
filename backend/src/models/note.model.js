const { pool } = require("../db/db");

// Create a note
const createNote = async (title, description) => {
  const query = `
    INSERT INTO notes (title, description)
    VALUES ($1, $2)
    RETURNING *;
  `;

  const result = await pool.query(query, [title, description]);
  return result.rows[0];
};

// Get all notes
const getAllNotes = async () => {
  const result = await pool.query(
    "SELECT * FROM notes ORDER BY created_at DESC"
  );

  return result.rows;
};

// Get a note by ID
const getNoteById = async (note_id) => {
  const result = await pool.query(
    "SELECT * FROM notes WHERE note_id = $1",
    [note_id]
  );

  return result.rows[0];
};

// Update a note
const updateNote = async (note_id, title, description) => {
  const query = `
    UPDATE notes
    SET
      title = $1,
      description = $2,
      updated_at = CURRENT_TIMESTAMP
    WHERE note_id = $3
    RETURNING *;
  `;

  const result = await pool.query(query, [title, description, note_id]);
  return result.rows[0];
};

// Delete a note
const deleteNote = async (note_id) => {
  await pool.query(
    "DELETE FROM notes WHERE note_id = $1",
    [note_id]
  );
};

module.exports = {
  createNote,
  getAllNotes,
  getNoteById,
  updateNote,
  deleteNote,
};