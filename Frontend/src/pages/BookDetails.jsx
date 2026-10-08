import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Review from "./Review";

export default function BookDetails() {
  //
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  const [book, setBook] = useState(null);
  const [wishlist, setWishlist] = useState(false);
  const [isBuyOpen, setIsBuyOpen] = useState(false);
  const [isStatusOpen, setIsStatusOpen] = useState(false);

  // Fetch book details from backend
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await fetch(`/api/books/${id}`);
        const data = await res.json();
        console.log("Fetching book with ID:", id);
        console.log("Fetched book data:", data);
        setBook(data);
      } catch (err) {
        console.error("Error fetching book:", err);
      }
    };

    fetchBook();
  }, [id]);

  // Handle wishlist toggle
  const toggleWishlist = async () => {
    if (!user) {
      alert("You need to login first.");
      return;
    }

    setWishlist(!wishlist);

    await fetch(`api/users/wishlist/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
  };

  // Update reading status: wantToRead, currentlyReading, read
  const updateStatus = async (status) => {
    setIsStatusOpen(false);

    await fetch(`/users/bookshelf/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
  };

  if (!book)
    return <p className="text-center text-textCharcoal mt-10">Loading...</p>;

  return (
    <>
    <div className="flex gap-6 mt-10 mx-auto bg-bgWhite rounded-xl shadow-md border border-bgSoft p-10 hover:shadow-lg transition max-w-4xl ">
      {/* <div className="flex justify-between w-full items-center"> */}
        {/* LEFT: Book Cover */}
        <div className="min-w-[140px] max-w-[140px] h-[200px] rounded-lg overflow-hidden bg-bgSoft shadow">
          <img
            src={book.coverImage}
            alt={book.title}
            className="w-full rounded-xl shadow-2xl"
          />

          {/* Heart Icon */}
          <button
            onClick={toggleWishlist}
            className="absolute top-3 right-3 text-2xl text-white"
          >
            {wishlist ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
          </button>
        </div>

        {/* RIGHT: Book Info */}
        <div className="flex flex-col flex-1">
          {/* Genre */}
          <p className="text-xs font-semibold text-primary tracking-wide uppercase">
            Featured → {book.genre}
          </p>

          {/* Title */}
          <h1 className="text-2xl font-bold text-textCharcoal mt-1">
            {book.title}
          </h1>

          {/* Author */}
          <p className="text-textCharcoal/80 font-medium">By {book.author}</p>

          {/* Buttons */}
          <div className="flex items-center gap-4 mt-4">
            {/* BUY NOW BUTTON */}
            <div className="relative">
              <button
                onClick={() => setIsBuyOpen(!isBuyOpen)}
                className="bg-primary text-white px-5 py-3 rounded-lg font-semibold shadow flex items-center gap-2"
              >
                Buy it now ▼
              </button>

              {isBuyOpen && (
                <div className="absolute left-0 mt-2 w-40 bg-white border rounded shadow-lg z-20">
                  <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Amazon
                  </p>
                  <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Flipkart
                  </p>
                </div>
              )}
            </div>

            {/* READING STATUS DROPDOWN */}
            <div className="relative">
              <button
                onClick={() => setIsStatusOpen(!isStatusOpen)}
                className="bg-bgSoft text-textCharcoal px-5 py-3 rounded-lg font-semibold shadow flex items-center gap-2"
              >
                Read ▼
              </button>

              {isStatusOpen && (
                <div className="absolute left-0 mt-2 w-44 bg-white border rounded shadow-lg z-20">
                  <p
                    onClick={() => updateStatus("wantToRead")}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Want to read
                  </p>
                  <p
                    onClick={() => updateStatus("currentlyReading")}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Reading
                  </p>
                  <p
                    onClick={() => updateStatus("read")}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Read
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* DESCRIPTION */}
          <p className="text-textCharcoal/80 mt-6 text-lg max-w-xl">
            {book.description}
          </p>
        </div>
      {/* </div> */}
      </div>
      {/* REVIEWS SECTION */}
      <div className="w-full mt-2">
        <Review bookId={id} />
      </div>
  
    </>
  );
}
