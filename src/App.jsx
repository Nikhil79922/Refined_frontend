import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoute.jsx";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppRoutes />
    </Router>
  );
}

export default App;
