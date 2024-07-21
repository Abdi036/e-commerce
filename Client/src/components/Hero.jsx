import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="bg-slate-100 text-black py-20 flex flex-col items-center flex-1">
        <div className="container mx-auto text-center flex flex-col md:flex-row items-center justify-between mb-20">
          {/* Text Section */}
          <div className="mb-8 md:mb-0 md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">
              Welcome to Our Electronics Shop
            </h1>
            <p className="text-xl mb-8">
              Find the best deals on Phones, Tablets, and Laptops
            </p>
            <Link
              to="/products"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Shop Now
            </Link>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center">
            <div className="grid grid-cols-3 gap-4">
              <img
                src="/phone3.jpg"
                alt="Phone"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <img
                src="/laptop4.jpg"
                alt="Tablet"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <img
                src="/tablet5.jpg"
                alt="Laptop"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Products Section */}
      <section className="bg-slate-100 text-black py-20 flex flex-col items-center flex-1">
        <h2 className="text-4xl font-bold mb-8">Our Latest Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Product Card 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img
              src="/phone5.jpg"
              alt="Sample Phone"
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">samsung Note10</h3>
            <p className="text-lg font-semibold text-gray-700 mb-4">$499</p>
            <Link
              to="/phones"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              View Details
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <img
              src="/laptop4.jpg"
              alt="Sample laptop"
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">Hp Elite</h3>
            <p className="text-lg font-semibold text-gray-700 mb-4">$999</p>
            <Link
              to="/laptops"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              View Details
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <img
              src="/tablet4.jpg"
              alt="Sample tablet"
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">Ipad</h3>
            <p className="text-lg font-semibold text-gray-700 mb-4">$299</p>
            <Link
              to="/tablets"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              View Details
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-4 w-full text-center">
        <p className="text-sm">© 2024 Electronics Shop. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Hero;
