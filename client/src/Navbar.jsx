import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "./App";
import axios from "axios";
import { IoMenuSharp } from "react-icons/io5";

const Navbar = () => {
  const user = useContext(userContext);
  const Navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    axios
      .get("http://localhost:3001/logout")
      .then((res) => {
        if (res.data === "Success") Navigate(0);
      })
      .catch((err) => console.log(err));
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex md:flex-row justify-between px-6 md:px-20 bg-blue-500 h-14 items-center text-white font-semibold sticky top-0">
      
      <div className="">
        <h1
          onClick={() => Navigate("/")}
          className="cursor-pointer xl:text-xl lg:text-xl md:text-xl sm:text-lg text-lg font-bold md:mb-0"
        >
          SaveCertificate
        </h1>
      </div>
      <div className="hidden md:flex items-center justify-center flex-1">
        <ul className="flex gap-10">
          <li onClick={() => Navigate("/")} className="cursor-pointer hover:font-bold">
            Home
          </li>
          {user.email && (
            <li onClick={() => Navigate("/create")} className="cursor-pointer hover:font-bold">
              Create
            </li>
          )}
          <li onClick={() => Navigate("/aboutus")} className="cursor-pointer hover:font-bold">
            About
          </li>
          <li onClick={() => Navigate("/contact")} className="cursor-pointer hover:font-bold">
            Contact
          </li>
        </ul>
      </div>

      {user.email ? (
        <div>
          <input
            type="button"
            value="Logout"
            className="cursor-pointer border-2 border-white rounded-full px-5 hover:bg-white hover:text-blue-500 hover:font-bold"
            onClick={handleLogout}
          />
        </div>
      ) : (
        <div className="flex xl:gap-10 lg:gap-10 md:gap-10 sm:gap-10 gap-2">
          <button
            onClick={() => Navigate("/register")}
            className="cursor-pointer border-2 border-black rounded-full xl:px-5 lg:px-5 md:px-5 sm:px-5 px-2"
          >
            Register
          </button>
          <button
            onClick={() => Navigate("/login")}
            className="cursor-pointer border-2 border-black rounded-full xl:px-5 lg:px-5 md:px-5 sm:px-5 px-2"
          >
            Login
          </button>
        </div>
      )}
      <div className="md:hidden">
        {/* Hamburger Icon */}
        <button onClick={toggleMenu}>
          <IoMenuSharp size={34}/>
        </button>
        {/* Menu List */}
        {menuOpen && (
          <div className="absolute top-14 right-0 bg-gray-700 p-4 md:hidden w-4/12">
            <ul className="flex flex-col gap-2">
              <li onClick={() => Navigate("/")} className="cursor-pointer">
                Home
              </li>
              {user.email && (
                <li onClick={() => Navigate("/create")} className="cursor-pointer">
                  Create
                </li>
              )}
              <li onClick={() => Navigate("/aboutus")} className="cursor-pointer">
                About
              </li>
              <li onClick={() => Navigate("/contact")} className="cursor-pointer">
                Contact
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
    
  );
};

export default Navbar;
