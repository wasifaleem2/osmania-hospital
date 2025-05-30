import Image from 'next/image';
import Link from 'next/link';
import { BsTwitter } from 'react-icons/bs';
import { FaPhoneAlt } from 'react-icons/fa';
import {
  FaFacebookF,
  FaInstagram,
  FaLocationDot,
  FaPinterestP,
  FaRegClock,
} from 'react-icons/fa6';

const Footer = () => {
  const data = {
    logo: '/assets/img/osmania-logo.png',
    contactText: 'Open Hours: Mon-Fri: 8.00 am - 6.00 pm',
    address: '249 OOP, Hyderabad Colony, OOP. Central Jail',
    city: 'Karachi, Pakistan',
    phone: '+92 (21) 34123450',
    phone2: '+92 (21) 34121053',
    facebookHref: 'https://www.facebook.com/osmania.hospital/',
    widgets: [
      {
        title: 'Quick Links',
        links: [
          { href: '/', text: 'Home' },
          { href: '/about', text: 'About Us' },
          { href: '/service', text: 'Services' },
          { href: '/contact', text: 'Contact' },
        ],
      },
    ],
    donationInfo: {
      accountTitle: 'Hyderabad Relief and Rehabilitation Trust',
      accountNumber: '0105-8020-1003-0799',
      bank: 'MCB Bank Ltd.'
    },
    copyrightText: '© 2024 Osmania Hospital. All Rights Reserved.',
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Contact Info */}
        <div className="footer-logo-section">
          <div className="footer-logo">
            <Image 
              src={data.logo} 
              alt="Osmania Hospital Logo" 
              width={180} 
              height={50}
            />
          </div>
          <div className="footer-contact">
            <h3>OSMANIA HOSPITAL</h3>
            <div className="contact-item">
              <FaRegClock className="icon" />
              <span>{data.contactText}</span>
            </div>
            <div className="contact-item">
              <FaLocationDot className="icon" />
              <span>{data.address}, {data.city}</span>
            </div>
            <div className="contact-item">
              <FaPhoneAlt className="icon" />
              <span>{data.phone} / {data.phone2}</span>
            </div>
          </div>
        </div>

        {/* Main Content - Compact Layout */}
        <div className="footer-content">

          {/* Donations - Compact Version */}
          <div className="footer-column">
            <h3>Donations</h3>
            <div className="donation-info">
              <p><strong>Account:</strong> {data.donationInfo.accountTitle}</p>
              <p><strong>No.:</strong> {data.donationInfo.accountNumber}</p>
              <p><strong>Bank:</strong> {data.donationInfo.bank}</p>
            </div>
          </div>

          {/* Quick Links */}
          {data.widgets.map((widget, index) => (
            <div className="footer-column" key={index}>
              <h3>{widget.title}</h3>
              <ul>
                {widget.links.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href}>{link.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Hospital Info */}
          <div className="footer-column">
            <h3>Social</h3>
            <div className="footer-social">
              <Link href={data.facebookHref} target="_blank">
                <FaFacebookF />
              </Link>
              <Link href="#">
                <BsTwitter />
              </Link>
              <Link href="#">
                <FaInstagram />
              </Link>
            </div>
          </div>

          
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          {data.copyrightText}
        </div>
      </div>
    </footer>
  );
};

export default Footer;