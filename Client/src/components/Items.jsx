/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import Button from "./Button";

function Item({ product }) {
  return (
    <NavLink
      to={`/products/${product.id}`}
      className="block bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
          <p className="text-gray-700 mb-4">Price: ${product.price}</p>
          <Button product={product}>Add to cart</Button>
        </div>
      </div>
    </NavLink>
  );
}

export default Item;
