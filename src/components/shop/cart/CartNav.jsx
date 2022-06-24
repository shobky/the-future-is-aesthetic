import React, { useState } from "react";
import Cart from "./Cart";
import PropTypes from "prop-types";
import "../Shop.css";
import "./Cart.css";
import { HiShoppingCart } from "react-icons/hi";

const CartNav = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
  const [isCartVisible, setCartVisible] = useState(false);

  return (
    <div className="nav">
      <div className="nav__cart" onClick={() => setCartVisible(!isCartVisible)}>
        {!isCartVisible ? (
          <button className="nav__cart-open">
            <HiShoppingCart size="35px" icon="shopping-bag" color="lightGrey" />
            {cart !== null ? (
              <span className="cart-qty">{cart.total_items}</span>
            ) : (
              ""
            )}
          </button>
        ) : (
          <button className="nav__cart-close">
            <p className="close-cart">X</p>
          </button>
        )}
      </div>
        {isCartVisible && (
      <div className="cart-container">

          <Cart
            cart={cart}
            onUpdateCartQty={onUpdateCartQty}
            onRemoveFromCart={onRemoveFromCart}
            onEmptyCart={onEmptyCart}
          />
      </div>

        )}
    </div>
  );
};

export default CartNav;

CartNav.propTypes = {
  cart: PropTypes.object,
  onUpdateCartQty: PropTypes.func,
  onRemoveFromCart: PropTypes.func,
  onEmptyCart: PropTypes.func,
};
