import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import MovieRow from '../components/MovieRow'
import Footer from '../components/Footer'
import { continueWatch } from '../data/movies';
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
  return (
    <>
        <Header />
        <Hero />
        <MovieRow title="Melanjutkan Tonton Film">
            {continueWatch.map((movie) => (
                <div className="movie-card" key={movie.id}>
                    <img src={movie.image} alt={movie.title} className="row-poster"/>
                    <div className="movie-info">
                        <h3>{movie.title}</h3>
                        <p>★ {movie.rating}</p>
                    </div>
                </div>
            ))}
        </MovieRow>
        <MovieRow title="Top Rating Film dan Series Hari Ini">
            <div className="movie-card">
                <img src={TopMovies1} alt="" className="row-poster large-movie"/>
                <img src={TopMovies2} alt="" className="row-poster large-movie"/>
                <img src={TopMovies3} alt="" className="row-poster large-movie"/>
                <img src={TopMovies4} alt="" className="row-poster large-movie"/>
                <img src={TopMovies5} alt="" className="row-poster large-movie"/>
            </div>
        </MovieRow>
        <MovieRow title="Film Trending">
            <div className="movie-card">
                <img src={TrendingFilm1} alt="" className="row-poster large-movie"/>
                <img src={TrendingFilm2} alt="" className="row-poster large-movie"/>
                <img src={TrendingFilm3} alt="" className="row-poster large-movie"/>
                <img src={TrendingFilm4} alt="" className="row-poster large-movie"/>
                <img src={TrendingFilm5} alt="" className="row-poster large-movie"/>
            </div>
        </MovieRow>
        <MovieRow title="Rilis Baru">
            <div className="movie-card">
                <img src={NewFilm1} alt="" className="row-poster large-movie"/>
                <img src={NewFilm2} alt="" className="row-poster large-movie"/>
                <img src={NewFilm3} alt="" className="row-poster large-movie"/>
                <img src={NewFilm4} alt="" className="row-poster large-movie"/>
                <img src={NewFilm5} alt="" className="row-poster large-movie"/>
            </div>
        </MovieRow>
        <Footer />
    </>
  );
}
