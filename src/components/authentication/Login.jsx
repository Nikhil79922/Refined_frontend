import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import AuthLayout from "../layout/AuthLayout"; 

export default function LoginPage() {
  const navigate = useNavigate();
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
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Email Input */}
        <div>
          <label className="block text-gray-1 font-[600] font-inter mb-1">Email</label>
          <input
            type="email"
            placeholder="example@email.com"
            className="w-full border border-gray-300 placeholder:text-[14px] placeholder:text-gray-5 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
        </div>

        {/* Password Input */}
        <div>
          <label className="block text-gray-1 font-[600] font-inter mb-1">Password</label>
          <input
            type="password"
            placeholder="At least 8 characters"
            className="w-full border border-gray-300 placeholder:text-[14px] placeholder:text-gray-5 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
        </div>

        <div className="text-right">
          <button onClick={() => navigate("/forgot-password")} className="text-blue-1 font-[500] hover:underline text-sm">
            Forgot Password?
          </button>
        </div>

        <button type="submit" className="w-full bg-blue-2 text-white py-2 rounded-md hover:bg-[#2A6AB2] transition duration-200">
          Sign In
        </button>
      </form>
    </AuthLayout>
  );
}
