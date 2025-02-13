import { Routes, Route } from "react-router-dom";
import LoginPage from "../components/authentication/Login.jsx";
import ForgotPassword from "../components/authentication/ForgotPassword.jsx";
import ResetPassword from "../components/authentication/ResetPassword.jsx";

export default function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
    </Routes>
  );
}
