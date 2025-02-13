
import { motion } from "framer-motion";
import { useSelector, useDispatch } from 'react-redux';  // Import Redux hooks
import { toggleSidebar, setSidebarState } from '../../features/sidebar/sidebarSlice';  // Import actions

import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import humburger from '../../assets/svg/humburger.svg';
import cross from '../../assets/svg/cross.svg';
import keydown from '../../assets/svg/keydown.svg';
import screen from '../../assets/svg/screen.svg';
import setting from '../../assets/svg/setting.svg';
import calender from '../../assets/svg/calender.svg';
import automate from '../../assets/svg/automate.svg';
import history from '../../assets/svg/history.svg';
import app from '../../assets/svg/app.svg';
import active_setting from '../../assets/svg/active_setting.svg';

export default function Sidebar() {
  const location = useLocation();
  const dispatch = useDispatch();  // Hook to dispatch actions

  // Access Redux state
  const isSlideOpen = useSelector((state) => state.sidebar.isSlideOpen);  // Access the sidebar open state

  const [openSection, setOpenSection] = useState(null);  // State to manage open sections

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));  // Toggle sections
  };

  const handleSlide = () => {
    dispatch(toggleSidebar());  // Dispatch action to toggle sidebar open/closed
  };

  useEffect(() => {
    console.log("Sidebar open:", isSlideOpen);  // Log state change (optional)
  }, [isSlideOpen]);

  return (
    <>
      {/* Hamburger button (only visible on small screens) */}
      <button
        className={`fixed top-4 left-4 z-50 text-gray-700 bg-white p-2 rounded-md shadow-md ${isSlideOpen ? "hidden" : "block"}`}
        onClick={handleSlide}  // Toggle sidebar when clicked
      >
        <img src={humburger} className="h-6 w-6" alt="Hamburger Icon" />
      </button>

      {/* Sidebar */}
      <aside
        className={`overflow-y-auto bg-white text-blue-1 h-full shadow-lg fixed lg:static scrollbar-hide transition-all duration-500
          ${isSlideOpen ? "translate-x-0" : "-translate-x-full"}  /* Small screen */
          ${isSlideOpen ? " lg:w-[15vw]" : "lg:w-0"}  /* Small screens toggle width */
          lg:translate-x-0`}  /* Large screens no translate effect */
      >
        <div className="flex items-center justify-between px-4 h-[73px] border-b border-gray-200 bg-white">
          {/* Logo */}
          <div className="ml-[9.1px] w-[100px]">
            <h1 className="text-[#4C85C7] text-[30px] leading-[54px] sm:text-24px md:text-[30px] font-bold font-inter">
              FCore</h1>
          </div>

          {/* Hamburger button for large screens */}
          <img
            src={humburger}
            className="hidden lg:block h-[12px] cursor-pointer"
            alt="Hamburger"
            onClick={handleSlide}  // Toggle sidebar when clicked
          />

          {/* Close button (only visible when sidebar is open on small screens) */}
          {isSlideOpen && (
            <img
              src={cross}
              className="lg:hidden h-[14px] cursor-pointer relative top-[3px] left-[5px]"
              onClick={() => dispatch(setSidebarState(false))}  // Close sidebar when clicked
              alt="Close"
            />
          )}
        </div>

        <div className="uppercase font-bold font-inter flex items-center h-[64px] w-full border-b border-gray-200 text-[13px] px-[23px]">
          <Link to="/Dashboard">Dashboard</Link>
        </div>

        <nav className="mt-[20px]">
          <ul>
            {/* PRODUCCIÓN Section */}
            <li className="uppercase font-bold text-gray-700 flex justify-between items-center px-[23px] text-[13px]">
              <p>PRODUCCIÓN</p>
              <img
                src={keydown}
                className={`w-[14px] h-[8px] cursor-pointer transition-transform ${openSection === "produccion" ? "rotate-180" : ""}`}
                onClick={() => toggleSection("produccion")}
                alt="Toggle"
              />
            </li>
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: openSection === "produccion" ? 1 : 0,
                height: openSection === "produccion" ? "auto" : 0,
              }}
              transition={{ duration: 0.6 }} // Smooth transition
            >
              {openSection === "produccion" && (
                <div className="pl-7">
                  {[ 
                    { to: "/Dashboard/monitorizacion", src: screen, text: "Monitorización" },
                    { to: "/Dashboard/historico", src: history, text: "Histórico" },
                    { to: "/Dashboard/control/orden", src: setting, activeSrc: active_setting, text: "Control" },
                    { to: "/Dashboard/planificar", src: calender, text: "Planificar" },
                    { to: "/Dashboard/automatizar", src: automate, text: "Automatizar" },
                  ].map(({ to, src, activeSrc, text }) => (
                    <li
                      key={to}
                      className={`mt-[22px] flex items-center gap-4 text-[13px] font-medium cursor-pointer ${
                        location.pathname === to ? "text-gray-700" : "text-gray-500"
                      }`}
                    >
                      <img src={location.pathname === to ? activeSrc || src : src} className="h-[17px] w-[17px]" alt={text} />
                      <Link to={to}>{text}</Link>
                    </li>
                  ))}
                </div>
              )}
            </motion.div>

            <li className="mt-5 w-full border-b border-gray-300"></li>

            {/* CALIDAD Section */}
            <li className="uppercase font-bold text-gray-700 flex justify-between items-center px-[23px] text-[13px] mt-5">
              <p>CALIDAD</p>
              <img
                src={keydown}
                className={`w-[14px] h-[8px] cursor-pointer transition-transform ${openSection === "calidad" ? "rotate-180" : ""}`}
                onClick={() => toggleSection("calidad")}
                alt="Toggle"
              />
            </li>
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: openSection === "calidad" ? 1 : 0,
                height: openSection === "calidad" ? "auto" : 0,
              }}
              transition={{ duration: 0.6 }} // Smooth transition
            >
              {openSection === "calidad" && (
                <div className="pl-7">
                  {[ 
                    { to: "/Dashboard/calidad/submenu1", src: app, text: "Submenu1" },
                    { to: "/Dashboard/calidad/submenu2", src: app, text: "Submenu2" },
                  ].map(({ to, src, text }) => (
                    <li
                      key={to}
                      className={`mt-[22px] flex items-center gap-4 text-[13px] font-medium cursor-pointer ${
                        location.pathname === to ? "text-gray-700" : "text-gray-500"
                      }`}
                    >
                      <img src={src} className="h-[18px] w-[18px]" alt={text} />
                      <Link to={to}>{text}</Link>
                    </li>
                  ))}
                </div>
              )}
            </motion.div>

            <li className="mt-5 w-full border-b border-gray-300"></li>

            {/* MANTENIMIENTO Section */}
            <li className="uppercase font-bold text-gray-700 flex justify-between items-center px-[23px] text-[13px] mt-5">
              <p>MANTENIMIENTO</p>
              <img
                src={keydown}
                className={`w-[14px] h-[8px] cursor-pointer transition-transform ${openSection === "mantenimiento" ? "rotate-180" : ""}`}
                onClick={() => toggleSection("mantenimiento")}
                alt="Toggle"
              />
            </li>
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: openSection === "mantenimiento" ? 1 : 0,
                height: openSection === "mantenimiento" ? "auto" : 0,
              }}
              transition={{ duration: 0.6 }} // Smooth transition
            >
              {openSection === "mantenimiento" && (
                <div className="pl-7">
                  {[ 
                    { to: "/Dashboard/mantenimiento/submenu1", src: app, text: "Submenu1" },
                    { to: "/Dashboard/mantenimiento/submenu2", src: app, text: "Submenu2" },
                  ].map(({ to, src, text }) => (
                    <li
                      key={to}
                      className={`mt-[22px] flex items-center gap-4 text-[13px] font-medium cursor-pointer ${
                        location.pathname === to ? "text-gray-700" : "text-gray-500"
                      }`}
                    >
                      <img src={src} className="h-[18px] w-[18px]" alt={text} />
                      <Link to={to}>{text}</Link>
                    </li>
                  ))}
                </div>
              )}
            </motion.div>
          </ul>
        </nav>
      </aside>
    </>
  );
}

