import React from "react";
import PropTypes from "prop-types";
import './order.css';

const Order = ({ item }) => {
  return (
    <div className="order">
      <img src={item.image.url} alt={item.name} className="order-item-image" />
      <div className="order-item-details">
        <h4 className="order-item-name">{item.name}</h4>
        <p className="item-quantity">quantity : {item.quantity}</p>
        <div className="order-item-price">
          {item.line_total.formatted_with_symbol}
        </div>
      </div>
    </div>
  );
};

export default Order;

Order.propTypes = {
  item: PropTypes.object,
  handleUpdateCartQty: PropTypes.func,
  onUpdateCartQty: () => {},
  onRemoveFromCart: () => {},
};
