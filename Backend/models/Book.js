import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String },

    genre: { type: String, index: true },

    coverImage: { type: String },

    publishedYear: { type: Number },

    averageRating: { type: Number, default: 0 }, // updated by reviews
    ratingsCount: { type: Number, default: 0 }, // faster sorting
  },
  { timestamps: true }
);

export default mongoose.model("Book", bookSchema);
