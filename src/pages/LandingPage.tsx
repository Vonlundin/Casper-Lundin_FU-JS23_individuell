
// Importing the logo and header images from their respective file paths
import airbean_logo from "./../assets/logo.svg";
import header_left from "./../assets/header_left.svg";
import header_right from "./../assets/header_right.svg";

// Importing the styling for the LandingPage component
import "./styles/LandingPage.scss";

// Importing the useState hook from React
import {useState} from "react";

// Importing the NavPage component
import NavPage from "../components/Nav/NavPage";

// Defining the LandingPage component which represents the landing page
const LandingPage = () => {
   // Declaring state for controlling the overlay visibility
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
   // Function to handle click event and show overlay
  const handleClick = () => {
    setIsOverlayVisible(true);
  };
 // Returning the TSX elements for the LandingPage component
  return (
    <>
      <section className="landing-page" onClick={() => handleClick()}>
        <img
          className="landing-page__img--left"
          src={header_left}
          alt="leaf-image"
        />
        <img
          className="landing-page__logo"
          src={airbean_logo}
          alt="airbean-logo"
        />
        <img
          className="landing-page__img--right"
          src={header_right}
          alt="leaf image"
        />
      </section>
      
      {isOverlayVisible && (
        <NavPage closeNav={() => setIsOverlayVisible(false)} />
      )}
    </>
  );
};

// Exporting the LandingPage component as the default export
export default LandingPage;
