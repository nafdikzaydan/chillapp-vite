import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import MovieRow from '../components/MovieRow'
import Footer from '../components/Footer'
// import { continueWatch } from '../data/movies';
// import { FILMS } from '../pages/Admin'
import TopMovies1 from '../assets/images/top-rate-1.png'
import TopMovies2 from '../assets/images/top-rate-2.png'
import TopMovies3 from '../assets/images/top-rate-3.png'
import TopMovies4 from '../assets/images/top-rate-4.png'
import TopMovies5 from '../assets/images/top-rate-5.png'
import TrendingFilm1 from '../assets/images/trending-film1.png'
import TrendingFilm2 from '../assets/images/trending-film2.png'
import TrendingFilm3 from '../assets/images/trending-film3.png'
import TrendingFilm4 from '../assets/images/trending-film4.png'
import TrendingFilm5 from '../assets/images/trending-film5.png'
import NewFilm1 from '../assets/images/new-release1.png'
import NewFilm2 from '../assets/images/new-release2.png'
import NewFilm3 from '../assets/images/new-release3.png'
import NewFilm4 from '../assets/images/new-release4.png'
import NewFilm5 from '../assets/images/new-release5.png'

export default function Home() {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        const data = localStorage.getItem('data_film');
        if (data) setFilms(JSON.parse(data));
    }, []);

  return (
    <>
        <div className=''>
            {/* Komponen Header & Hero (Pastikan isinya nanti juga disesuaikan ke Tailwind) */}
            <Header />
            <Hero />

            {/* Container utama untuk membungkus semua baris film agar ada jarak sisi kiri-kanan yang konsisten */}
            <div className="space-y-8 py-8 px-4 md:px-12 bg-[#141414] min-h-screen text-white">
                
                {/* 1. ROW: Melanjutkan Tonton Film */}
                <MovieRow title="Melanjutkan Tonton Film">
                {/* flex gap-4 overflow-x-auto: Membuat poster berjajar ke samping dan bisa di-scroll horizontal */}
                <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                    {films.map((movie) => (
                    /* - relative: WAJIB, supaya posisi teks absolute di dalamnya mengacu pada card ini
                        - h-40 md:h-52: Ketinggian card ditentukan langsung di sini sekarang
                    */
                    <div 
                        className="relative min-w-[160px] md:min-w-[220px] h-40 md:h-52 bg-zinc-900 rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer group" 
                        key={movie.id}
                    >
                        {/* Gambar diset w-full h-full object-cover agar memenuhi seluruh area card */}
                        <img 
                        src={movie.image} 
                        alt={movie.title} 
                        className="w-full h-full object-cover"
                        />
                        
                        {/* OVERLAY GRADASI + WADAH TEKS:
                        - absolute bottom-0 left-0 right-0: Menempel erat di area bawah gambar
                        - bg-gradient-to-t from-black via-black/70 to-transparent: Membuat efek gradasi gelap ke atas
                        - pt-12: Padding atas agak longgar agar efek gradasi memudar dengan halus sebelum menyentuh teks
                        */}
                        <div className="absolute bottom-0 left-0 right-0 p-3 pt-12 bg-gradient-to-t from-black via-black/70 to-transparent flex justify-between">
                        <h3 className="font-semibold text-sm md:text-base text-white truncate transition-colors drop-shadow-md">
                            {movie.title}
                        </h3>
                        <p className="text-xs text-white mt-0.5 drop-shadow-md">
                            ★ {movie.rating}
                        </p>
                        </div>

                    </div>
                    ))}
                </div>
                </MovieRow>

                {/* 2. ROW: Top Rating Film dan Series Hari Ini */}
                <MovieRow title="Top Rating Film dan Series Hari Ini">
                <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                    {/* Menggunakan array manual seperti kodemu sebelumnya */}
                    {[TopMovies1, TopMovies2, TopMovies3, TopMovies4, TopMovies5].map((imgSrc, index) => (
                    <img 
                        key={index}
                        src={imgSrc} 
                        alt="" 
                        className="min-w-[140px] sm:min-w-[180px] md:min-w-[240px] h-auto object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                    ))}
                </div>
                </MovieRow>

                {/* 3. ROW: Film Trending */}
                <MovieRow title="Film Trending">
                <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                    {[TrendingFilm1, TrendingFilm2, TrendingFilm3, TrendingFilm4, TrendingFilm5].map((imgSrc, index) => (
                    <img 
                        key={index}
                        src={imgSrc} 
                        alt="" 
                        className="min-w-[140px] sm:min-w-[180px] md:min-w-[240px] h-auto object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                    ))}
                </div>
                </MovieRow>

                {/* 4. ROW: Rilis Baru */}
                <MovieRow title="Rilis Baru">
                <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                    {[NewFilm1, NewFilm2, NewFilm3, NewFilm4, NewFilm5].map((imgSrc, index) => (
                    <img 
                        key={index}
                        src={imgSrc} 
                        alt="" 
                        className="min-w-[140px] sm:min-w-[180px] md:min-w-[240px] h-auto object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                    ))}
                </div>
                </MovieRow>
            </div>
            <Footer />
        </div>
    </>
  );
}
