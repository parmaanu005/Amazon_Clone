import React, { useContext } from "react";
import { Context } from "../context/context";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
    const { addToCart, cartItems } = useContext(Context);

    const cartItemCount = cartItems[id];

  return (
    
      <div class="m-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-white-800 dark:border-gray-700">
        <img class="rounded-t-lg" src={productImage} alt="" />

        <div class="p-5">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-black-900 dark:black-white">
            {productName}
          </h5>
          <p class="mb-3 font-normal text-gray-900 dark:text-gray-800">
            ${price}
          </p>
          <button
          onClick={() => addToCart(id)}
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            Add to Cart{cartItemCount > 0 && <> ({cartItemCount})</>}
          </button>
          </div>
         
          {console.log(id)}
        
      </div>

   
  );
};
