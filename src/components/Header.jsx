import '@fortawesome/fontawesome-free/css/all.min.css';
import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/samplelogo.png";
import "./Header.css";

function Header() {
  return (
    <nav>
      <div className="navbar">
        <div className="header">
          <div className="logo-container">
            <img id="gym-logo" src={logo} alt="logo"/>
          </div>
          <div className="menu">
            <Link className='nav-link' to="/">HOME</Link>
            <Link className='nav-link' to="/Classes">CLASSES</Link>
            <Link className='nav-link' to="/Coaches">COACHES</Link>
            <Link className='nav-link' to="/Services">SERVICES</Link>
            <Link className='nav-link' to="/Facilities">FACILITIES</Link>
            <Link className='nav-link' to="/Membership">MEMBERSHIP</Link>
          </div>
          <div className="icons-container">
            <div className="notif-icon">
              <i className="far fa-bell"></i>
            </div>
            <div className="account-icon">
              <Link className="far fa-user" to ="/active-plan"></Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Header;