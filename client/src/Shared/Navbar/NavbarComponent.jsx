import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { IoIosCloseCircle } from "react-icons/io";
// Ensure the correct import
import { Link } from "react-router-dom";

export const NavbarComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="shadow-xl  fixed w-full z-10 top-0 text-white ">
        <nav className="flex justify-between items-center w-[92%] mx-auto py-4">
          {/* Logo */}
          <div className="text-center">
            <p className="text-3xl font-bold">MentiGo</p>
            <p className="text-[8px]">Make Dreams into Reality</p>
          </div>

          {/* Navigation Links */}
          <div
            className={`nav-links duration-500 md:static absolute  md:min-h-fit min-h-[60vh] left-0 ${
              menuOpen ? "top-[0%] bg-slate-50" : "top-[-700%]"
            } md:w-auto w-full flex items-center px-5 z-[-1] md:z-auto`}
          >
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
              <li>
                <a className="hover:text-gray-400" href="#">
                  Products
                </a>
              </li>
              <li>
                <a className="hover:text-gray-400" href="#">
                  Solution
                </a>
              </li>
              <li>
                <a className="hover:text-gray-400" href="#">
                  Resource
                </a>
              </li>
              <li>
                <a className="hover:text-gray-400" href="#">
                  Developers
                </a>
              </li>
              <li>
                <a className="hover:text-gray-400" href="#">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Sign In Button & Menu Icon */}
          <div className="flex items-center gap-6">
            <Link to="/login">
              <button className="bg-white text-black px-5 py-2 font-semibold rounded-xl hover:bg-gray-300">
                Sign in
              </button>
            </Link>

            {/* Menu Toggle Icon */}

            {menuOpen ? (
              <>
                <IoIosCloseCircle
                  icon={menuOpen ? "close" : "menu"}
                  onClick={onToggleMenu}
                  className="text-xl cursor-pointer md:hidden"
                />
              </>
            ) : (
              <>
                <TiThMenu
                  icon={menuOpen ? "close" : "menu"}
                  onClick={onToggleMenu}
                  className="text-xl cursor-pointer md:hidden"
                />
              </>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};
