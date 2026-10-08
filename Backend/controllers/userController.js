import User from "../models/User.js";
import jwt from "jsonwebtoken";

// Generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

// @desc Register new user
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: "User already exists" });

    const user = await User.create({ name, email, password });

    if (user) {
      res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Login user
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMyBookshelf = async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
      .populate("wishlist")
      .populate("favorites")
      .populate("recommendedBooks")
      .populate("reviewedBooks");

    const addStatus = (books, status) =>
      books.map((b) => ({
        ...b.toObject(),
        status,
      }));

    const books = [
      ...addStatus(user.wishlist, "wantToRead"),
      ...addStatus(user.favorites, "favorite"),
      ...addStatus(user.reviewedBooks, "reviewed"),
    ];

    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

