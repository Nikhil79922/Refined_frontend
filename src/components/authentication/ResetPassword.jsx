import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuthLayout from "../layout/AuthLayout"; 

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const token = new URLSearchParams(location.search).get("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }
    try {
      await axios.post(`https://vercel-trails.vercel.app/auth/reset-password?token=${token}`, { password });
      setMessage("Password reset successfully!");
      setTimeout(() => navigate("/"), 2000);
    } catch {
      setMessage("Failed to reset password.");
    }
  };

  return (
    <AuthLayout title="Reset Password" subtitle="Enter a new password for your account.">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="password" placeholder="New Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        <button type="submit">Reset Password</button>
      </form>
      {message && <p>{message}</p>}
    </AuthLayout>
  );
}
