
// Importing the styling for the MenuPage component
import "./styles/MenuPage.scss";

// Importing the navigation icon, header, and footer images from their respective file paths
import navicon from "./../assets/navicon.svg";
import header_img from "./../assets/header_menu.svg";
import footer_img from "./../assets/footer_menu.svg";
import Menu from "./../components/Menu/Menu";
import Checkout from "../components/Checkout/Checkout";
import {useState} from "react";
import NavPage from "../components/Nav/NavPage";

// Defining the MenuPage component which represents the menu page
const MenuPage = () => {
    // Declaring state for controlling the overlay visibility
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
   // Function to handle click event and show overlay
  const handleClick = () => {
    setIsOverlayVisible(true);
  };

    // Returning the TSX elements for the MenuPage component
  return (
    <article className="menu-page">
      <header
        className="menu-page__header"
        style={{backgroundImage: `url(${header_img})`}}>
        <section className="menu-page__icons-container">
          <img
            className="menu-page__nav-icon"
            src={navicon}
            alt="navigation-icon"
            onClick={() => handleClick()}
          />
          <Checkout />
        </section>
      </header>
      <article className="menu-container">
        <h1 className="menu-container__title">Meny</h1>
        <ul>
          <Menu />
        </ul>
      </article>
      <footer
        className="menu-page__footer"
        style={{backgroundImage: `url(${footer_img})`}}></footer>
        
      {isOverlayVisible && (
        <NavPage closeNav={() => setIsOverlayVisible(false)} />
      )}
    </article>
  );
};

export default MenuPage;
