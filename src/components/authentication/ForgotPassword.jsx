import { useState } from "react";
import axios from "axios";
import AuthLayout from "../layout/AuthLayout"; 

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://vercel-trails.vercel.app/auth/forget-password", { email });
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Failed to send reset link. Try again.");
    }
  };

  return (
    <AuthLayout title="Forgot Password?" subtitle="Enter your email to receive a password reset link.">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-1 font-[600] mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 placeholder:text-[14px] rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="w-full bg-blue-2 text-white py-2 rounded-md hover:bg-[#2A6AB2] transition duration-200">
          Send Reset Link
        </button>
      </form>

      {message && <p className="text-green-500 text-sm mt-2">{message}</p>}
    </AuthLayout>
  );
}
