import { useState, useEffect } from "react";

const Bookshelf = () => {
  const [books, setBooks] = useState([]);
  const [activeTab, setActiveTab] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookshelf = async () => {
      try {
        const res = await fetch("/api/users/my-bookshelf");
        const data = await res.json();
        setBooks(data);
      } catch (err) {
        console.error("Error fetching bookshelf:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBookshelf();
  }, []);

  const tabs = [
    { id: "all", label: "All Books" },
    { id: "wantToRead", label: "Wishlist" },
    { id: "favorite", label: "Favorites" },
    { id: "reviewed", label: "Reviewed" },
  ];

  const filteredBooks =
    activeTab === "all"
      ? books
      : books.filter((b) => b.status === activeTab);

  if (loading) {
    return <p className="text-center mt-4">Loading bookshelf...</p>;
  }

  return (
    <div className="p-4">
      {/* Tabs */}
      <div className="flex gap-4 border-b pb-2">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id)}
            className={`pb-1 ${
              activeTab === t.id ? "border-b-2 border-blue-500" : ""
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Books */}
      <div className="mt-4 grid gap-4">
        {filteredBooks.map((book) => (
          <div
            key={book._id}
            className="p-3 bg-gray-100 rounded-md"
          >
            <h3 className="font-semibold">{book.title}</h3>
            <p className="text-sm text-gray-600 capitalize">
              Status: {book.status}
            </p>
          </div>
        ))}

        {filteredBooks.length === 0 && (
          <p className="text-gray-500 text-center mt-4">
            Nothing here yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default Bookshelf;
