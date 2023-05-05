import React from 'react'
import Navbar from '../navigation/Navbar'
import Footer from '../footer/Footer'
import HeroHome from '@/pages/HeroHome'

export default function Layout({children}) {
  return (
    <div >
      <Navbar />
   <main >{children}</main>
   <Footer /> 
    </div>
  )
}
