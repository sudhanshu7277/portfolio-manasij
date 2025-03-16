import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const facebookUrl = 'https://www.facebook.com/share/152e4s2nm3/?mibextid=wwXlfr';
  const instagramUrl = 'https://www.instagram.com/yourpage';

  return (
    <footer className="app-footer">
      <div>
        <p><a href="mailto:manasijain2000@gmail.com">manasijain @ 2025</a></p>
        <a
          href={facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook size={32} style={{ margin: '0 10px' }} />
        </a>
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram size={32} style={{ margin: '0 10px' }} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;