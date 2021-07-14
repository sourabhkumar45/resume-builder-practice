import React from "react";
import { Link } from "react-router-dom";
function NavBar(props) {
  console.log(props);
  return (
    <div
      style={{
        height: "3rem",
        backgroundColor: "lightgray",
        color: "black",
        fontSize: "150%",
        textAlign: "center",
      }}
    >
      NavBar
      <span style={{ marginLeft: "4rem" }}>
        <Link to="/product" products={props.addedProduct}>
          {props.count}
        </Link>
      </span>
    </div>
  );
}

export default NavBar;
