import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Products.css";

const ProductItem = ({ product, onAddToCart }) => {
  const { result } = product.description;

  const handleAddToCart = () => {
    onAddToCart(product.id, 1);

  }

  return (
    <div className="product__card">
      <img
        className="product__image"
        src={product.image?.url}
        alt={product.name}
      />
      <div className="product__info">
        <h4 className="product__name">{product.name}</h4>
        <p className="product__description">
          {/* product description stripped of html tags */}
          {result}
        </p>
        <div className="product__details">
          <p className="product__price">
            {product.price.formatted_with_symbol}
          </p>
        </div>
        <button
          id="cart-btn"
          name="Add to cart"
          className="cart-btn"
          onClick={handleAddToCart}
        >
          Get Item
        </button>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object,
};

export default ProductItem;
