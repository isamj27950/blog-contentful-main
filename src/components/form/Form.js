import React from 'react'

export default function Form() {
  return (
    <div className="w-full max-h-[70vh] rounded-lg items-center">
      <form action="" method="post" className=" rounded-l  p-6  ">
        <div className="">
          <p>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-400 rounded-lg my-4 p-3"
            />
          </p>
          <p>
            <input
              type="text"
              placeholder="Your Email"
              className="w-full border border-gray-400 rounded-lg my-4 p-3"
            />
          </p>
          <p>
            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-400 p-3 my-4 rounded-lg'/>"
            />
          </p>
          <p>
            <label htmlFor=""></label>
            <textarea
              name="Message"
              id=""
              cols="20"
              rows="10"
              className="w-full border border-gray-400 rounded-lg my-4 p-3 text-gray-500"
            >
              Message
            </textarea>
          </p>
          <button className="bg-yellow-400 p-2 rounded-lg text-white">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
