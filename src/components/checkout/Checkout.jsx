import React, { useEffect, useState } from "react";
import commerce from "../../lib/Commerce";
import "./Checkout.css";
import SummaryBtn from "../shop/orderSummary/SummaryBtn";
import Form from "./form/Form";
const Checkout = () => {
  const [cart, setCart] = useState({});

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = () => {
    commerce.cart
      .retrieve()
      .then((cart) => {
        setCart(cart);
      })
      .catch((error) => {
        console.log("errorr fetching cart", error);
      });
  };

  return (
    <div className="checkout">
  <h1 className="page-header">checkout</h1>

      <div className="flex">
        <div className="form">
          <Form/>
        </div>
        <div className="summary">
          <SummaryBtn cart={cart} />
        </div>
      </div>
    </div>
  );
};

export default Checkout;


