// Importing the styling for the CartPage component
import "./styles/CartPage.scss";

// Importing the useNavigate hook from React Router DOM
import { useNavigate } from "react-router-dom";

// Importing the CartItem component
import CartItem from "../components/CartItem/CartItem";

// Importing the useCheckoutStore hook from the Cart module
import { useCheckoutStore } from "../AirbeanStore/Cart";

// Defining the shape of the request body data
interface RequestBodyData {
  details: {
    order: {
      name: string;
      price: number;
    }[];
  };
}

// Defining the CartPage component which represents the cart page
const CartPage = () => {
  // Destructuring variables and functions from the useCheckoutStore hook
  const { totalSum, cart, setOrderNumber, resetCart } = useCheckoutStore();

  // Using the useNavigate hook for programmatic navigation
  const navigate = useNavigate();

  // Function to handle button click event for placing order
  const handleClick = () => {
    // Constructing the request body
    const requestBody = {
      details: {
        order: cart.flatMap((item) =>
          Array.from({ length: item.quantity }, () => ({
            name: item.title,
            price: item.price,
          }))
        ),
      },
    };

    // Function to fetch data and place order
    async function fetchData(body: RequestBodyData) {
      try {
        const url =
          "https://airbean-api-xjlcn.ondigitalocean.app/api/beans/order";
        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        const data = await response.json();
        setOrderNumber(data.orderNr); // Setting the order number
      } catch (error) {
        console.error("error:", error);
      }
    }

    navigate("/status"); // Navigating to the status page
    fetchData(requestBody); // Calling the fetchData function to place the order
    resetCart(); // Resetting the cart after placing the order
  };

  // Returning the TSX elements for the CartPage component
  return (
    <>
      <article className="cart-page">
        {" "}
        {/* Container for the cart page */}
        <h1>Din beställning</h1> {/* Heading */}
        <section className="cart-page__display-items">
          {" "}
          {/* Section for displaying cart items */}
          <ul>
            <CartItem /> {/* Rendering the CartItem component */}
          </ul>
        </section>
        <section className="cart-page__display-total">
          {" "}
          {/* Section for displaying total price */}
          <article className="display-total__text-container">
            {" "}
            {/* Container for total text */}
            <h2 className="cart-page__total-title">
              {" "}
              {/* Total title */}
              Total <span>..................................</span>
            </h2>
            <p className="cart-page__total-text">inkl moms + drönarleverans</p>{" "}
            {/* Total text */}
          </article>
          <p className="cart-page__price">{totalSum} kr</p> {/* Total price */}
        </section>
        <button
          className="cart-page__button" // Class for styling the button
          onClick={() => handleClick()} // Click event handler for placing order
          disabled={cart.length === 0}
        >
          {" "}
          {/* Disabling the button if cart is empty */}
          Take my money! {/* Button text */}
        </button>
      </article>
    </>
  );
};

// Exporting the CartPage component as the default export
export default CartPage;
