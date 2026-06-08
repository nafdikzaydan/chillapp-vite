import React from 'react'
import Logo from '../assets/images/chill-app-icon.png'

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-col">
          <img src={Logo} alt=""/>
          <p>© copy; 2026 MyMovie. All rights reserved.</p>
        </div>

        <div className="footer-col">
          <h3>Genre</h3>
      
          <div className="genre-list">
            <ul>
              <li>Aksi</li>
              <li>Anime</li>
              <li>Britania</li>
            </ul>

            <ul>
              <li>Drama</li>
              <li>Fantasi Ilmiah & Fantasi</li>
              <li>Kejahatan</li>
            </ul>

            <ul>
              <li>Komedi</li>
              <li>Petualangan</li>
              <li>Perang</li>
            </ul>

            <ul>
              <li>Sains & Alam</li>
              <li>Thriller</li>
              <li>Romantis</li>
            </ul>
          </div>
        </div>

        <div className="footer-col">
          <div className="footer-help">
            <h3>Bantuan</h3>
            <ul>
              <li>FAQ</li>
              <li>Kontak Kami</li>
              <li>Privase</li>
              <li>Syarat & Ketentuan</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}
