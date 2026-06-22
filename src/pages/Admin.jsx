import React, { useState } from 'react'
import Poster1 from '../assets/images/small-movie1.png';
import Poster2 from '../assets/images/small-movie2.png'; 
import Poster3 from '../assets/images/small-movie3.png'; 
import Poster4 from '../assets/images/small-movie4.png';

const FILMS = [
    {
        id: 1,
        title: "Don't Look Up",
        rating: "4.5/5", 
        image: Poster1 
    },
    {
        id: 2,
        title: "The Batman",
        rating: "4.8/5",
        image: Poster2
    },
    {
        id: 3,
        title: "Blue Lock",
        rating: "4.6/5",
        image: Poster3
    },
    {
        id: 4,
        title: "A Man Called Oto",
        rating: "4.4/5",
        image: Poster4
    },
];

export default function Admin() {
    const [films, setFilms] = useState(FILMS);
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState('');
    const [selectedId, setSelectedId] = useState();

    const onUpdateFilm = (id) => {
        setSelectedId(id)
        setTitle(films[id - 1].title);
        setRating(films[id - 1].rating)
    }

    const deleteFilm = (deletedId) => {
        const newFilms = films.filter((film) => 
        film.id != deletedId);
        setFilms(newFilms);
        localStorage.setItem('data_film', JSON.stringify(newFilms));
    }

    const addFilm = (e) => {
        e.preventDefault();
        const newFilm = {
            id: films.length + 1,
            title,
            rating
        }

        const newFilms = [...films, newFilm];
        setFilms(newFilms);
        localStorage.setItem('data_film', JSON.stringify(newFilms));
        setTitle("");
        setRating("");
    }

    const updateFilm = () => {
        const newFilms = films.map((film) => {
        if (film.id === selectedId) {
            film.title = title;
            film.rating = rating;
            return film;
        } else {
            return film;
        }
        });

        setFilms(newFilms);
        localStorage.setItem('data_film', JSON.stringify(newFilms));
    };

  return (
    <>
        <div className="m-4">
            <form className='mb-2 flex flex-col gap-2'>
                <div className='flex gap-2'>
                    <label className='flex items-center'>Title</label>
                    <input className='border w-full p-2' type='text' onChange={(e) => setTitle(e.target.value)} value={title}></input>
                </div>
                <div className='flex gap-2'>
                    <label className='flex items-center'>Rating</label>
                    <input className='border w-full p-2' type='text' onChange={(e) => setRating(e.target.value)} value={rating}></input>
                </div>
                <div>
                    <button 
                        className={`${selectedId ? "bg-blue-600" : "bg-green-600"} p-2 cursor-pointer text-white`}
                        onClick={selectedId ? updateFilm : addFilm}
                    >
                        {selectedId ? "Update" : "Add"}
                    </button>
                </div>
            </form>
            <section className='flex flex-col gap-2'>
                {films.map((film) => {
                    return (
                        <div key={film.id} className='border p-2 flex justify-between items-center'>
                            <h3> <b>{film.title}</b> - {film.rating}</h3>
                            <div className='flex gap-2'>
                                <button 
                                    className='text-blue-500 border border-blue-500 p-1 cursor-pointer hover:opacity-60'
                                    onClick={() => onUpdateFilm(film.id)}    
                                >
                                    Update
                                </button>
                                <button 
                                className='text-red-500 border border-red-500 p-1 cursor-pointer hover:opacity-60'
                                onClick={() => deleteFilm(film.id)}    
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                        );
                    })}
            </section>
        </div>
    </>
  )
}
