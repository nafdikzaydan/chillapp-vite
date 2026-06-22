import React from 'react'
import Logo from '../assets/images/chill-app-icon.png'

export default function Footer() {
  return (
    <>
      <footer className="bg-[#111] text-zinc-400 py-12 px-4 md:px-12 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          
          <div className="flex flex-col gap-4">
            <img src={Logo} alt="Logo" className="h-8 w-auto object-contain self-start" />
            <p className="text-xs text-zinc-500 font-medium">
              @2023 Chill All rights reserved.
            </p>
          </div>

          <div className="md:col-span-2 flex flex-col gap-6">
            <h3 className="text-white font-bold text-base tracking-wide">Genre</h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm font-normal">
              <ul className="flex flex-col gap-2">
                <li className="hover:text-white cursor-pointer transition-colors">Aksi</li>
                <li className="hover:text-white cursor-pointer transition-colors">Anime</li>
                <li className="hover:text-white cursor-pointer transition-colors">Britania</li>
              </ul>

              <ul className="flex flex-col gap-2">
                <li className="hover:text-white cursor-pointer transition-colors">Drama</li>
                <li className="hover:text-white cursor-pointer transition-colors">Fantasi Ilmiah & Fantasi</li>
                <li className="hover:text-white cursor-pointer transition-colors">Kejahatan</li>
              </ul>

              <ul className="flex flex-col gap-2">
                <li className="hover:text-white cursor-pointer transition-colors">Komedi</li>
                <li className="hover:text-white cursor-pointer transition-colors">Petualangan</li>
                <li className="hover:text-white cursor-pointer transition-colors">Perang</li>
              </ul>

              <ul className="flex flex-col gap-2">
                <li className="hover:text-white cursor-pointer transition-colors">Sains & Alam</li>
                <li className="hover:text-white cursor-pointer transition-colors">Thriller</li>
                <li className="hover:text-white cursor-pointer transition-colors">Romantis</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-base tracking-wide">Bantuan</h3>
            <ul className="flex flex-col gap-2 text-sm font-normal">
              <li className="hover:text-white cursor-pointer transition-colors">FAQ</li>
              <li className="hover:text-white cursor-pointer transition-colors">Kontak Kami</li>
              <li className="hover:text-white cursor-pointer transition-colors">Privasi</li>
              <li className="hover:text-white cursor-pointer transition-colors">Syarat & Ketentuan</li>
            </ul>
          </div>

        </div>
      </footer>
    </>
  )
}