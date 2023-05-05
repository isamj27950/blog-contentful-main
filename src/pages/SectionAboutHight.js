import React from 'react'

export default function SectionAboutHight() {
  return (
    <div className="grid xl:grid-cols-2">
      <div className="relative">     
          <img
            src="https://media.discordapp.net/attachments/1098629662143426671/1103759310686802052/img_about.jpg?width=962&height=960"
            alt=""
            className="w-fulld max-h-[70vh]  "
          /> 
        <button className="bg-yellow-400 rounded-full text-white text-xl h-12 w-12 absolute top-[40%] right-[-3%]  ">
          &#10148;
        </button>
      </div>
      <div className="pt-16 pl-10">
        <h3 className="text-gray-300 font-semibold">Welcome to readit</h3>
        <h2 className="text-black font-bold text-2xl py-2">
          We give you the best articles you want.
        </h2>
        <p className="text-gray-300 pt-2 pb-2 ">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia
        </p>
        <div className="grid xl:grid-cols-3 gap-1 pt-2">
          <button className="bg-yellow-400 text-white border font-semibold py-2 rounded-xs">
            Our Mission
          </button>
          <button className="text-black border border-gray-400 font-semibold rounded-xs">
            Our Vision
          </button>
          <button className="text-black border border-gray-400 font-semibold rounded-sx">
            Our Value
          </button>
        </div>
        <p className="bg-gray-100 border-gray-800 text-gray-600 my-2 p-8">
          Far far away,behind the word Mountains, far from the countries Vakalia
          and Consonantia the live blind texts .Separeted they live in Bookmarks
          grove right at the coast of the Semantics, a large language ocean.
        </p>
      </div>
    </div>
  );
}
