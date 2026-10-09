import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-container">

          {/* ABOUT */}
          <div className="footer-about">

            <h2>LYNK & CO</h2>

            <p>
              LYNK & CO Uzbekistan — zamonaviy avtomobillar,
              innovatsion texnologiyalar va yuqori darajadagi
              qulaylikni birlashtirgan avtomobil olami.
            </p>

            {/* SOCIAL NETWORKS */}
            <div className="footer-socials">

              <a
                href="https://www.instagram.com/lynkco_uzbekistan/"
                target="_blank"
                rel="noreferrer"
                className="social"
              >
                Instagram
              </a>

              <a
                href="https://www.youtube.com/@tekinavto"
                target="_blank"
                rel="noreferrer"
                className="social"
              >
                YouTube
              </a>

              <a
                href="https://www.threads.com/@lynkco_uzbekistan?xmt=AQG0qeZ9SuGajJ9Vl-m89ai_4-3Qt6lT8mhhSX6IKu36HU0"
                target="_blank"
                rel="noreferrer"
                className="social"
              >
                Threads
              </a>

            </div>

          </div>


          {/* MODELS */}
          <div className="footer-column">

            <h3>MODELLAR</h3>

            <a href="#aion">AION</a>

            <a href="#byd">BYD</a>

            <a href="#deepal">DEEPAL</a>

            <a href="#zeekr">ZEEKR</a>

            <a href="#li-auto">LI AUTO</a>

          </div>


          {/* CONTACT */}
          <div className="footer-column">

            <h3>BOG‘LANISH</h3>

            <a href="tel:+998970361513">
              +998 97 036 15 13
            </a>

            <a href="mailto:info@lynkco.uz">
              info@lynkco.uz
            </a>


          </div>

        </div>


        {/* FOOTER BOTTOM */}
        <div className="footer-bottom">

          <p>
            © 2026 LYNK & CO Uzbekistan. Barcha huquqlar himoyalangan.
          </p>

          <a href="#">
            Boshiga ↑
          </a>

        </div>

      </div>
    </footer>
  )
}

export default Footer