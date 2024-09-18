import React from 'react';
import './Footer.css';

const FooterSection = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.facebook.com" aria-label="Facebook" target="_blank" className="icon">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.instagram.com" aria-label="Instagram" target="_blank" className="icon">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.twitter.com" aria-label="Twitter" target="_blank" className="icon">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.tiktok.com" aria-label="TikTok" target="_blank" className="icon">
          <i className="fab fa-tiktok"></i>
        </a>
      </div>

      <div className="footer-links">
        <a href="/contact">Contact us</a>
        <a href="/faq">faq</a>
        <a href="/shipping">shipping</a>
        <a href="/order-tracking">order tracking</a>
      </div>

      <div className="policies">
        <a href="/privacy-policy">privacy policy</a>
        <a href="/terms">terms</a>
      </div>

      <p className="copyright">© 2024 EleganceHUB</p>
    </footer>
  );
};

export default FooterSection;