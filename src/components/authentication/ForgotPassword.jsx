import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import sideImage from "../../assets/images/sideImage.png";
import logo from '../../assets/svg/logo.svg';

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("", { email });
      setMessage(response.data.message);
    } catch (error) {
      console.log(error);
      setMessage("Failed to send reset link. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-start bg-gray-100 font-inter overflow-hidden">
      <div className="ToastContainer" /> 

      <div className="flex flex-col md:flex-row lg:gap-[2vw] w-[100vw] h-[100vh] md:w-auto">
        {/* Side Image */}
        <div className="relative hidden md:flex w-full md:w-[60vw] lg:w-[50vw] items-center justify-center p-5">
          <img src={sideImage} alt="Side Image" className="w-full h-[97vh] object-cover rounded-lg" />
          <div className="absolute flex items-start justify-start ml mb-[190px]">
          <h1 className="text-[#4C85C7] text-[40px] leading-[42px] sm:text-30px md:text-[40px] font-bold  font-inter">
            FCore</h1>
        </div>
        </div>

        {/* Forgot Password Form Section */}
        <div className="w-full md:w-[40vw] lg:w-[30vw] flex flex-col justify-center px-6 sm:px-8 py-10 h-full relative">
          {/* Logo */}
          {/* <div className="w-[100px]">
            <h1 className="text-[#4C85C7] text-[30px] leading-[54px] sm:text-24px md:text-[30px] font-bold font-inter">
              FCore</h1>
          </div> */}
 {/* Logo */}
 <img src={logo} alt="Company Logo" className="w-[112px] h-[60px] mb-4" />

          {/* Forgot Password Text */}
          <h1 className="text-[30px] font-semibold text-gray-1 mb-4">Forgot Password?</h1>
          <p className="text-gray-1 font-[400] leading-[24px] text-[16px] mb-6">
            Enter your email to receive a password reset link.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Input */}
            <div>
              <label className="block text-gray-1 font-[600] mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 placeholder:text-[14px] placeholder:text-gray-5 placeholder:font-[400] placeholder:font-inter rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-2 text-white py-2 rounded-md hover:bg-[#2A6AB2] transition duration-200"
            >
              Send Reset Link
            </button>
          </form>

          {/* Display Message */}
          {message && <p className="text-green-500 text-sm mt-2">{message}</p>}

          {/* Footer */}
          <footer className="text-center absolute bottom-3 left-[30vw] sm:left-[38vw] md:left-[10vw]">
            <p className="text-xs text-gray-5">© 2025 Enira Lean Automation.</p>
          </footer>
        </div>
      </div>
    </div>
  );
}
