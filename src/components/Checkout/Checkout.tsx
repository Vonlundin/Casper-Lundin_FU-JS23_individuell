// Importing the checkout_bag image from its file path
import checkout_bag from "./../../assets/bag.svg";

// Importing the styling for the Checkout component
import "./Checkout.scss";

// Importing the useCheckoutStore hook from the Cart module
import { useCheckoutStore } from "../../AirbeanStore/Cart";

// Importing the useState hook from React
import { useState } from "react";

// Importing the CartPage component
import CartPage from "../../pages/CartPage";

// Defining the Checkout component which represents the checkout functionality
const Checkout = () => {
  // Destructuring the cartCount variable from the useCheckoutStore hook
  const { cartCount } = useCheckoutStore();

  // Declaring state for controlling the dropdown visibility
  const [showDropdown, setShowDropdown] = useState(false);

  // Returning the TSX elements for the Checkout component
  return (
    <>
      <section
        className="checkout-box" // Container for the checkout box
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {" "}
        {/* Click event to toggle dropdown visibility */}
        <section className="checkout-box__icon">
          {" "}
          {/* Container for the checkout icon */}
          <img
            className="checkout-box__bag" // Class for styling the checkout bag icon
            src={checkout_bag} // Setting the source of the checkout bag icon
            alt="checkout_icon" // Adding alt text for accessibility
          />
        </section>
      </section>
      <section className="checkout-box__counter">
        {" "}
        {/* Container for the cart item counter */}
        <p className="checkout-box__counter-text">{cartCount}</p>{" "}
        {/* Displaying the cart item count */}
      </section>
      <div className={`overlay ${showDropdown ? "visible" : ""}`}></div>{" "}
      {/* Overlay for dropdown */}
      {showDropdown && <CartPage />}{" "}
      {/* Rendering the CartPage component if dropdown is visible */}
    </>
  );
};

// Exporting the Checkout component as the default export
export default Checkout;
