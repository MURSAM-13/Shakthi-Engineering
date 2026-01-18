import { NavLink } from "react-router-dom";
import { useState,useEffect } from "react";
import "../styles/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      {/* TOP BAR */}
      <div className="top-bar">
        <div className="top-left">info@globalpeb.com</div>
      </div>

      {/* MAIN NAV */}
      <nav className="navbar sticky">
        {/* LEFT (LOGOS) */}
        <div className="nav-left">
          <div className="logo">GSC</div>
          <div className="rdso">RDSO</div>
        </div>

        {/* RIGHT (HAMBURGER) */}
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
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mobile-menu">

          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>

          {/* ABOUT US */}
          <div
            className="mobile-parent"
            onClick={() => setAboutOpen(prev => !prev)}
          >
            About Us
          </div>

          {aboutOpen && (
            <div className="mobile-children">
              <NavLink to="/about" onClick={() => setMenuOpen(false)}>
                Management
              </NavLink>
              <NavLink to="/infrastructure" onClick={() => setMenuOpen(false)}>
                Infrastructure
              </NavLink>
              <NavLink to="/quality" onClick={() => setMenuOpen(false)}>
                Certifications
              </NavLink>
            </div>
          )}

          {/* PRODUCTS */}
          <div
            className="mobile-parent"
            onClick={() => setServicesOpen(prev => !prev)}
          >
            Products & Services
          </div>

          {servicesOpen && (
            <div className="mobile-children">
              <NavLink to="/services" onClick={() => setMenuOpen(false)}>
                All Services
              </NavLink>
            </div>
          )}

          <NavLink to="/projects" onClick={() => setMenuOpen(false)}>
            Projects
          </NavLink>
          <NavLink to="/blog" onClick={() => setMenuOpen(false)}>
            Blog
          </NavLink>
          <NavLink to="/careers" onClick={() => setMenuOpen(false)}>
            Careers
          </NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>

        </div>
      )}
    </>
  );
}

export default Navbar;
