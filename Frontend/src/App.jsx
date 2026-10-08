import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";

import Home from "./pages/Home";
import Genres from "./pages/Genres";
import Review from "./pages/Review";
import Search from "./pages/Search";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";
import BookDetails from "./pages/BookDetails";
import BookShelf from "./pages/BookShelf";



function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/review" element={<Review />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/BookShelf" element={<BookShelf />}/>
          

        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
