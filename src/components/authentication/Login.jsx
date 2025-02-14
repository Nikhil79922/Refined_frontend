import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import sideImage from "../../assets/images/sideImage.png";
import logo from "../../assets/svg/logo.svg";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    navigate("/Dashboard");
  };

  return (
<div className="min-h-screen flex items-center justify-start  bg-gray-100 font-inter overflow-hidden">
  <ToastContainer />

  <div className="flex flex-col md:flex-row  lg:gap-[4vw] w-[100vw] h-[100vh] md:w-auto">
    {/* Side Image */}
    <div className="relative hidden md:flex w-full md:w-[60vw] lg:w-[50vw]  items-center justify-center p-5">
      <img src={sideImage} alt="Side" className="w-full h-[97vh] object-cover rounded-lg" />
    </div>

    {/* Login Form Section */}
    <div className="w-full md:w-[40vw] lg:w-[30vw] flex flex-col gap-[-10px] justify-center px-6 sm:px-8 py-10 h-full relative">
      {/* Logo */}
      <img src={logo} alt="Company Logo" className="w-24 mb-6" />

      {/* Welcome Text */}
      <h1 className="text-[30px] font-semibold font-inter text-gray-1 mb-4">Welcome Back 👋</h1>
      <p className="text-gray-1 font-[400] font-inter leading-[24px] text-[16px] mb-6">Today is a new day. It's your day. You shape it. 
      Sign in to start managing your projects.</p>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Email Input */}
        <div>
          <label className="block text-gray-1 font-[600] font-inter mb-1">Email</label>
          <input
            type="email"
            placeholder="Example@email.com"
            className="w-full border border-gray-300 placeholder:text-[14px] placeholder:text-gray-5 placeholder:font-[400] placeholder:font-inter rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>

        {/* Password Input */}
        <div>
          <label className="block text-gray-1 font-[600] font-inter mb-1">Password</label>
          <input
  type="password"
  placeholder="At least 8 characters"
  className="w-full border border-gray-300 placeholder:text-[14px] placeholder:text-gray-5 placeholder:font-[400] placeholder:font-inter rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
  {...register("password", {
    required: "Password is required",
    minLength: { value: 8, message: "Password must be at least 8 characters long" },
    pattern: {
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/,
      message: "Password must contain at least 1 uppercase, 1 lowercase, 1 number, and 1 special character (!@#$%^&*)",
    },
  })}
/>
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
        </div>

        {/* Forgot Password */}
        <div className="text-right">
          <button
            type="button"
            onClick={() => navigate("/forgot-password")}
            className="text-blue-1 font-intern font-[500] hover:underline text-sm"
          >
            Forgot Password?
          </button>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-2 text-white py-2 rounded-md hover:bg-blue-500 transition duration-200"
          disabled={loading}
        >
          {loading ? "Loading..." : "Sign In"}
        </button>
      </form>

      {/* Footer */}
      <footer className="text-center absolute bottom-3 left-[30vw] sm:left-[38vw] md:left-[10vw]  ">
        <p className="text-xs text-gray-5">© 2025 Enira Lean Automation.</p>
      </footer>
    </div>
  </div>
</div>

  );
}

