/* eslint-disable react/prop-types */
import { UseCart } from "../context/CartContext";

export default function Button({ product, children }) {
  const { addToCart } = UseCart();

  return (
    <div>
      <button
        className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700"
        onClick={() => addToCart(product)}
      >
        {children}
      </button>
    </div>
  );
}
