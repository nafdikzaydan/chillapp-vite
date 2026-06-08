import React from 'react'
import BgHero from '../assets/images/bg-hero.png';

export default function Hero() {
  return (
    <>
        <section className="hero" style={{ backgroundImage: `url(${BgHero})` }}>
            <div className="hero-content">
                <div className="hero-text">
                    <h1>Duty After School</h1>
                    <p>
                        Sebuah benda tak dikenal mengambil alih dunia. 
                        Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang.
                    </p>
                </div>

                <div className="hero-buttons">
                    <button className="start-btn">
                        <span>Mulai</span>
                    </button>
                    <button className="info-btn">
                        <span>Selengkapnya</span>
                    </button>
                    <span className="age">18+</span>
                </div>
            </div>
        </section>
    </>
  )
}
