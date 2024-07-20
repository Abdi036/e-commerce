import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-slate-100 text-black py-20 h-90 w-full flex items-center ">
      <div className="container mx-auto text-center flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="mb-8 md:mb-0 md:w-1/2">
          <h1 className="text-5xl font-bold mb-4">
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
              src="/Gemini_Generated_Image_cusffdcusffdcusf.jfif"
              alt="Phone"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <img
              src="/Gemini_Generated_Image_cusffdcusffdcusf.jfif"
              alt="Tablet"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <img
              src="/Gemini_Generated_Image_cusffdcusffdcusf.jfif"
              alt="Laptop"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
