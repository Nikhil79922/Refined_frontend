import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from '../../assets/svg/logo.svg'
import cross from '../../assets/svg/cross.svg'
import humburger from '../../assets/svg/humburger.svg'
import keydown from '../../assets/svg/keydown.svg'
import screen from '../../assets/svg/screen.svg'
import setting from '../../assets/svg/setting.svg'
import calender from '../../assets/svg/calender.svg'
import automate from '../../assets/svg/automate.svg'
import history from '../../assets/svg/history.svg'
import app from '../../assets/svg/app.svg'
import active_setting from '../../assets/svg/active_setting.svg'



export default function Sidebar() {
  const location = useLocation();
  const [isProduccionOpen, setProduccionOpen] = useState(false);
  const [isCalidadOpen, setCalidadOpen] = useState(false);
  const [isMantenimientoOpen, setMantenimientoOpen] = useState(false);
  const [isSlideOpen, setSlideOpen] = useState(false);

  const handleSlide = () => setSlideOpen((prev) => !prev);
  const toggleProduccion = () => setProduccionOpen(!isProduccionOpen);
  const toggleCalidad = () => setCalidadOpen(!isCalidadOpen);
  const toggleMantenimiento = () => setMantenimientoOpen(!isMantenimientoOpen);

  return (
    <>
      <button
        className={`lg:hidden fixed top-4 left-4 z-50 text-gray-700 bg-white p-2 rounded-md shadow-md ${isSlideOpen ? `hidden`:`block`}`}
        onClick={handleSlide}
      >
        ☰
      </button>

      <aside
         className={`lg:min-w-[200px] lg:w-[15.5vw] z-60 overflow-y-auto bg-white text-blue-1 h-full shadow-lg fixed left-0 top-0 scrollbar-hide transition-transform duration-500 ${
          isSlideOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
        style={{ position: 'fixed', zIndex: 60 }}
      >
        <div className="flex items-center justify-between px-4 h-[73px]  border-b border-gray-200 bg-white">
          <img
            src={logo}
            className="h-[50px] ml-[9.2px] w-[100px] object-contain"
            alt="Logo"
          />
          
          <img src={humburger}
            className="hidden lg:block text-gray-500 h-[12px] cursor-pointer text-[26px] md:text-[22px]"
          alt="" />
       
            {isSlideOpen ?    <img
            src={cross}
            className="lg:hidden text-gray-500 h-[15px] pl-[20px] cursor-pointer text-[26px] md:text-[22px]"
            onClick={handleSlide}
          /> : ""}
          
        </div>

        <div className="uppercase font-[700] font-inter flex items-center h-[64px] pt-[2px] w-[12.5vw] border-b-[0.9px] border-gray-200 ml-[23.2px] text-[13px]">
<Link to="/Dashboard">Dashboard</Link>
</div> 


        <nav className="mt-[20px]">
          <ul>
            <li className="uppercase font-[700] text-gray-1 flex font-inter justify-between items-center px-[23px] text-[13px]">
              <p>PRODUCCIÓN</p>
              <img src={keydown}
                className={`w-[14px] h-[8px]  text-blue-1 cursor-pointer transition-transform ${
                  isProduccionOpen ? "rotate-180" : ""
                }`}
                onClick={toggleProduccion}
              />
         
            </li>
            {isProduccionOpen && (
              <div className="pl-7">
                {[
                   { to: "/Dashboard/monitorizacion", src: screen, activeSrc: screen, text: "Monitorización" },
                   { to: "/Dashboard/historico", src: history, activeSrc: history, text: "Histórico" },
                   { to: "/Dashboard/control/orden", src: setting, activeSrc: active_setting, text: "Control" },
                   { to: "/Dashboard/planificar", src: calender, activeSrc: calender, text: "Planificar" },
                   { to: "/Dashboard/automatizar", src: automate, activeSrc: automate, text: "Automatizar" },
                ].map(({ to, src, activeSrc , text }) => (
                  <li
                    key={to}
                    className={`mt-[22px] font-inter flex items-center gap-4 text-[13px] font-[500] cursor-pointer ${
                      location.pathname === to ? "text-gray-1" : "text-gray-2"
                    }`}
                  >
                    <img s src={location.pathname === to ? activeSrc : src} className={` h-[17px] w-[17px] 
                    }`}/>
                    <Link to={to}>{text}</Link>
                  </li>
                ))}
              </div>
            )}
            <li className="mt-5 w-full border-b border-gray-300"></li>

            {/* Calidad Section */}
            <li className="uppercase font-[700] mt-[20px] text-gray-1 flex font-inter justify-between items-center px-[23px] text-[13px]">
              <p>Calidad</p>
              <img src={keydown}
                className={`w-[14px] h-[8px]  text-blue-1 cursor-pointer transition-transform ${
                  isProduccionOpen ? "rotate-180" : ""
                }`}
                onClick={toggleCalidad}
              />
         
            </li>
            {isCalidadOpen && (
              <div className="pl-7">
                {[
                  { to: "/Dashboard/calidad/submenu1", src: app, text: "Submenu1" },
                  { to: "/Dashboard/calidad/submenu2", src: app, text: "Submenu2" },
                ].map(({ to, src, text }) => (
                  <li
                  key={to}
                  className={`mt-[22px] font-inter flex items-center gap-4 text-[13px] font-[500] cursor-pointer ${
                    location.pathname === to ? "text-gray-1" : "text-gray-2"
                  }`}
                >
                  <img src={src} className={` h-[18px] w-[18px]
                  }`}/>
                  <Link to={to}>{text}</Link>
                </li>
                ))}
              </div>
            )}
            <li className="mt-5 w-full border-b border-gray-300"></li>

            {/* Mantenimiento Section */}
            <li className="uppercase font-[700] mt-[20px] text-gray-1 flex font-inter justify-between items-center px-[23px] text-[13px]">
              <p>Mantenimiento</p>
              <img src={keydown}
                className={`w-[14px] h-[8px]  text-blue-1 cursor-pointer transition-transform ${
                  isProduccionOpen ? "rotate-180" : ""
                }`}
                onClick={toggleMantenimiento}
              />
         
            </li>
            {isMantenimientoOpen && (
              <div className="pl-7">
                {[
                  { to: "/Dashboard/mantenimiento/submenu1", src: app, text: "Submenu1" },
                  { to: "/Dashboard/mantenimiento/submenu2", src: app, text: "Submenu2" },
                ].map(({ to, src, text }) => (
                  <li
                  key={to}
                  className={`mt-[22px] font-inter flex items-center gap-4 text-[13px] font-[500] cursor-pointer ${
                    location.pathname === to ? "text-gray-1" : "text-gray-2"
                  }`}
                >
                  <img src={src} className={` h-[18px] w-[18px]
                  }`}/>
                  <Link to={to}>{text}</Link>
                </li>
                ))}
              </div>
            )}
            <li className="mt-5 w-full border-b border-gray-300"></li>
          </ul>
        </nav>
      </aside>
    </>
  );
}
