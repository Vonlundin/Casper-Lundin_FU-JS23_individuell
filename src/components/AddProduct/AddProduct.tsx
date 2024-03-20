// Importing the addicon image from its file path
import addicon from "./../../assets/add.svg";

// Importing the useCheckoutStore hook from the Cart module
import { useCheckoutStore } from "../../AirbeanStore/Cart";

// Importing the styling for the AddProduct component
import "./AddProduct.scss";

// Defining the shape of the props for the AddProduct component
interface AddProductProps {
  id: string;
  title: string;
  price: number;
}

// Defining the AddProduct component which displays an image representing adding a product to the cart
const AddProduct = ({ id, title, price }: AddProductProps) => {
  // Destructuring the addToCart function from the useCheckoutStore hook
  const { addToCart } = useCheckoutStore();

  // Returning the image element representing the add icon, with a click event to add the product to the cart
  return (
    <img
      className="add-icon" // Adding a class for styling purposes
      src={addicon} // Setting the source of the image to the addicon imported above
      alt="" // Adding an empty alt attribute
      onClick={() => {
        // Adding a click event handler to invoke the addToCart function with the product details
        addToCart({ id, title, price });
      }}
    />
  );
};

// Exporting the AddProduct component as the default export
export default AddProduct;
