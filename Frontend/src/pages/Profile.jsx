import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export default function ProfilePage() {
  const { user } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState("favorites");

  const tabs = [
    { key: "favorites", label: "Favorites" },
    { key: "wishlist", label: "Wishlist" },
    { key: "reviewedBooks", label: "Reviewed" },
    { key: "recommendedBooks", label: "Recommended" },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      {/* Profile Header */}
      <div className="flex items-center gap-6 bg-white  shadow-md p-6 rounded-2xl">
        <img
          src={user.profileImage || "/default-profile.png"}
          alt="Profile"
          className="w-28 h-28 rounded-full object-cover border"
        />

        <div>
          <h1 className="text-3xl font-semibold">{user.name}</h1>
          <p className="text-gray-500">{user.email}</p>

          <span className="mt-2 inline-block bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-medium">
            {user.role === "reviewer" ? "Reviewer" : "Reader"}
          </span>
        </div>
      </div>

      {/* Bookshelf Tabs */}
      <div className="mt-10">
        <div className="flex gap-4 border-b">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 text-sm font-medium transition-all ${
                activeTab === tab.key
                  ? "border-b-2 border-indigo-600 text-indigo-600"
                  : "text-gray-500 hover:text-indigo-500"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Books List */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          {(user[activeTab] || []).length === 0 ? (
            <p className="text-gray-500">No books in this section.</p>
          ) : (
            user[activeTab].map((book) => (
              <div
                key={book._id}
                className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow hover:shadow-lg transition"
              >
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="w-full h-40 object-cover rounded-md"
                />
                <h3 className="mt-3 font-semibold">{book.title}</h3>
                <p className="text-gray-500 text-sm">{book.author}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
