import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../styles/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setAboutOpen(false);
    setServicesOpen(false);
  };

  return (
    <>
      {/* TOP BAR */}
      <div className="top-bar">
        <div className="top-left">info@globalpeb.com</div>
      </div>

      {/* MAIN NAV */}
      <nav className="navbar">
        {/* LEFT */}
        <div className="nav-left">
          <div className="logo">GSC</div>
          <div className="rdso">RDSO</div>
        </div>

        {/* HAMBURGER */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen(prev => !prev)}
        >
          ☰
        </div>

        {/* DESKTOP MENU */}
        <ul className="nav-links desktop">
          <li>
            <NavLink to="/" end className="nav-item">Home</NavLink>
          </li>

          <li className="dropdown">
            <span className="nav-item">About Us</span>
            <ul className="dropdown-menu">
              <li><NavLink to="/about" className="nav-item">Management</NavLink></li>
              <li><NavLink to="/infrastructure" className="nav-item">Infrastructure</NavLink></li>
              <li><NavLink to="/quality" className="nav-item">Certifications</NavLink></li>
            </ul>
          </li>

          <li><NavLink to="/services" className="nav-item">Products & Services</NavLink></li>
          <li><NavLink to="/projects" className="nav-item">Projects</NavLink></li>
          <li><NavLink to="/blog" className="nav-item">Blog</NavLink></li>
          <li><NavLink to="/careers" className="nav-item">Careers</NavLink></li>
          <li><NavLink to="/contact" className="nav-item">Contact</NavLink></li>
        </ul>

        {/* ✅ MOBILE MENU — MUST BE INSIDE NAVBAR */}
        {menuOpen && (
          <div className="mobile-menu">

            <NavLink to="/" onClick={closeMenu}>
              Home
            </NavLink>

            {/* ABOUT */}
            <div
              className="mobile-parent"
              onClick={() => setAboutOpen(prev => !prev)}
            >
              About Us
            </div>

            {aboutOpen && (
              <div className="mobile-children">
                <NavLink to="/about" onClick={closeMenu}>Management</NavLink>
                <NavLink to="/infrastructure" onClick={closeMenu}>Infrastructure</NavLink>
                <NavLink to="/quality" onClick={closeMenu}>Certifications</NavLink>
              </div>
            )}

            {/* SERVICES */}
            <div
              className="mobile-parent"
              onClick={() => setServicesOpen(prev => !prev)}
            >
              Products & Services
            </div>

            {servicesOpen && (
              <div className="mobile-children">
                <NavLink to="/services" onClick={closeMenu}>
                  All Services
                </NavLink>
              </div>
            )}

            <NavLink to="/projects" onClick={closeMenu}>Projects</NavLink>
            <NavLink to="/blog" onClick={closeMenu}>Blog</NavLink>
            <NavLink to="/careers" onClick={closeMenu}>Careers</NavLink>
            <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>

          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
