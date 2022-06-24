import React from "react";
import PropTypes from "prop-types";
import "../Shop.css";
import "./Cart.css";

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  const handleUpdateCartQty = (lineItemId, quantity) => {
    onUpdateCartQty(lineItemId, quantity);
  };

  const handleRemoveFromCart = () => {
    onRemoveFromCart(item.id);
  };

  return (
    <div className="cart-item">
      <img src={item.image.url} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h4 className="cart-item-name">{item.name}</h4>
        <div className="cart-item-quantity">
          <button
            type="button"
            onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}
          >
            -
          </button>
          <p className="item-quantity">{item.quantity}</p>
          <button
            type="button"
            onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}
          >
            +
          </button>
        </div>
        <div className="cart-item-price">
          {item.line_total.formatted_with_symbol}
        </div>
        <button
          type="button"
          className="cart-item-remove"
          onClick={handleRemoveFromCart}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;

CartItem.propTypes = {
  item: PropTypes.object,
  handleUpdateCartQty: PropTypes.func,
  onUpdateCartQty: () => {},
  onRemoveFromCart: () => {},
};
