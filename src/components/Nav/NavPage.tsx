// Importing the styling for the NavPage component
import "./NavPage.scss";

// Importing the close icon and line images from their respective file paths
import closeIcon from "./../../assets/close.svg";
import line from "./../../assets/line.png";

// Importing the useNavigate hook from React Router DOM
import { useNavigate } from "react-router-dom";

// Importing the createPortal function from React DOM
import { createPortal } from "react-dom";

// Defining the shape of the props for the NavPage component
interface NavPageProps {
  closeNav: () => void;
}

// Defining the NavPage component which represents the navigation menu
function NavPage({ closeNav }: NavPageProps) {
  // Using the useNavigate hook for programmatic navigation
  const navigate = useNavigate();

  // Accessing the overlay-root element for portal rendering
  let overlayRoot = document.getElementById("overlay-root");

  // Function to handle menu item click and navigate to respective pages
  const handleClick = (choice: string) => {
    navigate(`/${choice}`);
  };

  // Function to handle close icon click and close the navigation menu
  const handleCloseClick = () => {
    closeNav();
  };

  // Rendering the NavPage component as a portal
  return createPortal(
    <article className="nav-page"> {/* Container for the navigation menu */}
      <img
        className="nav-page__close-icon" // Class for styling the close icon
        src={closeIcon} // Setting the source of the close icon
        alt="" // Adding an empty alt attribute
        onClick={() => {
          handleCloseClick(); // Click event handler to close the navigation menu
        }}
      />
      <section className="nav-page__menu"> {/* Container for the menu items */}
        <p className="menu__item" onClick={() => handleClick("menu")}> {/* Menu item for Menu page */}
          Meny
        </p>
        <img className="menu__line" src={line} alt="" /> {/* Horizontal line */}
        <p className="menu__item" onClick={() => handleClick("about")}> {/* Menu item for About page */}
          Vårt kaffe
        </p>
        <img className="menu__line" src={line} alt="" /> {/* Horizontal line */}
        <p className="menu__item"> {/* Menu item for Profile page */}
          Min profil
        </p>
        <img className="menu__line" src={line} alt="" /> {/* Horizontal line */}
        <p className="menu__item" onClick={() => handleClick("status")}> {/* Menu item for Status page */}
          Orderstatus
        </p>
      </section>
    </article>,
    overlayRoot as Element // Rendering the NavPage component into the overlay-root element
  );
}

// Exporting the NavPage component as the default export
export default NavPage;

