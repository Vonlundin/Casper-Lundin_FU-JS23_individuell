// Importing necessary modules from react-router-dom
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// Importing page components
import LandingPage from "./pages/LandingPage";
import MenuPage from "./pages/MenuPage";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import StatusPage from "./pages/StatusPage";


// Importing CSS file for styling
import "./App.css";

// Main component for the application
function App() {
  return (
    <>
      {/* Router component to enable routing */}
      <Router>
        {/* Defining routes for different pages */}
        <Routes>
          <Route path="/" element={<LandingPage />} /> {/* Route for LandingPage */}
          <Route path="/menu" element={<MenuPage />} /> {/* Route for MenuPage */}
          <Route path="/about" element={<AboutPage />} /> {/* Route for AboutPage */}
          <Route path="/cart" element={<CartPage />} /> {/* Route for CartPage */}
          <Route path="/status" element={<StatusPage />} /> {/* Route for StatusPage */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
