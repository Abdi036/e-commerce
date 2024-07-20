import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();
  return (
    <nav className="bg-gray-800 p-4 sticky top-0">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="text-white text-lg font-bold font-serif">
          Logo
        </NavLink>

        {/* Links */}
        <div className="hidden md:flex space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-red-500 font-medium font-sans"
                : "text-gray-300 hover:text-white font-medium font-sans"
            }
          >
            Shop
          </NavLink>
          <NavLink
            to="/phones"
            className={({ isActive }) =>
              isActive
                ? "text-red-500 font-medium font-sans"
                : "text-gray-300 hover:text-white font-medium font-sans"
            }
          >
            Phones
          </NavLink>
          <NavLink
            to="/tablets"
            className={({ isActive }) =>
              isActive
                ? "text-red-500 font-medium font-sans"
                : "text-gray-300 hover:text-white font-medium font-sans"
            }
          >
            Tablets
          </NavLink>
          <NavLink
            to="/laptops"
            className={({ isActive }) =>
              isActive
                ? "text-red-500 font-medium font-sans"
                : "text-gray-300 hover:text-white font-medium font-sans"
            }
          >
            Laptops
          </NavLink>
        </div>

        {/* Sign In and Cart */}
        <div className="flex items-center space-x-4">
          <NavLink
            to="/signin"
            className={({ isActive }) =>
              isActive
                ? "text-red-500 font-medium font-sans"
                : "text-gray-300 hover:text-white font-medium font-sans"
            }
          >
            Sign In
          </NavLink>
          <NavLink to="/cart" className="relative">
            <FaShoppingCart className="text-gray-300 hover:text-white text-xl" />
            <span className="absolute top-[-5px] right-[-6px] bg-red-500 text-white text-xs rounded-full px-1">
              {cart.length}
            </span>
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex justify-between mt-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-red-500 font-medium font-sans"
              : "text-gray-300 hover:text-white font-medium font-sans"
          }
        >
          Shop
        </NavLink>
        <NavLink
          to="/phones"
          className={({ isActive }) =>
            isActive
              ? "text-red-500 font-medium font-sans"
              : "text-gray-300 hover:text-white font-medium font-sans"
          }
        >
          Phones
        </NavLink>
        <NavLink
          to="/tablets"
          className={({ isActive }) =>
            isActive
              ? "text-red-500 font-medium font-sans"
              : "text-gray-300 hover:text-white font-medium font-sans"
          }
        >
          Tablets
        </NavLink>
        <NavLink
          to="/laptops"
          className={({ isActive }) =>
            isActive
              ? "text-red-500 font-medium font-sans"
              : "text-gray-300 hover:text-white font-medium font-sans"
          }
        >
          Laptops
        </NavLink>
      </div>
    </nav>
  );
}
