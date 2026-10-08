import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function BookCard({ book }) {
  return (
    <Link to={`/book/${book._id}`}>
    <article
    
      className="flex gap-6 bg-bgWhite rounded-xl shadow-md border border-bgSoft p-5 hover:shadow-lg transition"
      aria-label={`Book: ${book.title}`}
    >
      {/* LEFT: BOOK COVER */}
      <div className="min-w-[140px] max-w-[140px] h-[200px] rounded-lg overflow-hidden bg-bgSoft shadow">
        {book.coverImage ? (
          <img
            src={book.coverImage}
            alt={book.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-secondary/60">
            No Image
          </div>
        )}
      </div>

      {/* RIGHT SIDE INFO */}
      <div className="flex flex-col flex-1">
        {/* Genre */}
        {book.genre && (
          <p className="text-xs font-semibold text-primary tracking-wide uppercase">
            {book.genre}
          </p>
        )}

        {/* Title */}
        <h2 className="text-2xl font-bold text-textCharcoal mt-1">
          {book.title}
        </h2>

        {/* Author + Rating */}
        <div className="flex items-center gap-3 mt-1">
          <p className="text-textCharcoal/80 font-medium">{book.author}</p>

          {/* Stars */}
          <div className="flex">
            {[1, 2, 3, 4, 5].map((n) => (
              <FaStar
                key={n}
                size={16}
                className={
                  n <= book.averageRating
                    ? "text-yellow-400"
                    : "text-gray-300"
                }
              />
            ))}
          </div>
        </div>

        {/* Description */}
        <p className="text-textCharcoal/70 mt-3 line-clamp-3">
          {book.description || "No description available."}
        </p>

        {/* Reviewer (optional) */}
        {book.reviewer && (
          <p className="text-sm mt-4">
            Reviewed by{" "}
            <span className="text-primary font-semibold">
              {book.reviewer}
            </span>
          </p>
        )}
      </div>
      
    </article>
    </Link>
  );
}
