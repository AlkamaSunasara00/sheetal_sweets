import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/footer.css';
// import Logo from '../assets/images/logo.png';
import { FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <Link to="/">
              {/* <img src={Logo} alt="Sheetal Sweets & Bakery" /> */}
            </Link>
            <h3>Sheetal Sweets & Bakery</h3>
            <p>Delighting taste buds since 1995 with our authentic sweets and freshly baked goods.</p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/menu">Our Menu</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-hours">
            <h4>Opening Hours</h4>
            <ul>
              <li><span>Monday - Friday:</span> 8:00 AM - 9:00 PM</li>
              <li><span>Saturday:</span> 8:00 AM - 10:00 PM</li>
              <li><span>Sunday:</span> 9:00 AM - 8:00 PM</li>
              <li><span>Holidays:</span> 10:00 AM - 6:00 PM</li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Us</h4>
            <ul>
              <li>
                <FaMapMarkerAlt />
                <span>123 Bakery Street, Sweet City, SC 12345</span>
              </li>
              <li>
                <FaPhone />
                <span>(123) 456-7890</span>
              </li>
              <li>
                <FaEnvelope />
                <span>info@sheetalsweets.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Sheetal Sweets & Bakery. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;