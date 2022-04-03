import React from "react";
import "./CartItem.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart } from "../store/actions/index";

function CartItem(props) {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cartReducer);
  const items = cart.filter((value, index, array) => {
    if (value.id !== props.item.id) {
      return true;
    } else {
      return false;
    }
  });
  // value.id !== props.item.id ? true : false});
  return (
    <div className="cart-item">
      <img className="cart-item-img" src={props.item.product_img} alt="상품" />
      <span className="cart-item-name">{props.item.product_name}</span>
      <span className="cart-item-price">{props.item.price}</span>
      <i
        className="fas fa-trash-alt"
        onClick={() => {
          dispatch(deleteCart(items));
          // 현재 카트에 있는 상품들 중, 내가 클릭한 값만 빼고 나머지를 페이로드에 담아야한다.
        }}
      ></i>
    </div>
  );
}

export default CartItem;
