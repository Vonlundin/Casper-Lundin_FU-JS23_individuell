// Importing the styling for the StatusPage component
import "./styles/StatusPage.scss";

// Importing assets and hooks
import drone from "./../assets/drone.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCheckoutStore } from "../AirbeanStore/Cart";

// Status page component
const StatusPage = () => {
  const { orderNumber } = useCheckoutStore();
  const [eta, setEta] = useState(0);
  const navigate = useNavigate();

  // Function to fetch ETA for the order
  const fetchETA = async () => {
    if (!orderNumber) {
      return;
    }

    try {
      const url = `https://airbean-api-xjlcn.ondigitalocean.app/api/beans/order/status/${orderNumber}`;
      const res = await fetch(url);
      const data = await res.json();
      setEta(data.eta);
    } catch (error) {
      console.error("Error fetching ETA:", error);
    }
  };

  useEffect(() => {
    fetchETA();
  }, [orderNumber]);

  // Function to handle button click and navigate to menu
  const handleClick = () => {
    navigate("/menu");
  };

  // Returning the TSX elements for the StatusPage component
  return (
    <>
      <article className="status-page">
        {" "}
        {/* Container for the status page */}
        <p className="status-page__ordernumber">
          {" "}
          {/* Order number */}
          Ordernummer: <span>{orderNumber}</span>
        </p>
        <img src={drone} alt="" /> {/* Image of a drone */}
        <h1 className="status-page__ordertext">
          {" "}
          {/* Text indicating order status */}
          Din beställning <br /> är på väg
        </h1>
        <p className="status-page__minutes">
          {" "}
          {/* ETA */}
          <span>{eta}</span> minuter
        </p>
        <button className="status-page__button" onClick={() => handleClick()}>
          {" "}
          {/* Button to navigate back to menu */}
          Ok, cool!
        </button>
      </article>
    </>
  );
};

export default StatusPage;
