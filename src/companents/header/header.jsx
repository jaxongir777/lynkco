import React, { useState } from 'react'
import './header.css'
import Lynkco from './lynkco.jpg'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="header">
      <div className="container">
        <div className="header-container">

          {/* Logo */}
          <a href="#" className="logo">
            <img src={Lynkco} alt="Lynk & Co Uzbekistan" />
          </a>

          {/* Navigation */}
          <nav className={`header-nav ${isOpen ? 'active' : ''}`}>
            <ul className="header-list">

              <li className="header-item">
                <a
                  className="header-link"
                  href="#aion"
                  onClick={() => setIsOpen(false)}
                >
                  AION
                </a>
              </li>

              <li className="header-item">
                <a
                  className="header-link"
                  href="#byd"
                  onClick={() => setIsOpen(false)}
                >
                  BYD
                </a>
              </li>

              <li className="header-item">
                <a
                  className="header-link"
                  href="#deepal"
                  onClick={() => setIsOpen(false)}
                >
                  DEEPAL
                </a>
              </li>

            </ul>
          </nav>

          {/* Phone + Hamburger */}
          <div className="header-actions">

            <a
              href="tel:+998970361513"
              className="call-btn"
              aria-label="Qo'ng'iroq qilish"
            >
              <span>📞</span>
            </a>

            <button
              className={`hamburger ${isOpen ? 'active' : ''}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation"
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>

          </div>

        </div>
      </div>
    </header>
  )
}

export default Header