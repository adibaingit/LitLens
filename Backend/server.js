import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

app.use("/api/users", userRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/reviews", reviewRoutes);
// app.use("/api/users/my-bookshelf" , userRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Simple test route
app.get("/", (req, res) => {
  res.send("LitLens backend is running 🚀");
});


// Server listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
