import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useCart } from "../context/CartContext";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useCart();

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get("http://localhost:7000/users");
      const user = response.data.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        setUser(user);
        alert("Login successful");
        navigate("/products");
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
          >
            Sign In
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Don&apos;t have an account?
          <NavLink
            to="/signup"
            className="text-indigo-600 font-semibold hover:underline"
          >
            Sign Up
          </NavLink>
        </p>
      </div>
    </div>
  );
}
