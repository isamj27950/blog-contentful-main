import Layout from '@/components/Layout/Layout'
import React from 'react'
import HeroOther from './HeroOther'
import Form from '@/components/form/Form'

export default function contact() {
  return (
    <Layout>
      <div className="container">
        <h2 className="text-2xl pt-8 pb-6">Contact Information</h2>
        <ul className="pb-14 grid md:grid-cols-2 xl:grid-cols-4 gap-8 text-gray-400">
          <li>
            Address:198 West 21th Street,
            <br /> Suite 721 NEW York NY 10016
          </li>
          <li>Phone:<span className='text-black'> + 1235235598</span></li>
          <li>Email:<span className='text-black'> info@yoursite.com</span></li>
          <li>Wedsite<span className='text-black'> yoursite.co</span></li>
        </ul>
        <div className="grid  md:grid xl:grid-cols-2 bg-gray-200 items-center ">
          <div>
            <img
              src="https://media.discordapp.net/attachments/1098629662143426671/1103759386263945216/map.png?width=1010&height=960"
              alt=""
              className="w-fulld max-h-[70vh] rounded-lg"
            />
          </div>
          <div className="">
            <Form />
          </div>
        </div>
      </div>
    </Layout>
  );
}
