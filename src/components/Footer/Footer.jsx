import React from 'react'
import './Footer.css'
import footer_logo from '../assets/logo.png'
import insta_logo from '../assets/instagram_icon.png'
import pintester from '../assets/pintester_icon.png'
import whatsApp from '../assets/whatsapp_icon.png'
import { Link } from 'react-router-dom'

const Footer = () => {

  const phoneNumber = "+918104870733"; // Include country code, no '+' or '-' signs

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  const instagramUsername = "vetal_mayur_16";

  const handleInstagramClick = () => {
    window.open(`https://www.instagram.com/${instagramUsername}`, "_blank");
  };



  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

        <div className="footer-social-icons">

            <div className="footer-icons-container">
                <Link onClick={handleInstagramClick}><img src={insta_logo} alt="" /></Link>
            </div>

            <div className="footer-icons-container">
                <img src={pintester} alt="" />
            </div>

            <div className="footer-icons-container">
                <Link onClick={handleWhatsAppClick}><img src={whatsApp} alt="" /></Link>
            </div>

        </div>

        <div className="footer-copyright">
            <hr />
            <p>Copyright @2025 All Right Reserved</p>
        </div>

    </div>
  )
}

export default Footer
