import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AuthLayout from "../layout/AuthLayout";

export default function LoginPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    
    try {
      const response = await axios.post("http://localhost:8000/auth/login", data);
    
      if (response.status === 200 && response.data.Data.token) {
        localStorage.setItem("token", response.data.Data.token);
    
        // Show success toast and navigate to dashboard
        toast.success("Login successful!", {
          position: "top-right",
          autoClose: 1500,
          onClose: () => navigate("/dashboard"),
        });
      } else {
        toast.error("Invalid credentials. Please try again.");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
    
    
  };

  return (
    <AuthLayout
      title="Welcome Back 👋"
      subtitle="Today is a new day. It's your day. Sign in to start managing your projects."
    >
      <ToastContainer />

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        <div className="mb-2 "> 
          <label className="block text-left text-gray-1 font-[500] text-[16px] font-inter mb-1">Email</label>
          <input
            type="email"
            placeholder="example@email.com"
            className="relative mb-1 w-full border border-gray-300 placeholder:text-[14px] placeholder:text-gray-5 placeholder:font-[400] placeholder:font-inter rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
            {...register("email",
               {
              required: "Email is required",
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                message: "Invalid email format",
              },
            }
          )}
          />
          {errors.email && <p className="absolute  text-red-500 text-xs mt-[1px] md:mt-[2px]">{errors.email.message}</p>}
        </div>

        <div >
          <label className="block text-left text-gray-1 font-[500] text-[16px] font-inter mb-1">Password</label>
          <input
            type="password"
            placeholder="At least 8 characters"
            className="relative mb-1 w-full border border-gray-300 placeholder:text-[14px] placeholder:text-gray-5 placeholder:font-[400] placeholder:font-inter rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
            {...register("password",
               {
              required: "Password is required",
              minLength: { value: 8, message: "Password must be of at least 8 characters." },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/,
                message: "Password must include A-Z, a-z, 0-9 and !@#$%^&*.",
              },
            }
          )}
          />
          {errors.password && <p className=" absolute  text-red-500 text-xs mt-[1px] md:mt-[2px]">{errors.password.message}</p>}
        </div>


        <div className="text-right">
          <button
            type="button"
            onClick={() => navigate("/forgot-password")}
            className="text-blue-1 font-intern font-[500] hover:underline text-sm"
          >
            Forgot Password?
          </button>
        </div>


        <button
          type="submit"
          className="w-full bg-blue-2 text-white py-2 rounded-md hover:bg-[#2A6AB2] transition duration-200"
          disabled={loading}
        >
          {loading ? "Loading..." : "Sign In"}
        </button>
      </form>
    </AuthLayout>
  );
}