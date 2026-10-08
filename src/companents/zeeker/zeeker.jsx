import React from 'react'
import './zeeker.css'

import Zeekr009 from './009.jpg'
import Zeekr001 from './001.jpg'
import Zeekr7X from './7x.jpg'
import Zeekr007 from './007.jpg'
import Zeekr8X from './8x.jpg'

const Zeeker = () => {

  const models = [
    {
      name: 'ZEEKR 009',
      image: Zeekr009,
    },
    {
      name: 'ZEEKR 001',
      image: Zeekr001,
    },
    {
      name: 'ZEEKR 7X',
      image: Zeekr7X,
    },
    {
      name: 'ZEEKR 007',
      image: Zeekr007,
    },
    {
      name: 'ZEEKR 8X',
      image: Zeekr8X,
    },
  ]

  return (
    <section className="zeeker" id="zeekr">
      <div className="container">

        <div className="zeeker-container">

          {/* ZEEKR TITLE */}
          <div className="zeeker-top">
            <span className="zeeker-subtitle">
              PREMIUM ELECTRIC
            </span>

            <h2>ZEEKR</h2>

            <p>
              Zamonaviy texnologiya, premium dizayn va
              yuqori darajadagi elektr avtomobillar.
            </p>
          </div>


          {/* ZEEKR MODELS */}
          <div className="zeeker-grid">

            {models.map((model, index) => (
              <div className="zeeker-card" key={index}>

                <div className="zeeker-image">
                  <img
                    src={model.image}
                    alt={model.name}
                  />
                </div>

                <div className="zeeker-info">

                  <h3>{model.name}</h3>

                  <button>
                    BATAFSIL
                  </button>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  )
}

export default Zeeker