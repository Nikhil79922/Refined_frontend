import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuthLayout from "../layout/AuthLayout";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  const validatePassword = () => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/;
    if (!password.match(passwordRegex)) {
      setPasswordError(
        "Password must contain at least 1 uppercase, 1 lowercase, 1 number, and 1 special character (!@#$%^&*)"
      );
      return false;
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      return false;
    }
    setPasswordError(""); // clear error
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate password
    if (!validatePassword()) {
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    try {
      await axios.post(``, { password });
      setMessage("Password reset successfully!");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.log(error);
      setMessage("Failed to reset password. Try again.");
    }
  };

  return (
    <AuthLayout title="Reset Password" subtitle="Enter a new password for your account.">
      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* New Password Input */}
        <div className="">
          <label className="block text-gray-1 font-[600] font-inter mb-1">New Password</label>
          <input
            type="password"
            placeholder="New Password"
            className="w-full border border-gray-300 placeholder:text-[14px] placeholder:text-gray-5 placeholder:font-[400] placeholder:font-inter rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && (
            <p className=" text-red-500 text-xs mt-1">{passwordError}</p>
          )}
        </div>

        {/* Confirm Password Input */}
        <div>
          <label className="block text-gray-1 font-[600] font-inter mb-1">Confirm New Password</label>
          <input
            type="password"
            placeholder="Confirm New Password"
            className="w-full border border-gray-300 placeholder:text-[14px] placeholder:text-gray-5 placeholder:font-[400] placeholder:font-inter rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-2 text-white py-2 rounded-md hover:bg-[#2A6AB2] transition duration-200"
        >
          Reset Password
        </button>
      </form>

      {message && (
        <p
          className={
            message === "Password reset successfully!"
              ? "text-green-500 text-xs mt-[4px]"
              : "text-red-500 text-xs mt-[4px]"
          }
        >
          {message}
        </p>
      )}
    </AuthLayout>
  );
}