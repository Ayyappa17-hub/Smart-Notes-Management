const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    tags: [String],
  },
  { timestamps: true } // auto add createdAt, updatedAt
);

module.exports = mongoose.model("Note", NoteSchema);
