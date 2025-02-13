import { Routes, Route } from "react-router-dom";
import ControlHeader from "../components/Control/Control_header.jsx";
import Orden from "../components/Control/Orden.jsx";
import Scrap from "../components/Control/Scrap.jsx";
import Averias from "../components/Control/Averias/Averias.jsx";
import C_Consumos from "../components/Control/C_Consumos.jsx";
import C_Etiquetas from "../components/Control/C_Etiquetas.jsx";

export default function ControlRoutes() {
  return (
    <>
      <ControlHeader />
      <Routes>
        <Route path="orden" element={<Orden />} />
        <Route path="scrap" element={<Scrap />} />
        <Route path="averias" element={<Averias />} />
        <Route path="consumos" element={<C_Consumos />} />
        <Route path="etiquetas" element={<C_Etiquetas />} />
      </Routes>
    </>
  );
}
