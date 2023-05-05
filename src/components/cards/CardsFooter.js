import React from 'react'
import { Link } from 'react-router-dom'

export default function CardsFooter( title,date,img,id) {
  
  return (
    <div className='container'>
      <Link to={`/post/${id}`}> 
            <img src={img} alt={title} className='w-full h-64 rounded-sm ' />
            <h2>{title}</h2>
            <p>{date}</p>
        </Link>
    </div>
  )
}