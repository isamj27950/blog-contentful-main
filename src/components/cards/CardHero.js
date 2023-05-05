import React from 'react'
import { Link } from 'react-router-dom'

export default function CardHero(subtitle, title,content, url_img,id) {
  
  return (
    <div className='container'>
      <Link to={`/post/${id}`}> 
   
              <h2>{subtitle}</h2>
              <h1>{title}</h1>
                <p>{content}</p>
        </Link>
    </div>
  )
}

