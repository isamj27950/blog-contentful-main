import Layout from '@/components/Layout/Layout'
import React from 'react'
import SectionAboutHight from './SectionAboutHight';
import SectionAboutCenter from './SectionAboutCenter';
import SectionAboutCards from './SectionAboutCards';

export default function about() {
  return (
    <Layout>
      <div className="container">
        {/*Partie haute video + text*/}
        <SectionAboutHight />
        {/*Text au centre*/}
        <SectionAboutCenter />
        {/*les 3 cards*/}
        <SectionAboutCards />
        {/*bouttons bas de page */}
        <div className='text-center space-x-1 pt-4'>
          <button className="bg-yellow-400 border-2 border-gray-200 rounded-full  h-3 w-3 "></button>
          <button className="bg-gray-100 border-2 border-gray-200 rounded-full  h-3 w-3 "></button>
          <button className="bg-gray-100 border-2 border-gray-200 rounded-full  h-3 w-3 "></button>
          <button className="bg-gray-100 border-2 border-gray-200 rounded-full  h-3 w-3 "></button>
          <button className="bg-gray-100 border-2 border-gray-200 rounded-full  h-3 w-3 "></button>
        </div>
      </div>
    </Layout>
  );
}
