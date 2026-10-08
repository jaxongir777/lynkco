import React from 'react'
import './li.css'

import LiL7 from './l7.jpg'
import LiL9 from './l9.jpg'
import LiL9Ultra from './l9-ultra.jpg'
import LiMega from './mega.jpg'

const Li = () => {

  const models = [
    {
      name: 'Li L7',
      image: LiL7,
    },
    {
      name: 'Li L9',
      image: LiL9,
    },
    {
      name: 'Li L9 Ultra',
      image: LiL9Ultra,
    },
    {
      name: 'Li MEGA',
      image: LiMega,
    },
  ]

  return (
    <section className="li" id="li">
      <div className="container">

        <div className="li-container">

          {/* LI AUTO TITLE */}
          <div className="li-top">
            <span className="li-subtitle">
              PREMIUM SMART SUV
            </span>

            <h2>LI AUTO</h2>

            <p>
              Zamonaviy texnologiya, qulaylik va premium
              dizayn uyg‘unligi.
            </p>
          </div>

          {/* LI AUTO MODELS */}
          <div className="li-grid">

            {models.map((model, index) => (
              <div className="li-card" key={index}>

                <div className="li-image">
                  <img
                    src={model.image}
                    alt={model.name}
                  />
                </div>

                <div className="li-info">

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

export default Li
