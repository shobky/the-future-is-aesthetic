import React, { Component } from "react";
import CartItem from "./CartItem";
import PropTypes from "prop-types";
import "../Shop.css";
import "./Cart.css";
import { NavLink } from "react-router-dom";

const Cart = ({  cart, onRemoveFromCart, onEmptyCart, onUpdateCartQty}) =>  {


  const cancelStyle = () => {
    console.log('hello')
  }

  const handleEmptyCart = () => {
    onEmptyCart();
  }


  const renderEmptyMessage = () => {
      if (cart.total_unique_items > 0) {
        return;
      }
      return (
        <p className="cart__none">
          You have no items in your shopping cart, start adding some!
        </p>
      );
  }

const renderItems = () =>
  cart.line_items.map((lineItem) => (
    <CartItem
      item={lineItem}
      onUpdateCartQty={onUpdateCartQty}
      onRemoveFromCart={onRemoveFromCart}
      key={lineItem.id}
      className="cart__inner"
    />
  ));
const renderTotal = () => {
  if (cart.total_unique_items > 0) {
    return (
      <div className="cart__total">
        <p className="cart__total-title">Subtotal :</p>
        <p className="cart__total-price">
          {cart.subtotal.formatted_with_symbol}
        </p>
      </div>
    );
  }
};

const renderButtons = () => {
  if (cart.total_unique_items > 0) {
    return (
      <div className="cart__buttons">
        <button className="cart__btn-empty" onClick={handleEmptyCart}>
          empty cart
        </button>

        <NavLink
        className="cart__btn-checkout"
        to="/Checkout"
      >
        checkout
      </NavLink>
      </div>
    );
  }
};

return (
  <div className="cart">
    <h4 className="cart__heading">Your Shopping Cart</h4>
    {renderEmptyMessage()}
    <div className="cart-items-only">{renderItems()}</div>
    <div className="total">{renderTotal()}</div>
    {renderButtons()}
  </div>
);

}

export default Cart;

Cart.propTypes = {
  cart: PropTypes.object,
  onUpdateCartQty: () => {},
  onRemoveFromCart: () => {},
  onEmptyCart: () => {},
  handleUpdateCartQty: PropTypes.func,
  cancelStyle: PropTypes.func,
  history: PropTypes.object
};

