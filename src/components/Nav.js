import React from "react";
import "./Nav.css";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function Nav() {
  const history = useHistory();
  const cartLeng = useSelector((store) => store.cartReducer);
  return (
    <nav className="Nav">
      <h1
        className="nav-title"
        onClick={() => {
          history.push("/");
        }}
      >
        HnM
      </h1>
      <i
        className="fas fa-shopping-cart"
        onClick={() => {
          history.push("/cart");
        }}
      >
        <span className="cart-amount">{cartLeng.length}</span>
      </i>
    </nav>
  );
}

export default Nav;
