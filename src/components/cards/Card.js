import Link from 'next/link'
import React from 'react'

export default function Card({img, title, excerpt}) {
  return (
      <div className='px-8 py-8'>
        <img src={img} alt={title} className='w-full h-64 rounded-sm ' />
        <p className='font-bold'>{title}</p>
        <p className=''>{excerpt}</p>
      
      </div>
  )
}
