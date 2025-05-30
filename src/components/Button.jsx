import React from 'react'

export default function Button(props) {
  
  const {text, func} = props
  
  return (
      <button onClick={func} className='mx-auto px-8 py-4 rounded-md border-[2px] border-blue-400 border-solid blueShadow bg-slate-950 duration-200'>
        {text}
      </button>
  )
}
