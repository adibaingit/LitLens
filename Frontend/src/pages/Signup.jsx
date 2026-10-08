import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true); // 🔥 Start loading

      const { data } = await axios.post(
        "http://localhost:5000/api/users/register",
        { name, email, password }
      );

      // Save user
      localStorage.setItem("userInfo", JSON.stringify(data));
      setUser(data);
      toast.success("Signup successful!", { autoClose: 1500 });
      navigate("/");

    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
      toast.error(err.response?.data?.message || "Something went wrong");

    } finally {
      setLoading(false); // 🔥 Stop loading
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center p-6 bg-bgSoft">
      <div className="bg-white shadow-xl rounded-xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-textCharcoal text-center">
          Create Account
        </h1>
        <p className="text-textCharcoal/60 text-center mt-2">
          Join our community of readers
        </p>

        {error && (
          <p className="mt-4 text-red-500 text-center font-medium">{error}</p>
        )}

        <form className="mt-6" onSubmit={handleSignup}>
          {/* Name */}
          <label className="block mb-2 text-sm font-medium text-textCharcoal">
            Full Name
          </label>
          <input
            type="text"
            className="w-full p-3 border border-bgSoft rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          {/* Email */}
          <label className="block mb-2 text-sm font-medium text-textCharcoal">
            Email Address
          </label>
          <input
            type="email"
            className="w-full p-3 border border-bgSoft rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Password */}
          <label className="block mb-2 text-sm font-medium text-textCharcoal">
            Password
          </label>
          <input
            type="text"
            className="w-full p-3 border border-bgSoft rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* Confirm Password */}
          <label className="block mb-2 text-sm font-medium text-textCharcoal">
            Confirm Password
          </label>
          <input
            type="password"
            className="w-full p-3 border border-bgSoft rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="********"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg font-semibold shadow-md transition 
            ${
              loading
                ? "bg-primary/60 cursor-not-allowed"
                : "bg-primary hover:bg-primaryHover text-bgWhite"
            }`}
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                {/* Spinner */}
                <span className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Signing…
              </div>
            ) : (
              "Create Account"
            )}
          </button>
        </form>

        <p className="text-center text-sm mt-6 text-textCharcoal/70">
          Already have an account?{" "}
          <a href="/login" className="text-primary font-semibold">
            Login
          </a>
        </p>
      </div>
    </section>
  );
}
