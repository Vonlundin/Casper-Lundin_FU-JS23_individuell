// Importing the useCheckoutStore hook from the Cart module
import { useCheckoutStore } from "../../AirbeanStore/Cart";
// Importing the styling for the CartItem component
import "./CartItem.scss";

// Importing the increase and decrease icons from their respective file paths
import increase from "./../../assets/up_arrow.svg";
import decrease from "./../../assets/down_arrow.svg";

// Defining the CartItem component which displays individual items in the cart
const CartItem = () => {
  // Destructuring the cart, increaseQuantity, and decreaseQuantity functions from the useCheckoutStore hook
  const { cart, increaseQuantity, decreaseQuantity } = useCheckoutStore();
  // Function to display the items in the cart
  const displayCartItems = () => {
    return cart.map((item) => (
      <li key={item.id}>
        <section className="cart-item">
          <article className="cart-item__text-container">
            <h2 className="cart-item__title">
              {item.title}
              <span>..............................................</span>
            </h2>

            <p className="cart-item__price">{item.itemSum} kr</p>
          </article>
          <section className="cart-item__quantity-container">
            <img
              src={increase}
              alt="increase-arrow"
              onClick={() => increaseQuantity(item.id)}
            />
            <p className="cart-item__quantity"> {item.quantity} </p>
            <img
              src={decrease}
              alt="decrease-arrow"
              onClick={() => decreaseQuantity(item.id)}
            />
          </section>
        </section>
      </li>
    ));
  };
  // Returning the displayCartItems function to render the cart items
  return <>{displayCartItems()}</>;
};

// Exporting the CartItem component as the default export
export default CartItem;
