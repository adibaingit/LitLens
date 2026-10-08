import express from "express";
import { addReview } from "../controllers/reviewController.js";
import { getReviewsByBook } from "../controllers/reviewController.js";  
const router = express.Router();

router.post("/", addReview);
router.get("/:bookId", getReviewsByBook);
export default router;
