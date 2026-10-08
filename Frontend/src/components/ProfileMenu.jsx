import { Link } from "react-router-dom";
import { User, PenSquare, Book, LogOut } from "lucide-react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function ProfileMenu() {
  const { setuser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("userInfo"); // remove stored user
    setuser(null); // clear context
    toast.success("Logged out successfully", { autoClose: 1500 });
    navigate("/login"); // redirect to login page
  };
  return (
    <div
      className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-3 z-50"
    >

      {/* My Profile */}
      <Link
        to="/profile"
        className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-md text-gray-700"
      >
        <User size={18} />
        My Profile
      </Link>

      {/* Reviewer */}
      <Link
        to="/profile/reviewer"
        className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-md text-gray-700"
      >
        <PenSquare size={18} />
        Reviewer
      </Link>

      {/* Bookshelf */}
      <Link
        to="/BookShelf"
        className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-md text-gray-700"
      >
        <Book size={18} />
        Bookshelf
      </Link>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="w-full flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-md text-red-600"
      >
        <LogOut size={18} />
        Logout
      </button>
    </div>
  );
}
