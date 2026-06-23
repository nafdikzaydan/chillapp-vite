import React from 'react'

export default function MovieRow({title, children}) {
  return (
    <section className='px-20 py-10'>
        <h2 className='text-3xl font-medium mb-6'>{title}</h2>
        <div className='flex overflow-x-auto scroll-smooth scrollbar-hide'>
            {children}
        </div>
    </section>
  )
}
