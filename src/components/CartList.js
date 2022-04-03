import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import "./CartList.css";

function CartList() {
  const cart = useSelector((store) => store.cartReducer);
  // cart에 아이템 정보들이 담기게 됨
  const cartItem =
    cart.length >= 1 ? (
      cart.map((item, index) => {
        return <CartItem key={index} item={item} index={index} />;
      })
    ) : (
      <div>장바구니에 담긴 상품이 없습니다.</div>
    );
  return (
    <section className="cart-list">
      <h2 className="cart-list-title">장바구니</h2>
      {cartItem}
    </section>
  );
}

export default CartList;
