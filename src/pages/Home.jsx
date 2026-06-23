import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import MovieRow from '../components/MovieRow'
import Footer from '../components/Footer'
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
            <Header />
            <Hero />

            <div className="bg-[#141414] min-h-screen text-white">
                
                <MovieRow title="Melanjutkan Tonton Film">
                <div className="flex gap-6 overflow-x-auto scrollbar-hide">
                    {films.map((movie) => (
                    <div 
                        className="relative min-w-[160px] md:min-w-[220px] bg-zinc-900 rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer group" 
                        key={movie.id}
                    >
                        <img 
                        src={movie.image} 
                        alt={movie.title} 
                        className="w-90 object-cover "
                        />
                        
                        <div className="absolute bottom-0 left-0 right-0 p-3 pt-15 bg-gradient-to-t from-black via-black/70 to-transparent flex justify-between">
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

                <MovieRow title="Top Rating Film dan Series Hari Ini">
                <div className="flex gap-9 overflow-x-auto pb-10 scrollbar-hide">
                    {[TopMovies1, TopMovies2, TopMovies3, TopMovies4, TopMovies5].map((imgSrc, index) => (
                    <img 
                        key={index}
                        src={imgSrc} 
                        alt="" 
                        className="md:w-62 md:h-90 object-contain rounded-lg shadow-md hover:scale-105 transition-transform duration-450 cursor-pointer"
                    />
                    ))}
                </div>
                </MovieRow>

                <MovieRow title="Film Trending">
                <div className="flex gap-9 overflow-x-auto pb-4 scrollbar-hide">
                    {[TrendingFilm1, TrendingFilm2, TrendingFilm3, TrendingFilm4, TrendingFilm5].map((imgSrc, index) => (
                    <img 
                        key={index}
                        src={imgSrc} 
                        alt="" 
                        className="w-full max-h-90 object-contain rounded-lg shadow-md hover:scale-105 transition-transform duration-450 cursor-pointer"
                    />
                    ))}
                </div>
                </MovieRow>

                <MovieRow title="Rilis Baru">
                <div className="flex gap-9 overflow-x-auto pb-4 scrollbar-hide">
                    {[NewFilm1, NewFilm2, NewFilm3, NewFilm4, NewFilm5].map((imgSrc, index) => (
                    <img 
                        key={index}
                        src={imgSrc} 
                        alt="" 
                        className="w-full max-h-90 object-contain rounded-lg shadow-md hover:scale-105 transition-transform duration-450 cursor-pointer"
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
