// src/components/Navbar.js
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useSelector } from "react-redux"; // Import useSelector
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const [showNavItems, setShowNavItems] = useState(false);

  // Get the user's first name and last name from Redux
  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);

  const handleLogout = () => {
    logoutUser();
  };

  return (
    <nav className="bg-gray-800 text-white py-4 font-bold fixed w-full top-0 z-10 shadow-md" style={{backgroundColor:'#242f47'}}>
      <div className="container mx-auto flex justify-between items-center px-10">
        <div>
          <Link to="/" className="font-bold text-2xl">
            OptiTime
          </Link>
        </div>
        <div className="hidden md:block">
          <div className="flex gap-5">
            <ul>
              <Link to="/userdash">Dashboard</Link>
            </ul>
            <ul>
              <Link to="/create">All Task</Link>
            </ul>
            <ul>
              <Link to="/taskd">Task Status</Link>
            </ul>
            <ul>
              <Link to="/cal">Calendar</Link>
            </ul>
          </div>
        </div>
        <div className="flex justify-center items-center gap-3">
          <Link to="/profile" className="text-white flex items-center gap-1">
            <FaUserCircle className="text-xl mr-1" />
          </Link>
          <span className="text-white mr-11">
            {firstName} {lastName}
          </span>
          <Link to="/login">
            <span
              onClick={handleLogout}
              className="bg-red-400 px-3 py-2 rounded cursor-pointer text-white hover:bg-slate-300"
            >
              Logout
            </span>
          </Link>
        </div>
        <div className="md:hidden">
          {showNavItems ? (
            <RxCross2
              className="text-white text-2xl cursor-pointer"
              onClick={() => setShowNavItems(!showNavItems)}
            />
          ) : (
            <GiHamburgerMenu
              className="text-white text-2xl cursor-pointer"
              onClick={() => setShowNavItems(!showNavItems)}
            />
          )}
        </div>
      </div>
      {showNavItems && (
        <div className="md:hidden absolute top-16 right-0 bg-slate-800 text-white w-full">
          <ul className="p-4">
            <li>
              <Link to="/userdash">Dashboard</Link>
            </li>
            <li>
              <Link to="/create">All Task</Link>
            </li>
            <li>
              <Link to="/taskd">Task Status</Link>
            </li>
            <li>
              <Link to="/cal">Calendar</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
