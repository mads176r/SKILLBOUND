import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-gray-800">
      <div className="container flex justify-between py-4 ">
        <span className="font -bold text-white">SKILLBOUND</span>
        <ul className="flex p-0 m-0 text-lg font-medium">
          <li>
            <NavLink to="/" className="py-2 px-4 no-underline text-slate-300 hover:text-white active:underline">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/Turneringer" className="py-2 px-4 no-underline text-slate-300 hover:text-white active:underline">
              Turneringer
            </NavLink>
          </li>
          <li>
            <NavLink to="/Team" className="py-2 px-4 no-underline text-slate-300 hover:text-white active:underline">
              Team
            </NavLink>
          </li>
        </ul>
        <NavLink to="/Login">
          <button  className="py-1.5 px-3 rounded-full font-medium text-white bg-blue-600">
            Login
          </button>
        </NavLink>
        
      </div>
    </div>
  );
};

export default Header;
