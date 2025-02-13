/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import sideImage from "../../assets/images/sideImage.png";


export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/auth/forget-password", { email });
      setMessage(response.data.message);
    } catch (error) {
        console.log(error)
      setMessage("Failed to send reset link. Try again.");
    }
  };

  return (
    <div className="flex h-screen bg-white">
      <div className="w-1/2 hidden md:flex items-center justify-center p-6">
        <img src={sideImage} alt="Side Image" className="w-full h-auto object-cover rounded-lg" />
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center items-center relative">
        <div className="w-full max-w-md p-6">
          <img src={logo} alt="Company Logo" className="h-10 w-28 mb-4 object-cover" />
          <h1 className="text-2xl font-bold text-gray-800">Forgot Password?</h1>
          <p className="text-sm text-gray-600 mb-4">Enter your email to receive a password reset link.</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 focus:ring-2 focus:ring-blue-400 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button
              type="submit"
              className="w-full py-2 text-sm bg-blue-400 text-white rounded-md hover:bg-blue-500 transition duration-200"
            >
              Send Reset Link
            </button>
          </form>

          {/* Display Message */}
          {message && <p className="text-green-500 text-sm mt-2">{message}</p>}
        </div>

        {/* Footer - Fixed at the bottom */}
        <footer className="absolute bottom-4 w-full text-center">
          <p className="text-xs text-gray-400">© 2025 Enira Lean Automation.</p>
        </footer>
      </div>
    </div>
  );
}
