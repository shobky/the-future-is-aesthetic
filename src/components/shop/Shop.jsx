import React, { useState, useEffect } from "react";
import commerce from "../../lib/Commerce";
import ProductsList from "./products/ProductList";
import "./Shop.css";
import CartNav from "./cart/CartNav";
import Collections from "./categories/Collections";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    fetchProducts();
    fetchCart();
    fetchCategories();
  }, []);


  const fetchCategories = () => {
    commerce.categories.list().then((category) => {
      setCollection(category.data);
    });
  };

  const fetchProducts = () => {
    commerce.products
      .list({ category_slug: [] })
      .then((products) => {
        setProducts(products.data);
      })
      .catch((error) => {
        console.log("There was an error fetching the products", error);
      });
  };

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

  const handleAddToCart = (productId, quantity) => {
    commerce.cart
      .add(productId, quantity)
      .then((item) => {
        setCart(item.cart);
        // console.log('item added');
      })
      .catch((error) => {
        console.error("error adding ot cart", error);
      });
  };
  const handleRemoveFromCart = (lineItemId) => {
    commerce.cart
      .remove(lineItemId)
      .then((resp) => {
        setCart(resp.cart);
      })
      .catch((error) => {
        console.error(
          "There was an error removing the item from the cart",
          error
        );
      });
  };

  const handleUpdateCartQty = (lineItemId, quantity) => {
    commerce.cart
      .update(lineItemId, { quantity })
      .then((resp) => {
        setCart(resp.cart);
      })
      .catch((error) => {
        console.log("error updaing cart items", error);
      });
  };

  const handleEmptyCart = () => {
    commerce.cart
      .empty()
      .then((resp) => {
        setCart(resp.cart);
      })
      .catch((error) => {
        console.error("There was an error emptying the cart", error);
      });
  };

  return (
    <div className="shop-page">
      <div className="cart-nav">
        <CartNav
          className="cart-nav"
          cart={cart}
          onUpdateCartQty={handleUpdateCartQty}
          onRemoveFromCart={handleRemoveFromCart}
          onEmptyCart={handleEmptyCart}
        />
      </div>
      <div className="shop-container">
        <div className="categories">
          <Collections collection={collection} />
        </div>
        <div className="products-container">
          <ProductsList products={products} onAddToCart={handleAddToCart} />
        </div>
        <div className="cateogires"></div>
      </div>
    </div>
  );
};

export default Shop;
