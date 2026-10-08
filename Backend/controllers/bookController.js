import Book from "../models/Book.js";

// @desc Add a new book
export const addBook = async (req, res) => {
  try {
    const { title, author, description, genre, coverImage } = req.body;
    const book = await Book.create({ title, author, description, genre, coverImage });
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Get all books
export const getBooks = async (req, res) => {
  try {
    const book = await Book.find();
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Get single book by ID
export const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
