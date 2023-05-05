import Layout from '@/components/Layout/Layout'
import React from 'react'

export default function about() {
  return (
    <Layout>
      <div>
        <div className="grid xl:grid-cols-2">
          <div>
            <img
              src="https://media.discordapp.net/attachments/1098629662143426671/1103759310686802052/img_about.jpg?width=962&height=960"
              alt=""
              className="w-fulld max-h-[70vh] "
            />
          </div>
          <div className="pt-4">
            <h3 className="text-gray-200">Welcome to readit</h3>
            <h2 className="text-black text-bold py-2">
              We give you the best articles you want.
            </h2>
            <p className="text-gray-300 pb-2 m-4">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </p>
            <div className="grid xl:grid-cols-3 gap-2">
              <button className="bg-yellow-600 text-white border font-semibold rounded-xs">
                Our Mission
              </button>
              <button className="text-black border border-gray-400 font-semibold rounded-xs">
                Our Vision
              </button>
              <button className="text-black border border-gray-400 font-semibold rounded-sx">
                Our Value
              </button>
              <p>
                Far far away,behind the word Mountains,
                far from the countries Vakalia and Consonantia the live
                blind texts .Separeted they live in Bookmarks grove right at the coast of the Semantics, a large language ocean.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center py-4">
          <h3 className="font-semibold text-gray-200">Testimonial</h3>
          <h2 className="font-bold text-black">Happy Clients</h2>
        </div>
      </div>
    </Layout>
  );
}
