// Importing Zustand's create function
import { create } from "zustand";

// Interface for the checkout store
interface Checkout {
  cart: Item[]; // Array of items in the cart
  cartCount: number; // Total count of items in the cart
  totalSum: number; // Total sum of the items in the cart
  orderNumber: string; // Order number
  resetCart: () => void; // Function to reset the cart
  setOrderNumber: (orderNumber: string) => void; // Function to set the order number
  increaseQuantity: (id: string) => void; // Function to increase quantity of an item
  decreaseQuantity: (id: string) => void; // Function to decrease quantity of an item
  addToCart: (item: Item) => void; // Function to add an item to the cart
}

// Interface for an item
export interface Item {
  title: string; // Title of the item
  price: number; // Price of the item
  id: string; // Unique identifier for the item
  desc: string; // Description of the item
  quantity: number; // Quantity of the item in the cart
  itemSum: number; // Total price of the item (price * quantity)
}

// Creating the checkout store using Zustand's create function
export const useCheckoutStore = create<Checkout>((set) => ({
  cart: [], // Initial empty array for the cart
  cartCount: 0, // Initial cart count
  totalSum: 0, // Initial total sum
  orderNumber: "", // Initial order number

  // Function to set the order number
  setOrderNumber: (orderNumber) => set({ orderNumber }),

  // Function to reset the cart
  resetCart: () => set({ cart: [], cartCount: 0, totalSum: 0 }),

  // Function to add an item to the cart
  addToCart: (item) => {
    set((state) => {
      let updatedCart = [...state.cart]; // Creating a copy of the cart
      let index = updatedCart.findIndex((cartItem) => cartItem.id === item.id); // Finding the index of the item with the same id

      if (index !== -1) {
        // If index is not -1, the item already exists in the array
        updatedCart[index].quantity += 1; // Incrementing the quantity by 1
        updatedCart[index].itemSum =
          updatedCart[index].quantity * updatedCart[index].price; // Updating the item sum
      } else {
        // If index is -1, the item does not exist in the array
        updatedCart.push({ ...item, quantity: 1, itemSum: item.price * 1 }); // Adding the item to the array with quantity 1
      }

      // Function to calculate the total count of items in the cart
      let totalCount = updatedCart.reduce(
        (total, cartItem) => total + Number(cartItem.quantity), // Summing up the quantities of all items
        0
      );

      // Function to calculate the total sum of all items in the cart
      let totalSum = updatedCart.reduce(
        (total, cartItem) => total + cartItem.itemSum, // Summing up the item sums
        0
      );

      return { cart: updatedCart, cartCount: totalCount, totalSum: totalSum }; // Returning the updated cart state
    });
  },

  // Function to increase the quantity of an item in the cart
  increaseQuantity: (id) => {
    return set((state) => {
      let updatedCart = [...state.cart]; // Creating a copy of the cart
      let index = updatedCart.findIndex((cartItem) => cartItem.id === id); // Finding the index of the item with the specified id

      if (index !== -1) {
        updatedCart[index].quantity += 1; // Incrementing the quantity by 1
        updatedCart[index].itemSum =
          updatedCart[index].quantity * updatedCart[index].price; // Updating the item sum
      }

      // Function to calculate the total count of items in the cart
      let totalCount = updatedCart.reduce(
        (total, cartItem) => total + Number(cartItem.quantity), // Summing up the quantities of all items
        0
      );

      // Function to calculate the total sum of all items in the cart
      let totalSum = updatedCart.reduce(
        (total, cartItem) => total + cartItem.itemSum, // Summing up the item sums
        0
      );

      return { cart: updatedCart, cartCount: totalCount, totalSum: totalSum }; // Returning the updated cart state
    });
  },

  // Function to decrease the quantity of an item in the cart
  decreaseQuantity: (id) => {
    return set((state) => {
      let updatedCart = [...state.cart]; // Creating a copy of the cart
      let index = updatedCart.findIndex((cartItem) => cartItem.id === id); // Finding the index of the item with the specified id

      if (index !== -1) {
        updatedCart[index].quantity -= 1; // Decrementing the quantity by 1
        if (updatedCart[index].quantity === 0) {
          // If quantity becomes 0, remove the item from the cart
          updatedCart.splice(index, 1);
        } else {
          updatedCart[index].itemSum =
            updatedCart[index].quantity * updatedCart[index].price; // Updating the item
        }
      }

      // Function to calculate the total count of items in the cart
      let totalCount = updatedCart.reduce(
        (total, cartItem) => total + Number(cartItem.quantity), // Summing up the quantities of all items
        0
      );

      // Function to calculate the total sum of all items in the cart
      let totalSum = updatedCart.reduce(
        (total, cartItem) => total + cartItem.itemSum, // Summing up the item sums
        0
      );

      return { cart: updatedCart, cartCount: totalCount, totalSum: totalSum }; // Returning the updated cart state
    });
  },
}));
