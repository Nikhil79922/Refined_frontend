import { Route, Routes } from "react-router-dom";
import AuthRoutes from "./AuthRoutes.jsx";
import DashboardRoutes from "./DashboardRoutes.jsx";
import ProtectedRoute from "./ProtectedRote.jsx";

export default function AppRoutes() {
  return (
    <Routes>
    <Route path="/*" element={<AuthRoutes />}/>
    <Route element={<ProtectedRoute/>}>
      <Route path="/dashboard/*" element={<DashboardRoutes />}/>
    </Route>
    </Routes>
  );
}
