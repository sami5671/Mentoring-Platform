import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { IoIosCloseCircle } from "react-icons/io";
import logo from "../../../public/M.png";
// Ensure the correct import

export const NavbarComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="layout-css shadow-md fixed w-full z-10 top-0">
        <nav className="flex justify-between items-center w-[92%] mx-auto py-4">
          {/* Logo */}
          <div>
            <img className="w-10 cursor-pointer" src={logo} alt="Logo" />
          </div>

          {/* Navigation Links */}
          <div
            className={`nav-links duration-500 md:static absolute  md:min-h-fit min-h-[60vh] left-0 ${
              menuOpen ? "top-[0%] bg-slate-50" : "top-[-700%]"
            } md:w-auto w-full flex items-center px-5 z-[-1] md:z-auto`}
          >
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
              <li>
                <a className="hover:text-gray-500 text-gray-700" href="#">
                  Products
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500 text-gray-700" href="#">
                  Solution
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500 text-gray-700" href="#">
                  Resource
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500 text-gray-700" href="#">
                  Developers
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500 text-gray-700" href="#">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Sign In Button & Menu Icon */}
          <div className="flex items-center gap-6">
            <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
              Sign in
            </button>

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
