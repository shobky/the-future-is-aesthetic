import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../checkout/Checkout.css";
import Orders from "./Orders";

const SummaryBtn = ({ cart, onUpdateCartQty }) => {
  const [isSummaryVisible, setSummaryVisible] = useState(false);
  const button = document.getElementById("button");

  const summaryBtnClicked = () => {
    setSummaryVisible(!isSummaryVisible);

    const button = document.getElementById("button");
    button.remove();
  };

  return (
    <div className="summary-container">
      <div id="button" className="summary-btn" onClick={summaryBtnClicked}>
        <button className="order-btn-open">Show Summary</button>
      </div>
      {isSummaryVisible && (
        <Orders cart={cart} onUpdateCartQty={onUpdateCartQty} />
      )}
    </div>
  );
};

export default SummaryBtn;

SummaryBtn.propTypes = {
  cart: PropTypes.object,
  onUpdateCartQty: PropTypes.func,
  onRemoveFromCart: PropTypes.func,
  onEmptyCart: PropTypes.func,
};
