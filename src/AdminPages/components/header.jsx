import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome CSS
import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/samplelogo.png";
import './header.css';

function Header() {
  return (
    <nav className="sidebarheader">
      <div className="logo-container">
        <img id="gym-logo" src={logo} alt="logo" />
      </div>
      <ul className="menu">
        <li>
          <Link className="nav-link" to="/">
            <i className="fas fa-tachometer-alt"></i>
            <span>DASHBOARD</span>
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/Membership">
            <i className="fas fa-users"></i>
            <span>MEMBERSHIP</span>
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/Revenue">
            <i className="fas fa-dollar-sign"></i>
            <span>REVENUE</span>
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/Booking">
            <i className="fas fa-calendar-check"></i>
            <span>BOOKINGS</span>
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/Forecasting">
            <i className="fas fa-chart-line"></i>
            <span>FORECASTING</span>
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/Coaches">
            <i className="fas fa-user-tie"></i>
            <span>COACHES</span>
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/Classes">
            <i className="fas fa-chalkboard-teacher"></i>
            <span>CLASSES</span>
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/Services">
            <i className="fas fa-concierge-bell"></i>
            <span>SERVICES</span>
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/Facilities">
            <i className="fas fa-dumbbell"></i>
            <span>FACILITIES</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
