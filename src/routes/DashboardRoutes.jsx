import { Routes, Route } from "react-router-dom";
import DashboardContent from "../components/DashboardContent.jsx";
import ControlRoutes from "./ControlRoutes.jsx"; // Control-specific nested routes
import DashboardLayout from "../components/layout/DashboardLayout.jsx";

export default function DashboardRoutes() {
  return (
    <Routes>
      <Route path="/dashboard/*" element={<DashboardLayout />}>
        {/* Main Dashboard Content */}
        <Route index element={<DashboardContent />} />

        {/* Control Nested Routes */}
        <Route path="control/*" element={<ControlRoutes />} />
      </Route>
    </Routes>
  );
}
