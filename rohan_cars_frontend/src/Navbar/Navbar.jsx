import React from 'react'
import './Navbar.css'
import logo from '../Assets/weblogo1.png'
import arrow from '../Assets/arrow.png'
const Navbar = () => {
  const handleEnquiry = () => {
  const message = `Hi, I want to enquire about your car services.`;
  // Replace 919XXXXXXXXX with your full number (country code + number)
  window.open(`https://wa.me/918767143132?text=${encodeURIComponent(message)}`);
};
  return (
    <div className="navbar">
      <div className="logo-and-name">
            <img src={logo} alt="Logo" className='web-logo' />
            <div className="company-name">
              <h2>Rohan Car Service</h2>
              <h4>Car | Rental | Sales</h4>
            </div>

      </div>

      <div className="sections-and-book-button">
          <ul className="nav-menu">
            <li>Home</li>
            <li>Services</li>
            <li>Cars</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
  
        <button className="book-btn"  onClick={handleEnquiry}>
          Book Now
          <img src={arrow} alt="Arrow" className='arrow' />
        </button>
      </div>

    </div>
  )
}

export default Navbar