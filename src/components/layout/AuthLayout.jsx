import React from "react";
import sideImage from "../../assets/images/sideImage.png";
import logo from "../../assets/svg/logo.svg";

const AuthLayout = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen flex items-center justify-start bg-gray-100 font-inter overflow-hidden">
      <div className="flex flex-col md:flex-row lg:gap-[4vw] w-[100vw] h-[100vh] md:w-auto">
        {/* Side Image */}
        <div className="relative hidden md:flex w-full md:w-[60vw] lg:w-[50vw] items-center justify-center p-5">
          <img src={sideImage} alt="Side Image" className="w-full h-[97vh] object-cover rounded-lg" />
          <div className="absolute flex items-start justify-start ml mb-[190px]">
            <h1 className="text-[#4C85C7] text-[40px] leading-[42px] sm:text-30px md:text-[40px] font-bold font-inter">
              FCore
            </h1>
          </div>
        </div>

        {/* Authentication Form Section */}
        <div className="w-full md:w-[40vw] lg:w-[30vw] flex flex-col justify-center px-6 sm:px-8 py-10 h-full relative">
          {/* Logo */}
          <img src={logo} alt="Company Logo" className="w-[112px] h-[60px] mb-4" />

          {/* Page Title & Subtitle */}
          {title && <h1 className="text-[30px] font-semibold text-gray-1 mb-4">{title}</h1>}
          {subtitle && <p className="text-gray-1 font-[400] leading-[24px] text-[16px] mb-6">{subtitle}</p>}

          {/* Dynamic Form Content */}
          {children}

          {/* Footer */}
          <footer className="text-center absolute bottom-3 left-[30vw] sm:left-[38vw] md:left-[10vw]">
            <p className="text-xs text-gray-5">© 2025 Enira Lean Automation.</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
