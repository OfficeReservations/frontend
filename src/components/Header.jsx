import logoBookingBlue from "../assets/logoBookingBlue.svg"
import { FaUser,FaBars, FaTimes } from "react-icons/fa";
import '../css/Header.css'
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoMdExit } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="nav-header">
      <Link to="/" className="logo-link">
        <img src={logoBookingBlue} alt="Логотип" className="logo-img" />
      </Link>

      <nav className="desktop-nav">
        <a href="/profile" className="nav-link" title="Профиль">
          <FaUser className="nav-icon icon-user" />
        </a>
        <a href="/login" className="nav-link" title="Выход">
          <IoMdExit className="nav-icon icon-exit" />
        </a>
      </nav>

      <button className="burger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <a href="/profile" className="mobile-nav-link">
            <FaUser className="mobile-nav-icon" />
            <span>Профиль</span>
          </a>
          <a href="/login" className="mobile-nav-link">
            <IoMdExit className="mobile-nav-icon" />
            <span>Выход</span>
          </a>
        </div>
      </div>
    </header>
  );
}