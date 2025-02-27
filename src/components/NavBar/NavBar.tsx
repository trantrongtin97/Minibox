import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faCartShopping,
  faBars,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { ResponsiveMenu } from "@components/index";
import logo from "@assets/logo_web.svg";
import miniLogo from "@assets/mini_logo.svg"

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="lg:fixed bg-white z-10 shadow-lg">
        <div className="flex flex-row justify-around text-center items-center py-2 lg:py-0 px-0 lg:px-3 mix-w-[320px] w-screen">
          {/* Logo */}
          <div className="flex items-center font-semibold px-1 py-1 lg:px-4 lg:py-4 cursor-pointer basis-1/4">
            <img className="hidden lg:block sm:hidden object-cover min-h-20 min-w-20" src={logo} />
            <img className="block sm:block lg:hidden object-cover min-h-18 min-w-18" src={miniLogo} />
          </div>
          {/* Menu */}
          <div className="hidden md:block basis-2/4">
            <ul className="flex flex-row items-center gap-6 font-semibold">
              <li className="inline-block basis-1/10">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="inline-block basis-1/10">
                <NavLink to="categories">Category</NavLink>
              </li>
              <li className="inline-block  basis-1/10">Shop</li>
              <li className="inline-block  basis-1/10">Blog</li>
              <li className="inline-block  basis-1/10">Page</li>
              {/* Search */}
              <li className="basis-5/10">
              <div className="flex justify-end min-w-[130px] basis-1/4">
            <form className="w-full">
              <label htmlFor="simple-search" className="sr-only">
                Search
              </label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <button type="submit">
                    <FontAwesomeIcon
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      icon={faMagnifyingGlass}
                    />
                  </button>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                  placeholder="Search branch name..."
                  required
                />
              </div>
            </form>
          </div></li>
            </ul>
          </div>
          
          {/* Actions */}
          <div className="flex justify-evenly basis-1/4 px-2">
            <ul className="flex items-center gap-4 lg:gap-10 font-semibold px-2">
              <li className="inline-block">
                <NavLink to="/">
                  <FontAwesomeIcon
                    className="cursor-pointer"
                    icon={faCartShopping}
                  />
                </NavLink>
              </li>
              <li className="inline-block">
                <NavLink to="/">
                  <FontAwesomeIcon className="cursor-pointer" icon={faUser} />
                </NavLink>
              </li>
              <li className="inline-block">
                <NavLink to="/">
                  <FontAwesomeIcon className="cursor-pointer" icon={faBell} />
                </NavLink>
              </li>
            </ul>
          </div>
          {/* Mobile menu session */}
          <div
            className="md:hidden"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <FontAwesomeIcon
              className="text-4xl cursor-pointer"
              icon={faBars}
            />
          </div>
        </div>
      </nav>
      {/* Mobile sidbar session */}
      <div className="md:hidden">
        <ResponsiveMenu open={open} />
      </div>
    </>
  );
};

export default NavBar;
