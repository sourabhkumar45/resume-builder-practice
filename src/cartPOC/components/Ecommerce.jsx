import React from "react";

import { connect } from "react-redux";

import NavBar from "./NavBar";

function Ecommerce(props) {
  return (
    <>
      <NavBar count={props.count}></NavBar>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {props.products.map((product) => {
          return (
            <div
              key={product.id}
              style={{
                margin: "20px",
                padding: "10px",
                border: "2px solid",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={product.image}
                style={{ height: "20vw" }}
                alt="product_image"
              />
              <h2>{product.title}</h2>
              <div>{product.description}</div>
              <h3>₹{product.price}</h3>
              <button
                onClick={() => {
                  console.log(product);
                  props.addToCart(product);
                }}
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
function mapStateToProps(store) {
  return store;
}
function mapDispatchToProps(dispatch) {
  return {
    addToCart: (product) => {
      return dispatch({ type: "add_to_cart", payload: product });
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Ecommerce);
