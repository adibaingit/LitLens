import Review from "../models/Review.js";

// ✅ GET reviews for a book (NEWEST FIRST)
export const getReviewsByBook = async (req, res) => {
  try {
    const { bookId } = req.params;

    const reviews = await Review.find({ book: bookId })
      .select("rating comment createdAt") // only required fields
      .sort({ createdAt: -1 });

    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ ADD review (reviewer only)
export const addReview = async (req, res) => {
  try {
    const { bookId, rating, comment } = req.body;

    // reviewer comes from reviewer-auth middleware
    const reviewerId = req.user._id;

    const review = await Review.create({
      book: bookId,
      reviewer: reviewerId,
      rating,
      comment,
    });

    res.status(201).json(review);
  } catch (error) {
    if (error.code === 11000) {
      return res
        .status(400)
        .json({ message: "You have already reviewed this book." });
    }
    res.status(500).json({ message: error.message });
  }
};
