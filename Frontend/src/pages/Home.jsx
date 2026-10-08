import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import { newBooks } from "../data/newBooks";
// import booksData from "../data/booksData";

function Home() {
//fetching bookdata from backend
const [books, setBooks] = useState([]);
const [setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch("/api/books");
        const data = await res.json();
        setBooks(data);
      } catch (err) {
        console.error("Error fetching books:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);
  

  // Dynamic headline words
  const words = [
    "Adventures",
    "Horror",
    "Mystery",
    "Romance",
    "Sci-Fi",
    "Self-Help",
    "Finance",
  ];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (!deleting && subIndex === words[index].length) {
      // pause when a word finishes typing
      setTimeout(() => setDeleting(true), 1000);
      return;
    }

    if (deleting && subIndex === 0) {
      // switch to next word
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const speed = deleting ? 50 : 120; // typing + deleting speed

    const timer = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, speed);

    return () => clearTimeout(timer);
  }, [subIndex, deleting, index]);

  // blinking cursor effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setBlink((prev) => !prev);
    }, 450);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <div className="w-full">
      <section className=" mx-auto px-6 lg:px-10 py-10 mb-6 flex flex-col lg:flex-row justify-center items-center gap-12">
        {/* LEFT SIDE */}
        <div className="flex-1">
          <h1 className="text-3xl lg:text-6xl font-extrabold leading-tight text-textCharcoal">
            Let Yourself Lost In
          </h1>

          <div className="mt-2 text-3xl lg:text-6xl font-extrabold text-primary h-[70px]">
            {words[index].substring(0, subIndex)}
            <span className="text-primary">{blink ? "|" : ""}</span>
          </div>

          <p className="mt-6 text-lg text-textCharcoal/70 max-w-xl">
            Discover unforgettable worlds, breathtaking stories, and emotions
            that stay with you forever. Lose yourself in the magic of books.
          </p>

          <button
            onClick={() =>
              document
                .getElementById("explore-section")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="mt-8 px-7 py-3 bg-primary hover:bg-primaryHover text-bgWhite rounded-lg font-semibold shadow-md hover:shadow-lg transition"
          >
            Start Exploring →
          </button>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full h-72 rounded-xl aspect-4/3 bg-bgSoft shadow-lg overflow-hidden">
            <img
              className=" object-cover h-full w-full rounded-xl"
              src="https://i.pinimg.com/1200x/9c/42/97/9c429734866e1c30b95074f8d6dd24fa.jpg"
              alt="Book Image"
            />
          </div>
        </div>
      </section>

      {/* ---------- START EXPLORING SECTION ---------- */}
      <section
        id="explore-section"
        className="max-w-7xl mx-auto px-6"
        aria-label="Start Exploring Books"
      >
        <h2 className="text-3xl font-bold text-textCharcoal">
          Start Exploring
        </h2>

        {/* Sub Title */}
        <p className="text-textCharcoal/70 mt-2 mb-8">
          Here's what our reviewers think you should read this week.
        </p>

        <div
          className="
      grid 
      grid-cols-1
      md:grid-cols-2
      gap-6
    "
        >
          {books.slice(0, 4).map((book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
      </section>

      {/* ---------- NEWLY ADDED BOOKS SECTION ---------- */}
      <section
        className="max-w-7xl mx-auto px-6 mt-24"
        aria-label="Newly Added Books"
      >
        <h2 className="text-3xl font-bold text-textCharcoal mb-8">
          Newly Added Books
        </h2>

        <div
          className="
      grid 
      grid-cols-1
      md:grid-cols-2
      gap-6
    "
        >
          {books.slice(11, 13).map((book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
      </section>

      {/* ---------- RECOMMENDED FOR YOU (COMING SOON) ---------- */}
      <section
        className="max-w-7xl mx-auto p-10 mt-24"
        aria-label="Recommended Books"
      >
        <h2 className="text-3xl font-bold text-textCharcoal mb-4">
          Recommended For You
        </h2>
        {/* <p className="text-textCharcoal/60">
          Login to get personalized recommendations.
        </p> */}
        <div
          className="
      grid 
      grid-cols-1
      md:grid-cols-2
      gap-6
    "
        >
          {books.slice(3, 5).map((book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
