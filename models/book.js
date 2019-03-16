const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  authors: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String, required: true },
  rating: Number,
  thumbnail: { type: String }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
