/* eslint-disable react/prop-types */
import { useCart } from "../context/CartContext";

function Item({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-700 mb-4">Price: ${product.price}</p>
        <button
          className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Item;
