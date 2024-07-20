import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-lg font-bold">Logo</div>

        {/* Links */}
        <div className="hidden md:flex space-x-4">
          <NavLink
            to="/phones"
            className="text-gray-300 hover:text-white"
            activeClassName="text-red-500"
          >
            Phones
          </NavLink>
          <NavLink
            to="/tablets"
            className="text-gray-300 hover:text-white"
            activeClassName="text-red-500"
          >
            Tablets
          </NavLink>
          <NavLink
            to="/laptops"
            className="text-gray-300 hover:text-white"
            activeClassName="text-red-500"
          >
            Laptops
          </NavLink>
        </div>

        {/* Sign In and Cart */}
        <div className="flex items-center space-x-4">
          <NavLink
            to="/signin"
            className="text-gray-300 hover:text-white"
            activeClassName="text-red-500"
          >
            Sign In
          </NavLink>
          <div className="relative">
            <FaShoppingCart className="text-gray-300 hover:text-white text-xl" />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
              3
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex justify-between mt-4">
        <NavLink
          to="/phones"
          className="text-gray-300 hover:text-white"
          activeClassName="text-red-500"
        >
          Phones
        </NavLink>
        <NavLink
          to="/tablets"
          className="text-gray-300 hover:text-white"
          activeClassName="text-red-500"
        >
          Tablets
        </NavLink>
        <NavLink
          to="/laptops"
          className="text-gray-300 hover:text-white"
          activeClassName="text-red-500"
        >
          Laptops
        </NavLink>
      </div>
    </nav>
  );
}
