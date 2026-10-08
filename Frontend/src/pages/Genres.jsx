import { useState } from "react";
import BookCard from "../components/BookCard";
import booksData from "../data/booksData";

const GenrePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [sortOption, setSortOption] = useState("");

  // Extract unique genres
  const genres = ["All", ...new Set(booksData.map((b) => b.genre))];

  // Filter books by genre + search
  const filteredBooks = booksData.filter((book) => {
    const matchesGenre =
      selectedGenre === "All" ? true : book.genre === selectedGenre;

    const matchesSearch = book.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesGenre && matchesSearch;
  });

  // Sorting
  const sortedBooks = [...filteredBooks].sort((a, b) => {
    if (sortOption === "name") {
      return a.title.localeCompare(b.title);
    }
    if (sortOption === "genre") {
      return a.genre.localeCompare(b.genre);
    }
    return 0;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-6 text-textCharcoal">
        Explore Books
      </h1>

      {/* ---------- SEARCH + SORT ---------- */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
        {/* Search */}
        <input
          type="text"
          placeholder="Search by title..."
          className="border px-4 py-2 rounded-lg w-full md:w-1/3"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {/* Sort Dropdown */}
        <select
          className="border px-4 py-2 rounded-lg w-full md:w-1/4"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="name">Name (A-Z)</option>
          <option value="genre">Genre (A-Z)</option>
        </select>
      </div>

      {/* ---------- GENRE TABS ---------- */}
      <div className="flex flex-wrap gap-3 mb-10">
        {genres.map((g) => (
          <button
            key={g}
            onClick={() => setSelectedGenre(g)}
            className={`px-4 py-2 rounded-full border transition 
              ${
                selectedGenre === g
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-textCharcoal border-gray-300"
              }`}
          >
            {g}
          </button>
        ))}
      </div>

      {/* ---------- BOOK GRID ---------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sortedBooks.length > 0 ? (
          sortedBooks.map((book) => <BookCard key={book.id} book={book} />)
        ) : (
          <p className="text-lg text-gray-500">No books found.</p>
        )}
      </div>
    </div>
  );
};

export default GenrePage;
