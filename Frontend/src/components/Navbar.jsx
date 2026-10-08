import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import ProfileMenu from "../components/ProfileMenu"; 
import { FaRegCircleUser } from "react-icons/fa6";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const [openMenu, setOpenMenu] = useState(false);

  const handleLogout = () => {
    logout(); // from AuthContext
    setOpenMenu(false);
  };

  return (
    <nav className="w-full bg-primary text-bgWhite shadow-md sticky top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold tracking-wide hover:text-secondaryHover transition-colors"
        >
          LitLens
        </Link>

        {/* Menu Items */}
        <div className="flex-1 flex justify-center space-x-8 text-lg font-semibold">
  <Link to="/" className="hover:text-secondaryHover transition-colors">
    Home
  </Link>

  <Link
    to="/genres"
    className="hover:text-secondaryHover transition-colors"
  >
    Books
  </Link>
</div>

<div className="flex items-center space-x-8 text-lg font-semibold">
          {/* If NOT logged in → show Login + Signup */}
          {!user && (
            <>
              <Link
                to="/login"
                className="hover:text-accentTealHover transition-colors"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="hover:text-accentWineHover transition-colors"
              >
                Signup
              </Link>
            </>
          )}

          {/* If logged in → show Profile dropdown */}
          {user && (
            <div 
              className="relative"
              onMouseEnter={() => setOpenMenu(true)}
              onMouseLeave={() => setOpenMenu(false)}
            >
                <button className="flex items-center gap-1 hover:text-secondaryHover transition-colors">
                Hi, {user.name} 
                <FaRegCircleUser />
              </button>

              {openMenu && (
                <ProfileMenu
                  username={user.name}
                  onLogout={handleLogout}
                />
              )}
            </div>
          )}

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
