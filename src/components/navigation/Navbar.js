import React from 'react';
import Link from 'next/link';
import HeroHome from '@/pages/HeroHome';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className=" flex justify-between pt-2">
        <h1 className="font-bold text-white">
          Read<span className="text-yellow-300">it</span>.
        </h1>
        <div className="pl-28">
          <ul className="flex gap-3 text-white font-light">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/items">
              <li>Articles</li>
            </Link>
            <Link href="/about">
              <li>About</li>
            </Link>
            <Link href="/contact">
              <li>Contact</li>
            </Link>
            <Link href='/post/2"'>
              <li>Voir Post</li>
            </Link>
          </ul>
        </div>
      </div>
      <HeroHome/>
    </div>
  );
}
