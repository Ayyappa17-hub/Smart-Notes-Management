const express = require("express");
const router = express.Router();
const Note = require("../models/Note");

// GET all notes
router.get("/", async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

// POST create a note
router.post("/", async (req, res) => {
  const { title, description } = req.body;
  const newNote = new Note({ title, description });
  await newNote.save();
  res.json(newNote);
});

// PUT update a note
router.put("/:id", async (req, res) => {
  const { title, description } = req.body;
  const updatedNote = await Note.findByIdAndUpdate(
    req.params.id,
    { title, description },
    { new: true }
  );
  res.json(updatedNote);
});

// DELETE a note
router.delete("/:id", async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ message: "Note deleted" });
});

module.exports = router;
