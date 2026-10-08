import React from 'react'
import './aion.css'

import y from './y.jpeg'
import v from './v.webp'
import splus from './splus.jpg'
import smax from './smax.webp'

const Aion = () => {

  const cars = [
    {
      name: 'AION Y PLUS',
      type: 'Elektr SUV',
      text: 'Keng salon, zamonaviy texnologiyalar va qulay elektr harakat tizimi.',
      image: y
    },
    {
      name: 'AION V',
      type: 'Elektr SUV',
      text: 'Zamonaviy dizayn, aqlli texnologiyalar va uzoq masofaga mo‘ljallangan elektr avtomobil.',
      image: v
    },
    {
      name: 'AION S PLUS',
      type: 'Elektr Sedan',
      text: 'Elegant dizayn, kuchli elektr motor va zamonaviy multimedia tizimi.',
      image: splus
    },
    {
      name: 'AION S MAX',
      type: 'Elektr Sedan',
      text: 'Yuqori texnologiyalar va kundalik foydalanish uchun qulay elektr sedan.',
      image: smax
    }
  ]

  return (
    <section className="aion" id="aion">

      <div className="container">

        <div className="aion-container">

          {/* Section title */}

          <div className="aion-heading">

            <p className="aion-subtitle">
              AION UZBEKISTAN
            </p>

            <h2>
              ELEKTR <span>KELAJAK</span>
            </h2>

            <p className="aion-description">
              AION — zamonaviy elektr avtomobillarini birlashtirgan
              yangi avlod avtomobil brendi. Texnologiya, qulaylik
              va ekologik harakat bir joyda.
            </p>

          </div>


          {/* Cars */}

          <div className="aion-grid">

            {cars.map((car, index) => (

              <article className="aion-card" key={car.name}>

                <div className="aion-image">

                  <img
                    src={car.image}
                    alt={car.name}
                  />

                  <span className="aion-number">
                    0{index + 1}
                  </span>

                </div>


                <div className="aion-card-content">

                  <p className="aion-type">
                    {car.type}
                  </p>

                  <h3>
                    {car.name}
                  </h3>

                  <p className="aion-card-text">
                    {car.text}
                  </p>

                  <a
                    href="https://www.aionauto.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="aion-more"
                  >
                    Batafsil ko‘rish →
                  </a>

                </div>

              </article>

            ))}

          </div>


          {/* Bottom information */}

          <div className="aion-info">

            <div>
              <strong>100%</strong>
              <span>Elektr harakat</span>
            </div>

            <div>
              <strong>SMART</strong>
              <span>Zamonaviy texnologiya</span>
            </div>

            <div>
              <strong>AION</strong>
              <span>Yangi avlod avtomobillari</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Aion