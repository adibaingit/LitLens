import { useEffect, useState, useContext } from "react";
import { FaStar } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";

export default function ReviewsSection({ bookId }) {
  const { reviewer ,user} = useContext(AuthContext);

  const [reviews, setReviews] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [showAll, setShowAll] = useState(false);

  /* ---------- FETCH REVIEWS ---------- */
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch(`/api/reviews/${bookId}`);
        const data = await res.json();
        setReviews(data);
      } catch (err) {
        console.error("Error fetching reviews:", err);
      }
    };

    fetchReviews();
  }, [bookId]);

  /* ---------- RATING LABEL ---------- */
  const ratingText = (rating) => {
    switch (rating) {
      case 5:
        return "Highly recommended";
      case 4:
        return "Worth reading";
      case 3:
        return "Good read";
      case 2:
        return "Average";
      default:
        return "Not recommended";
    }
  };

  /* ---------- SUBMIT REVIEW ---------- */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!rating || !comment.trim()) {
      alert("Please add a rating and write a review.");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bookId, rating, comment }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message);
      }

      setRating(0);
      setComment("");
      setShowForm(false);

      const updated = await res.json();
      setReviews((prev) => [updated, ...prev]);
    
    } catch (err) {
      alert(err.message || "Failed to submit review");
    } finally {
      setLoading(false);
    }
  };

  /* ---------- UI ---------- */
  const visibleReviews = showAll ? reviews : reviews.slice(0, 3);

  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-2xl font-bold text-textCharcoal">
            Ratings & Reviews
          </h2>
          <p className="text-textCharcoal/70 text-sm mt-1">
            Share your thoughts with other readers
          </p>
        </div>

        {user && (
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-primary hover:bg-primaryHover text-white px-5 py-2 rounded-lg font-semibold"
          >
            Write a review
          </button>
        )}
      </div>

      {/* Review Form */}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-bgWhite border rounded-xl p-6 mb-12 shadow-sm"
        >
          <p className="font-medium text-textCharcoal mb-2">
            Rate this book
          </p>

          <div className="flex gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                size={24}
                className={`cursor-pointer ${
                  (hover || rating) >= star
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
              />
            ))}
          </div>

          <textarea
            rows={4}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write your review here..."
            className="w-full border rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <div className="flex justify-end mt-4">
            <button
              type="submit"
              disabled={loading}
              className="bg-primary text-white px-6 py-2 rounded-lg font-semibold disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit review"}
            </button>
          </div>
        </form>
      )}

      {/* Reviews */}
      <div className="space-y-8">
        {visibleReviews.map((review) => (
          <div
            key={review._id}
            className="border rounded-xl p-5 bg-bgWhite shadow-sm"
          >
            {/* Reviewer */}
            <div className="flex items-center gap-3 mb-3">
              {review.reviewer?.profileImage ? (
                <img
                  src={review.reviewer.profileImage}
                  alt={review.reviewer.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center font-bold">
                  {review.reviewer?.name?.[0]}
                </div>
              )}

              <div>
                <p className="font-semibold text-textCharcoal">
                  {review.reviewer?.name}
                </p>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <FaStar
                      key={n}
                      size={14}
                      className={
                        n <= review.rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>
              </div>
            </div>

            <p className="font-semibold text-textCharcoal mb-1">
              {ratingText(review.rating)}
            </p>

            <p className="text-textCharcoal/80 text-sm leading-relaxed">
              {review.comment}
            </p>
          </div>
        ))}
      </div>

      {/* Show More / Less */}
      {reviews.length > 3 && (
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-primary font-semibold"
          >
            {showAll ? "Show less reviews" : "Show more reviews"}
          </button>
        </div>
      )}
    </section>
  );
}
