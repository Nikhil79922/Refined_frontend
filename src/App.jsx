import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import AppRoutes from "./routes/AppRoute.jsx";
import ScrollToTop from "./ScrollToTop.jsx";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppRoutes />
      {/* <AppWithAuth /> */}
    </Router>
  );
}


// function AppWithAuth() {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate(); 
//   const [isCheckingAuth, setIsCheckingAuth] = useState(true); 

//   useEffect(() => {
//     const checkAuthStatus = () => {
//       const storedToken = localStorage.getItem("token") || sessionStorage.getItem("token");

//       if (storedToken) {
//         axios
//           .get("http://localhost:8000/auth/profile", { withCredentials: true })
//           .then((res) => {
//             if (res.status === 200) {
//               setUser(res.data.user);
//             }
//           })
//           .catch(() => {
//             logoutUser();
//           });
//       } else {
//         logoutUser();
//       }
//       setIsCheckingAuth(false); 
//     };

//     checkAuthStatus();
//     const interval = setInterval(checkAuthStatus, 10000);

//     if (isCheckingAuth) return null;


//     return () => clearInterval(interval);
//   }, []);

//   const logoutUser = () => {
//     localStorage.removeItem("token");
//     sessionStorage.removeItem("token");
//     navigate("/"); 
//   };

//   return <AppRoutes />;
// }

export default App;
