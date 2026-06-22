import React from 'react'
import BgHero from '../assets/images/bg-hero.png';

export default function Hero() {
  return (
    <>
        <section 
        className="relative min-h-[70vh] md:min-h-[85vh] w-full flex items-end bg-cover bg-center bg-no-repeat text-white"
        style={{ backgroundImage: `url(${BgHero})` }}
        >
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-black/40 to-transparent z-10" />

        <div className="relative z-20 w-full px-4 md:px-12 pb-12 md:pb-20 max-w-4xl flex flex-col gap-6">
            
            <div className="flex flex-col gap-3">
            <h1 className="text-2xl md:text-4xl font-medium tracking-wide drop-shadow-lg">
                Duty After School
            </h1>
            <p className="text-sm md:text-base text-zinc-200 font-normal leading-relaxed drop-shadow max-w-2xl">
                Sebuah benda tak dikenal mengambil alih dunia. 
                Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang.
            </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
            <button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 font-semibold rounded-3xl text-sm md:text-base shadow-md hover:shadow-lg active:scale-95 transition-all flex items-center justify-center">
                Mulai
            </button>
            
            <button className="px-6 py-2.5 bg-zinc-800/80 hover:bg-zinc-700 border border-zinc-700 font-semibold rounded-3xl text-sm md:text-base shadow-md hover:shadow-lg active:scale-95 transition-all flex items-center justify-center">
                Selengkapnya
            </button>

            <span className="px-3 py-2.5 bg-zinc-900/60 border border-white text-xs md:text-sm font-bold rounded-3xl tracking-wider">
                18+
            </span>
            </div>

        </div>
        </section>
    </>
  )
}
