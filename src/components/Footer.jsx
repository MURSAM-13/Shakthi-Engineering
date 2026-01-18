import "../styles/footer.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">

        {/* COLUMN 1 */}
        <div className="footer-col">
          <img
            src="/images/gsc-logo.png"
            alt="GSC Logo"
            className="footer-logo"
          />
          <p>
            Global Steel Company is the comprehensive fabricator of
            Railway bridges and major steel segments with wide range
            of applications.
          </p>

          <NavLink to="/about" className="footer-btn">
            About Company
          </NavLink>
        </div>

        {/* COLUMN 2 */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><NavLink to="/railway-bridges">Railway Bridges</NavLink></li>
            <li><NavLink to="/peb">Pre-Engineering Buildings</NavLink></li>
            <li><NavLink to="/multi-stories">Multi Stories Buildings</NavLink></li>
            <li><NavLink to="/infrastructure">GSC Infrastructure</NavLink></li>
            <li><NavLink to="/projects">Our Projects</NavLink></li>
            <li><NavLink to="/faqs">FAQs</NavLink></li>
          </ul>
        </div>

        {/* COLUMN 3 */}
        <div className="footer-col">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

        {/* COLUMN 4 */}
        <div className="footer-col">
          <h4>Contact</h4>
          <p className="phone">+91 - 9642825000</p>
          <p>
            Kuchararm village, Toopran Mandal,
            Medchal, Medak District - 502 336
          </p>
          <p>info@globalpeb.com</p>
          <p>Mon to Sat: 9:am to 6pm</p>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        © 2021 Global Steel Company. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
