import React from "react";
import logo from "./../../assets/images/logo.svg";
import { FaUser, FaCartPlus } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="page-header">
      <div className="container">
        <Link to="/" className="logo">
          <img src={logo} alt="logo" />
        </Link>
        <nav className="page-nav">
          <ul>
            <li>
              <NavLink activeClassName="active" to="/" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/products">
                Product
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/about-us">
                About Us
              </NavLink>
            </li>
          </ul>
        </nav>
        <ul className="header-account">
          <li>
            <NavLink activeClassName="active" to="/account">
              <FaUser />
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/">
              <FaCartPlus />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
