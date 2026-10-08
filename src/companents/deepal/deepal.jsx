import React from 'react'
import './deepal.css'

import s07 from './s07.jpg'
import s05 from './s05.jpg'
import l07 from './l07.jpg'
import sl03 from './sl03.jpg'

const Deepal = () => {

  const cars = [
    {
      name: 'DEEPAL S07',
      type: 'Elektr SUV',
      text: 'Zamonaviy dizayn, aqlli texnologiyalar va komfortli premium salon.',
      image: s07
    },
    {
      name: 'DEEPAL S05',
      type: 'Elektr SUV',
      text: 'Sportiv ko‘rinish, zamonaviy texnologiya va shahar uchun ideal avtomobil.',
      image: s05
    },
    {
      name: 'DEEPAL L07',
      type: 'Elektr Sedan',
      text: 'Premium dizayn, aqlli boshqaruv va yuqori darajadagi qulaylik.',
      image: l07
    },
    {
      name: 'DEEPAL SL03',
      type: 'Elektr Sedan',
      text: 'Aerodinamik dizayn, kuchli elektr tizimi va zamonaviy interyer.',
      image: sl03
    }
  ]

  return (
    <section className="deepal" id="deepal">
      <div className="container">
        <div className="deepal-container">

          {/* Heading */}
          <div className="deepal-heading">
            <p className="deepal-subtitle">
              DEEPAL UZBEKISTAN
            </p>

            <h2>
              SMART <span>MOBILITY</span>
            </h2>

            <p className="deepal-description">
              DEEPAL — zamonaviy elektr avtomobillar,
              ilg‘or texnologiyalar va futuristik dizaynni
              birlashtirgan yangi avlod avtomobil brendi.
            </p>
          </div>

          {/* Cars */}
          <div className="deepal-grid">

            {cars.map((car, index) => (
              <article
                className="deepal-card"
                key={car.name}
              >

                <div className="deepal-image">

                  <img
                    src={car.image}
                    alt={car.name}
                  />

                  <span className="deepal-number">
                    0{index + 1}
                  </span>

                </div>

                <div className="deepal-card-content">

                  <p className="deepal-type">
                    {car.type}
                  </p>

                  <h3>
                    {car.name}
                  </h3>

                  <p className="deepal-card-text">
                    {car.text}
                  </p>

                  <a
                    href="https://www.deepal.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="deepal-more"
                  >
                    Batafsil ko‘rish →
                  </a>

                </div>

              </article>
            ))}

          </div>

          {/* Bottom info */}
          <div className="deepal-info">

            <div>
              <strong>100%</strong>
              <span>Elektr harakat</span>
            </div>

            <div>
              <strong>SMART</strong>
              <span>Aqlli texnologiyalar</span>
            </div>

            <div>
              <strong>DEEPAL</strong>
              <span>Yangi avlod avtomobillari</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Deepal