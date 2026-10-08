import mongoose from "mongoose";
import bcrypt from "bcryptjs";

// const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    profileImage: { type: String },

    role: {
      type: String,   
      enum: ["user", "reviewer"],
      default: "user",
    },

    favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }],

    wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }],

    recommendedBooks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }],

    reviewedBooks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }],
  },
  { timestamps: true }
);
// userSchema.methods.matchPassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

export default mongoose.model("User", userSchema);
