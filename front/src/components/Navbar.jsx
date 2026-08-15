import { useState } from "react";
import Logo from "./Logo";
import { Link, useNavigate } from "react-router-dom";
import { lougoutUser } from "../JS/Actions/authActions";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 text-gray-600 body-font bg-white shadow-sm">
      <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
        <Logo />

        <nav className="hidden md:flex items-center text-base justify-center space-x-1 font-medium">
          <Link
            to="/"
            className="mr-5 px-3 py-2 rounded-lg transition-colors duration-200 hover:text-indigo-600 hover:bg-indigo-50 cursor-pointer"
          >
            Home
          </Link>

          <Link
            to="/MarketPs"
            className="mr-5 px-3 py-2 rounded-lg transition-colors duration-200 hover:text-indigo-600 hover:bg-indigo-50 cursor-pointer"
          >
            MarketPs
          </Link>

          <Link
            to="/marketGame"
            className="mr-5 px-3 py-2 rounded-lg transition-colors duration-200 hover:text-indigo-600 hover:bg-indigo-50 cursor-pointer"
          >
            MarketGame
          </Link>

          <Link
            to="/about"
            className="mr-5 px-3 py-2 rounded-lg transition-colors duration-200 hover:text-indigo-600 hover:bg-indigo-50 cursor-pointer"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="px-3 py-2 rounded-lg transition-colors duration-200 hover:text-indigo-600 hover:bg-indigo-50 cursor-pointer"
          >
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          {!isAuth && (
            <>
              {" "}
              <button
                onClick={() => navigate("/login")}
                className="inline-flex items-center text-gray-700 bg-gray-100 border-0 py-2 px-5 focus:outline-none hover:bg-gray-200 rounded text-base"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/register")}
                className="inline-flex items-center text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded text-base"
              >
                Register
              </button>
            </>
          )}

          {isAuth && (
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="ml-2 w-10 h-10 rounded-full bg-indigo-100 text-indigo-500 flex items-center justify-center hover:bg-indigo-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 9l6 6 6-6"
                  />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-3 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-indigo-500"
                  >
                    Profile
                  </Link>

                  <button
                    onClick={() => dispatch(lougoutUser(navigate))}
                    className="w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-indigo-500"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-100 px-5 pb-5">
          <nav className="flex flex-col space-y-3 pt-4">
            <Link to="/" className="hover:text-indigo-500">
              Home
            </Link>

            <Link to="/MarketPs" className="hover:text-indigo-500">
              MarketPs
            </Link>
            <Link to="/marketGame" className="hover:text-indigo-500">
              MarketGame
            </Link>

            <Link to="/about" className="hover:text-indigo-500">
              About
            </Link>

            <Link to="/contact" className="hover:text-indigo-500">
              Contact
            </Link>
          </nav>

          <div className="flex gap-3 mt-5">
            {!isAuth && (
              <>
                <button
                  onClick={() => navigate("/login")}
                  className="flex-1 text-gray-700 bg-gray-100 py-2 px-5 rounded hover:bg-gray-200"
                >
                  Login
                </button>

                <button
                  onClick={() => navigate("/register")}
                  className="flex-1 text-white bg-indigo-500 py-2 px-5 rounded hover:bg-indigo-600"
                >
                  Register
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
