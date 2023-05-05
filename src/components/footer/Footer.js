import React from 'react'
import { DataFooter} from '../datas/DataFooter.Js'
import { Link } from 'react-router-dom'
import CardsFooter from '../cards/CardsFooter';
import { GrFacebook, GrInstagram, GrTwitter, } from "react-icons/gr";
import { BsEnvelope, BsGeoAlt, BsTelephone } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="bg-gray-800 text-gray-400">
      <div className="container">
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-2 pt-6 ">
          <div>
            <h1 className="text-white font-bold pb-4">
              Read<span className="text-yellow-300">it</span>.
            </h1>
            <p className="text-sm">
              Far far away, behind the word <br /> mountains, far from the
              countries <br /> Volkalia and Consonantia, ther <br />
              live the blid text.
            </p>
            <p className="flex gap-6 pt-4 text-white">
              <GrTwitter></GrTwitter>
              <GrFacebook></GrFacebook>
              <GrInstagram></GrInstagram>
            </p>
          </div>
          <div>
            <h2 className=" text-white pb-4 ml-2">latest news</h2>
            <div className="flex pl-2 pt-2">
              <img
                src="/img/image_1.jpg"
                alt=""
                className="bg-auto w-14 h-14 rounded-sm mr-2"
              />
              <div className="block mr-2 ">
                <h2 className="text-sm font-extralight text-gray-100 pl-2">
                  Event the all-powerful
                  <br /> Pointing has no control about
                </h2>
                <p className="text-sm font-extralight text-gray-500 pl-2 pt-2">
                  Oct 18, 2019 Admin 19
                </p>
              </div>
            </div>
            <div className="flex pl-2 pt-4">
              <img
                src="/img/image_2.jpg"
                alt=""
                className="bg-auto w-14 h-14 rounded-sm mr-2"
              />
              <div className="block mr-2">
                <h2 className="text-sm font-extralight text-gray-100 pl-2">
                  Event the all-powerful
                  <br /> Pointing has no control about
                </h2>
                <p className="text-sm font-extralight text-gray-500 pl-2 pt-2">
                  Oct 18, 2019 Admin 19
                </p>
              </div>
            </div>
          </div>
          <div className="pl-6">
            <h2 className="text-white ">Information</h2>
            <ul className="text-white m-2 pt-6">
              <li> &#x276F; Home</li>
              <li> &#x276F; About</li>
              <li> &#x276F; Articles</li>
              <li> &#x276F; Contact</li>
            </ul>
          </div>
          <div>
            <h2 className="text-white pb-4">Have a question?</h2>
            <p className="text-gray-300 m-2 flex">
              <BsGeoAlt className="mx-3 text-white" />
              203 Fake St.MountainView,
              <br />
              SAns Franscico, California,
              <br /> USA
            </p>
            <p className="text-white m-2 flex ">
              {" "}
              <BsTelephone className="mx-3 text-white" />
              +2 392 3929 210
            </p>
            <p className="text-white m-2 flex">
              <BsEnvelope className="mx-3 text-white" />
              info@yourdomain.com
            </p>
          </div>
        </div>
        <p className="text-center font-extralight ">
          Copyright 2023 All rights resserved &#124;This template is madewith
          &#9829; by Cololib
        </p>
      </div>
    </div>
  );
}
