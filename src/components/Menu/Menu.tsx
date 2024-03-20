// Importing the useEffect and useState hooks from React
import { useEffect, useState } from "react";

// Importing the AddProduct component
import AddProduct from "../AddProduct/AddProduct";

// Importing the styling for the Menu component
import "./Menu.scss";

// Defining the shape of the menu items
interface menuItems {
  id: string;
  title: string;
  desc: string;
  price: number;
}

// Defining the Menu component which displays the menu items
const Menu = () => {
  // Declaring state for storing the menu data
  const [menuData, setMenuData] = useState<menuItems[]>([]);

  // Function to fetch menu data from the API
  const fetchMenu = async () => {
    const url = "//airbean-api-xjlcn.ondigitalocean.app/api/beans/";
    const res = await fetch(url);
    const d = await res.json();
    // Updating menuData state if there's a change in data
    if (JSON.stringify(d.menu) !== JSON.stringify(menuData)) {
      setMenuData(d.menu);
    }
  };

  // Fetching menu data on component mount
  useEffect(() => {
    fetchMenu();
  }, []);

  // Function to display the menu items
  const displayMenu = () => {
    return menuData.map((item) => {
      return (
        <li key={item.id}>
          <div className="item-container"> {/* Container for each menu item */}
            <AddProduct id={item.id} title={item.title} price={item.price} /> {/* Adding the AddProduct component */}
            <div>
              <h3 className="item-container__title">
                {item.title} {/* Displaying the title of the menu item */}
                <span>....................................</span> {/* Spacer for styling */}
              </h3>
              <p className="item-container__desc">{item.desc}</p> {/* Displaying the description of the menu item */}
            </div>
            <p className="item-container__price">{item.price} kr</p> {/* Displaying the price of the menu item */}
          </div>
        </li>
      );
    });
  };

  // Returning the TSX elements for displaying the menu
  return <>{displayMenu()}</>;
};

// Exporting the Menu component as the default export
export default Menu;

