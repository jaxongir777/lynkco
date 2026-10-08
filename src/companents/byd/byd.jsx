import React from 'react'
import './byd.css'

import seal from './seall.jpg'
import song from './song.jpg'
import dolphin from './dolphin.jpg'
import han from './han.jpg'

const Byd = () => {

  const cars = [
    {
      name: 'BYD SEAL',
      type: 'Elektr Sedan',
      text: 'Sportiv dizayn, kuchli elektr motor va zamonaviy texnologiyalar.',
      image: seal
    },
    {
      name: 'BYD SONG PLUS',
      type: 'Elektr SUV',
      text: 'Qulay salon, zamonaviy dizayn va kundalik foydalanish uchun ideal.',
      image: song
    },
    {
      name: 'BYD DOLPHIN',
      type: 'Elektr Hatchback',
      text: 'Ixcham, tejamkor va shaharda harakatlanish uchun qulay elektromobil.',
      image: dolphin
    },
    {
      name: 'BYD HAN',
      type: 'Elektr Sedan',
      text: 'Premium dizayn, yuqori texnologiya va kuchli elektr harakat tizimi.',
      image: han
    }
  ]

  return (
    <section className="byd" id="byd">
      <div className="container">
        <div className="byd-container">

          {/* Heading */}
          <div className="byd-heading">
            <p className="byd-subtitle">BYD UZBEKISTAN</p>

            <h2>
              ELEKTR <span>KELAJAK</span>
            </h2>

            <p className="byd-description">
              BYD — zamonaviy elektr va gibrid avtomobillarni
              ishlab chiqaruvchi dunyodagi yetakchi avtomobil brendlaridan biri.
              Innovatsiya, qulaylik va texnologiya bir joyda.
            </p>
          </div>

          {/* Cars */}
          <div className="byd-grid">

            {cars.map((car, index) => (
              <article className="byd-card" key={car.name}>

                <div className="byd-image">
                  <img src={car.image} alt={car.name} />

                  <span className="byd-number">
                    0{index + 1}
                  </span>
                </div>

                <div className="byd-card-content">

                  <p className="byd-type">
                    {car.type}
                  </p>

                  <h3>
                    {car.name}
                  </h3>

                  <p className="byd-card-text">
                    {car.text}
                  </p>

                  <a
                    href="https://www.byd.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="byd-more"
                  >
                    Batafsil ko‘rish →
                  </a>

                </div>

              </article>
            ))}

          </div>

          {/* Bottom info */}
          <div className="byd-info">

            <div>
              <strong>100%</strong>
              <span>Elektr texnologiya</span>
            </div>

            <div>
              <strong>BYD</strong>
              <span>Innovatsion avtomobillar</span>
            </div>

            <div>
              <strong>SMART</strong>
              <span>Zamonaviy texnologiya</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Byd