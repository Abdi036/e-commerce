import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart } = useCart();

  // Calculate total price
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <>
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
                {/* Image and remove button container */}
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
                </div>

                {/* Remove button */}
                <button
                  className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700"
                  onClick={() => removeFromCart(product.id)}
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
        {/* Display total price */}
        {cart.length > 0 && (
          <div className="mt-8 text-right font-bold">
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
