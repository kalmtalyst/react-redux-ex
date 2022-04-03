import React from "react";
import "./ProductItem.css";
import { useDispatch } from "react-redux";
import { addCart } from "../store/actions/index";

function ProductItem({ item }) {
  const dispatch = useDispatch();
  return (
    <div className="ProductItem">
      <img className="item-img" src={item.product_img} alt="상품" />
      <div className="item-name">{item.product_name}</div>
      <div className="item-price">{item.price}원</div>
      <button className="add-cart-btn" onClick={() => dispatch(addCart(item))}>
        <i className="fas fa-plus"></i>
        Cart
      </button>
    </div>
  );
}

export default ProductItem;
