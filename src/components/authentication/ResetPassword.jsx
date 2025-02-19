import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import AuthLayout from "../layout/AuthLayout";

const schema = yup.object().shape({
  password: yup
    .string()
    .min(8, "Password must be of at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/,
      "Password must include A-Z, a-z, 0-9 and !@#$%^&*."
    )
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords do not match!")
    .required("Confirm Password is required"),
});

export default function ResetPassword() {
  const navigate = useNavigate();
  const location = useLocation();

  // Extract token from URL
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    setFocus("password"); // Focus on password field on mount
  }, [setFocus]);

  const onSubmit = async (data) => {
    try {
      await axios.post(``, { password: data.password, token });
      alert("Password reset successfully!");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error(error);
      alert("Failed to reset password. Try again.");
    }
  };

  return (
    <AuthLayout title="Reset Password" subtitle="Enter a new password for your account.">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* New Password */}
        <div className="relative   p-[2px]">
          <label className="block text-left text-gray-1 font-[500] md:font-[600] text-[16px] font-inter mb-1">New Password</label>
          <input
            type="password"
            placeholder="New Password"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
            {...register("password")}
          />
          {errors.password && <p className="absolute text-left  text-red-500 text-xs mt-[4px]">{errors.password.message}</p>}
        </div>

        {/* Confirm Password */}
        <div className="relative p-[2px] ">
          <label className="block text-left text-gray-1 font-[500] md:font-[600] text-[16px] font-inter mb-1">Confirm New Password</label>
          <input
            type="password"
            placeholder="Confirm New Password"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && <p className="absolute text-left text-red-500 text-xs mt-[4px]">{errors.confirmPassword.message}</p>}
        </div>

        {/* Submit Button */}
        <div className=" p-[2px]">
        <button
          type="submit"
          className=" w-full bg-blue-2 text-white py-2 rounded-md hover:bg-[#2A6AB2] transition duration-200  "
          disabled={isSubmitting}
        >
          {isSubmitting ? "Resetting..." : "Reset Password"}
        </button>
        </div>
      </form>
    </AuthLayout>
  );
}