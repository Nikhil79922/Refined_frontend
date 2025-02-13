import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from '../../assets/svg/logo.svg'

import sideImage from "../../assets/images/sideImage.png";

import wavingHand from "../../assets/images/wavingHand.png";

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
    // setLoading(true);
    // try {
    //   const response = await axios.post("http://localhost:8000/auth/login", data);
    //   if (response.status === 200 && response.data.token) {
    //     localStorage.setItem("token", response.data.token);
    //     toast.success("Login successful!", {
    //       position: "top-right",
    //       autoClose: 1500,
    //       onClose: () => navigate("/dashboard"),
    //     });
    //   } else {
    //     toast.error("Invalid credentials. Please try again.");
    //   }
    // } catch (error) {
    //   toast.error(error.response?.data?.message || "Login failed. Please try again.");
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <div className=" h-screen flex items-center justify-center bg-white font-inter">
      <ToastContainer />

      {/* Side Image */}
      <div className="hidden md:flex w-1/2 justify-center items-center py-6 px-8 ">
        <img
          src={sideImage}
          alt="Side"
          className="w-full h-auto max-w-[916px] max-h-[1032px] object-cover rounded-lg"
        />
      </div>

      {/* Login Form Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-end px-6 md:px-[125px] font-inter">
        <div className="w-full max-w-md">
          {/* Logo */}
          <img src={logo} alt="Company Logo" className="w-[112px] h-[60px] mb-4" />
          <div className="">
            {/* Welcome Text */}
            <div className="flex items-center gap-2 text-[#141415] mt-3 mb-4">
              <h1 className="text-[36px] font-semibold leading-[36px] tracking-[0.01em]">Welcome Back</h1>
              <img src={wavingHand} alt="Waving Hand" className="w-9 h-9" />
            </div>

            <p className="text-[18px] font-normal leading-[32px] tracking-[0.01em] text-[#141415] mt-3 max-w-[454px] max-h-[64px]">
              Today is a new day. It's your day. You shape it. Sign in to start managing your projects.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
              {/* Email Input */}
              <div>
                <label className="block text-[16px] font-semibold text-[#141415] mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Example@email.com"
                  className="w-full  h-auto max-w-[508px] max-h-[54px] border border-[#E7E7E7] rounded-md bg-[#F2F2F7] px-5 py-[17px] text-[16px] leading-[20px] placeholder-[#98A2B2] focus:ring-2 focus:ring-blue-400 outline-none"
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
                <label className="block text-[16px] font-semibold text-[#141415] mb-1">Password</label>
                <input
                  type="password"
                  placeholder="At least 8 characters"
                  className="w-full  h-auto max-w-[508px] max-h-[54px] border border-[#E7E7E7] rounded-md bg-[#F2F2F7] px-5 py-[17px] text-[16px] leading-[20px] placeholder-[#98A2B2] focus:ring-2 focus:ring-blue-400 outline-none"
                  {...register("password", {
                    required: "Password is required",
                    minLength: { value: 8, message: "Password must be at least 8 characters long" },
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/,
                      message:
                        "Password must contain at least 1 uppercase, 1 lowercase, 1 number, and 1 special character (!@#$%^&*)",
                    },
                  })}
                />
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
              </div>

              {/* Forgot Password */}
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => navigate("/forgot-password")}
                  className="text-[16px] font-medium text-[#128EC4] hover:text-[#10699E] transition duration-200"
                >
                  Forgot Password?
                </button>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full h-[54px] text-[18px] py-[18px] font-semibold bg-[#179FDB] text-white rounded-md hover:bg-[#128EC4] transition duration-200"
                disabled={loading}
              >
                {loading ? (
                  <lord-icon
                    src="https://cdn.lordicon.com/mfblariy.json"
                    trigger="loop"
                    state="loop-cycle"
                    colors="primary:#ffffff,secondary:#ffffff"
                    style={{ width: "20px", height: "20px", padding: "2px" }}
                  ></lord-icon>
                ) : (
                  "Sign In"
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <footer className="absolute bottom-4 w-full text-center">
          <p className="text-xs text-gray-400">© 2025 Enira Lean Automation.</p>
        </footer>
      </div>
    </div>
  );
}
