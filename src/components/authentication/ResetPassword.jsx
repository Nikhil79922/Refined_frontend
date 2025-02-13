/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import sideImage from "../../assets/images/sideImage.png";


export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

const queryParams=new URLSearchParams(location.search);
const token=queryParams.get('token');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }
    try {
      await axios.post(`http://localhost:8000/auth/reset-password?token=${token}`, { password });
      setMessage("Password reset successfully!");
      setTimeout(() => {
        navigate("/"); 
      }, 2000);
    } catch(error) {
        console.log(error)
      setMessage("Failed to reset password. Try again.");
    }
  };

  return (
    <div className="flex h-screen bg-white">
      <div className="w-1/2 hidden md:flex items-center justify-center p-6">
        <img src={sideImage} alt="Side Image" className="w-full h-auto object-cover rounded-lg" />
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
        <div className="w-full max-w-md p-6">
          <img src={logo} alt="Company Logo" className="h-10 w-28 mb-4 object-cover" />
          <h1 className="text-2xl font-bold text-gray-800">Reset Password</h1>
          <p className="text-sm text-gray-600 mb-4">Enter a new password for your account.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="password"
              placeholder="New Password"
              className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 focus:ring-2 focus:ring-blue-400 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Confirm New Password"
              className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 focus:ring-2 focus:ring-blue-400 outline-none"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            <button
              type="submit"
              className="w-full py-2 text-sm bg-blue-400 text-white rounded-md hover:bg-blue-500 transition duration-200"
            >
              Reset Password
            </button>
          </form>
          {message && <p className="text-green-500 text-sm mt-2">{message}</p>}
          <footer className="text-center mt-6">
            <p className="text-xs text-gray-400">© 2025 Enira Lean Automation.</p>
          </footer>
        </div>
      </div>
    </div>
  );
}
