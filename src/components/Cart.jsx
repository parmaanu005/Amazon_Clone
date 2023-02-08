import React, { useContext } from "react";
import { Context } from "../context/context";
import { PRODUCTS } from "../products";
import { CartItem } from "./cartItem";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(Context);
  const totalAmount = getTotalCartAmount();
  // console.log(totalAmount);

  const navigate = useNavigate();

  return (
    
    <div className="cart">
      <div>
        <h1>Your Cart Items {totalAmount}</h1>
      </div>
      


      
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>


  );
};
