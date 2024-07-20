import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  // Calculate total price
  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const handleCheckout = () => {
    clearCart();
    alert("Thank you for your purchase!");
  };

  return (
    <div className="container mx-auto py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Your Cart</h1>
      </header>
      <div className="grid grid-cols-1 gap-8">
        {cart.length === 0 ? (
          <p className="text-center">Your cart is empty</p>
        ) : (
          cart.map((product) => (
            <div
              key={product.id}
              className="flex items-center bg-white shadow-md rounded-lg overflow-hidden p-4"
            >
              {/* Image */}
              <div className="flex-shrink-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-24 h-24 object-cover rounded-full"
                />
              </div>

              {/* Product details */}
              <div className="flex-grow ml-4">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-700 mb-2">Price: ${product.price}</p>
                <p className="text-gray-700 mb-2">
                  Quantity: {product.quantity}
                </p>
                <div className="flex items-center space-x-2">
                  <button
                    className="bg-gray-200 text-gray-700 font-bold py-1 px-2 rounded hover:bg-gray-300"
                    onClick={() =>
                      updateQuantity(
                        product.id,
                        Math.max(product.quantity - 1, 1)
                      )
                    }
                  >
                    -
                  </button>
                  <button
                    className="bg-gray-200 text-gray-700 font-bold py-1 px-2 rounded hover:bg-gray-300"
                    onClick={() =>
                      updateQuantity(product.id, product.quantity + 1)
                    }
                  >
                    +
                  </button>
                  <button
                    className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700 ml-4"
                    onClick={() => removeFromCart(product.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      {cart.length > 0 && (
        <div className="mt-8 text-right font-bold">
          <p>Total Price: ${totalPrice.toFixed(2)}</p>
          <button
            className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700 mt-4"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
