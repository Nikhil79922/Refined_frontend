import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import mic from '../../assets/svg/mic.svg'
import folder from '../../assets/svg/folder.svg'
import notification from '../../assets/svg/notification.svg'
import avatar from '../../assets/svg/avatar.svg'
import pencil from '../../assets/svg/pencil.svg'


export default function Header() {
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
    <header  className="flex lg:ml-[40px] lg:left-[15.5vw] items-center justify-between h-[73px] border-b-[0.9px] border-gray-200 bg-gray-4   ">
      <div className="flex ml-[40px] lg:ml-[0px] h-[73px] items-center ">
        <span className="material-symbols-outlined cursor-pointer text-gray-3 bg-white flex items-center justify-center w-[8vw] sm:w-[6vw] md:w-[4vw]   lg:w-[2.8vw] text-[23px] rounded-tl-[8px] rounded-bl-[8px] ml-[10px] sm:ml-[20px]   h-[42px]">
          search
        </span>
        <input
          type="text"
          name="search"
          {...register("search")}
          placeholder="Search Tasks"
          className="h-[42px] font-bold outline-none w-[28vw]  placeholder-gray-5 sm:w-[25vw] md:w-[18vw] lg:w-[14vw] text-[12px]"
        />


        <span className="material-symbols-outlined text-gray-350 bg-white flex items-center justify-center w-[8vw] sm:w-[6vw] md:w-[4vw]  lg:w-[2.8vw] text-[23px] cursor-pointer h-[42px] rounded-tr-[8px] rounded-br-[8px] ">
          login
        </span>
        <img src={mic} className="cursor-pointer bg-gray-4 flex items-center justify-center w-[3vw] text-[24px] h-[19px] ml-[8px]"/>
     
      </div>
      <div className="flex gap-1 sm:gap-2 md:gap-3 relative top-[6px] mr-[21px]">
        <img src={folder} className="cursor-pointer h-[26px] bg-gray-4 flex items-center justify-center"/>
        
        <img src={notification} className="cursor-pointer  h-[26px] bg-gray-4 flex items-center justify-center"/>
    
        <div className="relative">
          <div
            className="h-[37px] w-[37px] ml-[8px] cursor-pointer rounded-full border-[1px] border-white relative bottom-[6.4px] "
            onClick={toggleDropdown}
          >
            <img
              src={avatar}

            />
          </div>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
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
        <div className="absolute top-16 right-5 bg-white p-5 rounded-md border border-gray-300 shadow-lg w-[90vw] sm:w-[400px] lg:w-[450px]">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h2 className="text-lg sm:text-xl font-bold">Register New User</h2>
            <button
              className="text-gray-500 hover:text-gray-700 p-2"
              onClick={handleCloseForm}
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
            {/* Name */}
            <div className="mb-3">
              <label htmlFor="name" className="block text-sm font-semibold">
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: "Name is required" })}
                className="w-full p-2 border border-gray-300 rounded-md mt-1 text-sm sm:text-base"
              />
              {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
            </div>

            {/* Email */}
            <div className="mb-3">
              <label htmlFor="email" className="block text-sm font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", { required: "Email is required" })}
                className="w-full p-2 border border-gray-300 rounded-md mt-1 text-sm sm:text-base"
              />
              {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
            </div>

            {/* Password */}
            <div className="mb-3">
              <label htmlFor="password" className="block text-sm font-semibold">
                Password
              </label>
              <input
                type="password"
                id="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 8, message: "Must be at least 8 characters" },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/,
                    message: "Must contain uppercase, lowercase, number, and special character",
                  },
                })}
                className="w-full p-2 border border-gray-300 rounded-md mt-1 text-sm sm:text-base"
              />
              {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
            </div>

            {/* Confirm Password */}
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="block text-sm font-semibold">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                {...register("confirmPassword", {
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
                className="w-full p-2 border border-gray-300 rounded-md mt-1 text-sm sm:text-base"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs">{errors.confirmPassword.message}</p>
              )}
            </div>

            {/* Role */}
            <div className="mb-3">
              <label htmlFor="role" className="block text-sm font-semibold">
                Role
              </label>
              <select
                id="role"
                {...register("role", { required: "Role is required" })}
                className="w-full p-2 border border-gray-300 rounded-md mt-1 text-sm sm:text-base"
              >
                <option value="ROLE_USER">ROLE_USER</option>
                <option value="ROLE_ADMIN">ROLE_ADMIN</option>
              </select>
              {errors.role && <p className="text-red-500 text-xs">{errors.role.message}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-570 hover:bg-blue-590 text-white p-2 rounded-md mt-4 text-sm sm:text-base font-medium"
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
