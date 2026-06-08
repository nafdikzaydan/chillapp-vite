import React from 'react'

export default function MovieRow({title, children}) {
  return (
    <section className='movie-section'>
        <h2>{title}</h2>
        <div className='movie-card'>
            {children}
        </div>
    </section>
  )
}
