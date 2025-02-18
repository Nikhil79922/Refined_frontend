import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import AuthLayout from "../layout/AuthLayout";

export default function LoginPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    navigate("/Dashboard");
  };

  return (
    <AuthLayout
      title="Welcome Back 👋"
      subtitle="Today is a new day. It's your day. Sign in to start managing your projects."
    >
      <ToastContainer />
      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        <div>
          <label className="block text-gray-1 font-[600] font-inter mb-1">Email</label>
          <input
            type="email"
            placeholder="example@email.com"
            className="relative mb-1 w-full border border-gray-300 placeholder:text-[14px] placeholder:text-gray-5 placeholder:font-[400] placeholder:font-inter rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && <p className="absolute  text-red-500 text-xs mt-[2px]">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-gray-1 font-[600] font-inter mb-1">Password</label>
          <input
            type="password"
            placeholder="At least 8 characters"
            className="relative mb-1 w-full border border-gray-300 placeholder:text-[14px] placeholder:text-gray-5 placeholder:font-[400] placeholder:font-inter rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 8, message: "Password must be at least 8 characters long" },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/,
                message: "Password must include A-Z, a-z, 0-9 and !@#$%^&*.",
              },
            })}
          />
          {errors.password && <p className=" absolute  text-red-500 text-xs mt-[2px]">{errors.password.message}</p>}
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
