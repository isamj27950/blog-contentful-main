import Layout from '@/components/Layout/Layout'
import React from 'react'
import SectionAboutHight from './SectionAboutHight';
import SectionAboutCenter from './SectionAboutCenter';
import SectionAboutCards from './SectionAboutCards';

export default function about() {
  return (
    <Layout>
      <div className="container">
        {/*Partie haute video + text*/ }
        <SectionAboutHight />
        {/*Text au centre*/ }
        <SectionAboutCenter/>
        {/*les 3 cards*/ }
        <SectionAboutCards />
        </div>
    </Layout>
  );
}
