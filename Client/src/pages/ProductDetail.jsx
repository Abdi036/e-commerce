import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function ProductDetail() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { productId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`http://localhost:8000/products/${productId}`);
        if (!res.ok) {
          throw new Error(
            "Something went wrong while fetching product details."
          );
        }
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [productId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto py-8 ">
      <button onClick={() => navigate(-1)} className="text-blue-500 mb-4">
        &larr;Back
      </button>
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
        <p className="text-gray-600">{product.description}</p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img src={product.image} alt={product.name} className="w-full h-auto" />
        <div>
          <h2 className="text-2xl font-bold mb-4">
            {product.brand} {product.model}
          </h2>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <div className="mb-4">
            <span className="font-semibold">Type:</span> {product.type}
          </div>
          <div className="mb-4">
            <span className="font-semibold">Storage:</span>{" "}
            {product.storage.capacity}GB {product.storage.type}
          </div>
          <span className="text-indigo-600 font-bold text-2xl">
            ${product.price}
          </span>
          <div className="py-5">
            <Button product={product}>Add to cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
