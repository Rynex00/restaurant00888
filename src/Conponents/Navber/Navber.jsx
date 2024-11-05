import React from "react";
import { Link, NavLink } from "react-router-dom";
import './navber.css'

const Navber = () => {


  const links = (
    <>
      <li>
        <NavLink to="/" exact activeClassName="active">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" activeClassName="active">
        About
        </NavLink>
      </li>
      <li>
        <NavLink to="/portfolio" activeClassName="active">
        Portfolio
        </NavLink>
      </li>
      <li>
        <NavLink to="/clients" activeClassName="active">
        Clients
        </NavLink>
      </li>
      <li>
        <NavLink to="/blog" activeClassName="active">
        Blog
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" activeClassName="active">
        Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar  px-12 absolute  ">
      <div className="navbar-start">
        <Link to="/">
          <img
            src="https://i.postimg.cc/tC6yxcb4/Frame.png"
            className="w-16 "
            alt=""
          />
        </Link>
        <h2 className="text-3xl ml-2 text-white font-semibold">Restaurant</h2>

        <div className="ml-20 hidden lg:flex">
          <ul className=" flex px-1 text-lg  gap-4 text-white">
            {links}
          </ul>
        </div>
      </div>

      <div className="navbar-end gap-2 ">
        <div className="hidden lg:flex">
          <Link to='/bookATable' ><button className="btn bg-yellow-500 text-black outline-none border-none rounded-none uppercase text-lg">
            Book a table
          </button></Link>
        </div>

        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-semibold"
          >
            {links}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navber;
