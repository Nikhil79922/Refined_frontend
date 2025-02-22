import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import mic from '../../assets/svg/mic.svg'
import folder from '../../assets/svg/folder.svg'
import notification from '../../assets/svg/notification.svg'
import avatar from '../../assets/svg/avatar.svg'
import SelectBox from "./SelectBox";
import InputBox from "./InputBox";

import { useSelector } from 'react-redux';  // Import Redux hooks



export default function Header() {

  const isSlideOpen = useSelector((state) => state.sidebar.isSlideOpen);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);



  const handleCloseForm = () => {
    setIsFormOpen(false);
    reset(); // Clear the form fields when closing
  };

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const onSubmit = async (data) => {
    try {
      const info = {
        name: data.name,
        email: data.email,
        password: data.password,
        role: data.role,
      };

      const response = await axios.post("http://localhost:8000/auth/signup", info);
      console.log("User Registered:", response.data);

      setIsRegistered(true);

      setIsFormOpen(false);

      reset();
      setIsDropdownOpen(false);
      setTimeout(() => setIsRegistered(false), 3000);

    } catch (error) {
      console.error("Error registering user:", error);
    }
  };
  return (
    <header className={`flex  lg:left-[15.5vw] items-center justify-between h-[73px] border-b-[0.9px] border-gray-200 bg-gray-4 w-[98vw]   ${isSlideOpen ? `lg:w-[84.5vw]` : `lg:w-[97.5vw] lg:ml-[40px]`}`}>
      <div className="flex ml-[40px] lg:ml-[0px] h-[73px] items-center ">
        <span className="material-symbols-outlined cursor-pointer text-gray-3 bg-white flex items-center justify-center w-[7vw] sm:w-[6vw] md:w-[4vw]   lg:w-[2.8vw] text-[19px] sm:text-[23px] rounded-tl-[8px] rounded-bl-[8px] ml-[10px] sm:ml-[20px]  h-[35px]  sm:h-[42px]">
          search
        </span>
        <input
  type="text"
  name="search"
  {...register("search")}
  placeholder="Search Tasks"
  className="h-[35px] sm:h-[42px] font-bold outline-none rounded-none placeholder:text-[10px] placeholder-gray-5 w-[24vw] sm:w-[25vw] md:w-[18vw] lg:w-[14vw] text-[12px]"
/>


        <span className="material-symbols-outlined text-gray-350 bg-white flex items-center justify-center w-[7vw] sm:w-[6vw] md:w-[4vw]  lg:w-[2.8vw] text-[19px] sm:text-[23px] cursor-pointer h-[35px]  sm:h-[42px] rounded-tr-[8px] rounded-br-[8px] ">
          login
        </span>
        <img src={mic} className="cursor-pointer bg-gray-4 flex items-center justify-center w-[3vw] text-[24px] h-[15px] sm:h-[19px] ml-[8px]" />

      </div>
      <div className="flex gap-1 sm:gap-2 md:gap-3 relative top-[5.5px] mr-[21px]">
        <img src={folder} className="cursor-pointer h-[21px] sm:h-[26px] bg-gray-4 flex items-center justify-center" />

        <img src={notification} className="cursor-pointer  h-[21px] sm:h-[26px] bg-gray-4 flex items-center justify-center" />

        <div className="relative">
          <div
            className="h-[33px] w-[33px] sm:h-[37px] sm:w-[37px] ml-[8px] cursor-pointer rounded-full border-[1px] border-white relative bottom-[6.2px] "
            onClick={toggleDropdown}
          >
            <img
              src={avatar}

            />
          </div>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div

              className="absolute right-0 mt-[6px] w-40 bg-gray-100 border border-gray-200 rounded-md shadow-md">
              <ul className="py-2">
                {/* Add New User option */}
                <li
                  className="px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-4"
                  onClick={() => setIsFormOpen(true)}
                >
                  Add New User
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      {isFormOpen && (
        <div
          style={{ zIndex: 210 }}
          className="absolute top-16 right-5 bg-gray-100 p-5 rounded-2xl border border-gray-300 shadow-lg w-[60vw] sm:w-[300px] lg:w-[350px]"
        >
          {/* Header */}
          <div className="flex justify-between items-center ">
            <h2 className="text-lg sm:text-xl font-bold">Register New User</h2>
            <button
              className="text-gray-500 hover:text-gray-700 p-2"
              onClick={handleCloseForm}
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="mt-4 ">
            {/* Name */}
            <div className="mb-[18px]">
              <InputBox
                label="Name"
                name="name"
                type="text"
                placeholder="Enter name"
                register={register}
                errors={errors}
                validation={{ required: "Name is required" }}
              />
            </div>

            {/* Email */}
            <div className="mb-[18px]">

              <InputBox
                label="Email"
                name="email"
                type="email"
                placeholder="Enter email"
                register={register}
                errors={errors}
                validation={{ required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email format"} }}
              />
            </div>


            {/* Password */}
            <div className="mb-[18px]">
              <InputBox
                label="Password"
                name="password"
                type="password"
                placeholder="Enter password"
                register={register}
                errors={errors}
                validation={{
                  required: "Password is required",
                  minLength: { value: 8, message: "Must be at least 8 characters" },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/,
                    message:
                      "Must contain uppercase, lowercase, number, and special character",
                  },
                }}
              />
            </div>

            {/* Confirm Password */}
            <div className="mb-[18px]">
              <InputBox
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                placeholder="Confirm password"
                register={register}
                errors={errors}
                validation={{
                  validate: (value) => value === watch("password") || "Passwords do not match",
                }}
              />

            </div>
            {/* Role */}
            <SelectBox
              label="Role"
              name="role"
              options={[
                { value: "ROLE_USER", label: "User" },
                { value: "ROLE_ADMIN", label: "Admin" }
              ]}
              register={register}
              errors={errors}
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-[35px] bg-[#179FDB] text-white text-sm font-semibold rounded-[6px] hover:bg-[#2A6AB2]  p-[6px]  mt-4  sm:text-base "
            >
              Register User
            </button>
          </form>
        </div>

      )}
      {isRegistered && (
        <div className="fixed top-16 right-5 bg-green-500 text-white p-3 rounded-md shadow-md w-[300px]">
          <p>User Registered Successfully!</p>
        </div>
      )}
    </header>
  );
}