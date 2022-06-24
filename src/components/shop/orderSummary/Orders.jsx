import React from "react";
import Order from './Order';
import PropTypes from "prop-types";
import '../../checkout/Checkout.css';
import './order.css';


const Orders = ({cart}) =>  {

const renderOrders = () =>
  cart.line_items.map((lineItem) => (
    <Order
      item={lineItem}
      key={lineItem.id}
      className="_order_inner"
    />
  ));
const renderTotal = () => {
  if (cart.total_unique_items > 0) {
    return (
      <div className="total">
        <p className="total-price">
          {cart.subtotal.formatted_with_symbol}
        </p>
      </div>
    );
  }
};

return (
  <div className="orders">
    <h4 className="orders__heading">Your Shopping Summary</h4>
    <div className="orders-items-only">{renderOrders()}</div>
    <div className="total">{renderTotal()}</div>
  </div>
);

}

export default Orders;

Orders.propTypes = {
  cart: PropTypes.object,
  handleUpdateCartQty: PropTypes.func,
  history: PropTypes.object
};