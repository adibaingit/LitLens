import express from "express";
import { addBook, getBooks, getBookById } from "../controllers/bookController.js";

const router = express.Router();

router.post("/", addBook);
router.get("/", getBooks);
router.get("/:id", getBookById);

export default router;
