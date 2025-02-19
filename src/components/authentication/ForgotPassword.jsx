import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import AuthLayout from "../layout/AuthLayout"; 

export default function ForgotPassword() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("", { email: data.email }); 
      setMessage(response.data.message);
      reset(); 
    } catch (error) {
      setMessage("Failed to send reset link. Try again.");
    }
  };

  return (
    <AuthLayout title="Forgot Password?" subtitle="Enter your email to receive a password reset link.">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="relative mb-2">
          <label className="block text-left text-gray-1 font-[500] text-[16px] font-inter mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 placeholder:text-[14px] rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                message: "Email is invalid",
              },
            })}
          />
          {errors.email && <p className="absolute left-0 text-red-500 text-left text-xs mt-[2px]  p-[2px]">{errors.email.message}</p>}
        </div>

        <button type="submit" className="  w-full bg-blue-2 text-white py-2 rounded-md hover:bg-[#2A6AB2] transition duration-200 ">
          Send Reset Link
        </button>
      </form>

      {message && <p className={message === "Password reset successfully!" ? "text-green-500" : "text-red-500"}>{message}</p>} 
    </AuthLayout>
  );
}