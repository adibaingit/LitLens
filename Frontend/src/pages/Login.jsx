import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // 🔥 Loading state

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      toast.info("You are already logged in", { autoClose: 1500 });
      navigate("/");
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true); // Start loading

      const { data } = await axios.post(
        "http://localhost:5000/api/users/login",
        { email, password }
      );

      // Save logged-in user
      localStorage.setItem("userInfo", JSON.stringify(data));
      setUser(data);
      toast.success("Login successful!", { autoClose: 1500 });
      // Redirect
      navigate("/");
    } catch (err) {
      const msg = err.response?.data?.message || "Something went wrong";
      setError(msg);
      toast.error(msg);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-bgSoft">
      <div className="bg-bgWhite shadow-xl rounded-xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-textCharcoal text-center">
          Welcome Back
        </h1>
        <p className="text-textCharcoal/60 text-center mt-2">
          Login to continue reading
        </p>

        {error && (
          <p className="mt-4 text-red-500 text-center font-medium">{error}</p>
        )}

        <form className="mt-6" onSubmit={handleLogin}>
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
            type="password"
            className="w-full p-3 border border-bgSoft rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* Login Button */}
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
                Logging in...
              </div>
            ) : (
              "Login"
            )}
          </button>
        </form>

        <p className="text-center text-sm mt-6 text-textCharcoal/70">
          Don't have an account?{" "}
          <a href="/signup" className="text-primary font-semibold">
            Sign up
          </a>
        </p>
      </div>
    </section>
  );
}
