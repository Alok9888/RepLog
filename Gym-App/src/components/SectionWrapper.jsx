import React from 'react'

export default function SectionWrapper(props) {
  const {children, header, title, id} = props
  return (
    <section id={id} className='min-h-screen flex flex-col gap-10'>
      <div className='flex flex-col justify-center items-center bg-slate-950 gap-2 py-10'>
        <p className='uppercase font-medium'>{header}</p>
        <h2 className='font-semibold text-3xl
        sm:text-4xl md:text-5xl lg:text-6xl'>{title[0]} <span className='uppercase text-blue-400'>{title[1]}</span> {title[2]}</h2>
      </div>
      <div className='mx-auto flex flex-col gap-10 max-w-[800px] w-full p-4'>
        {children}
      </div>
    </section>
  )
}
