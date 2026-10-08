import React from 'react'
import './hero.css'

const Hero = () => {
  return (
    <section className="hero">

      {/* Avtomobil video */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/car-video.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>

      <div className="container">
        <div className="hero-container">

          <div className="hero-content">

            <p className="hero-small">
              LYNK & CO UZBEKISTAN
            </p>

            <h1>
              ELEKTR
              <span>AVTOMOBILLAR</span>
            </h1>

            <p className="hero-text">
              Zamonaviy elektromobillar va innovatsion texnologiyalar.
              Lynk & Co Uzbekistan avtosalonida o‘zingizga mos avtomobilni
              kashf eting.
            </p>

            <div className="hero-buttons">

              <a href="#cars" className="hero-btn">
                Avtomobillar
              </a>

              <a href="#contact" className="hero-btn second">
                Bog‘lanish
              </a>

            </div>

          </div>

          {/* Aylanadigan element */}
          <div className="hero-circle">

            <div className="circle-text">
              LYNK & CO • UZBEKISTAN • ELECTRIC CARS •
            </div>

            <div className="circle-icon">
              ↗
            </div>

          </div>

        </div>
      </div>

    </section>
  )
}

export default Hero