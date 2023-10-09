import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { FcSportsMode } from 'react-icons/fc';

interface NavbarProps {
  onFavoriteToggle: () => void;
}

export default function Navbar({ onFavoriteToggle }: NavbarProps) {
  return (
    <>
      <header className="bg-green-500 w-[65vw] h-10 rounded-md flex justify-around items-center shadow-xl">
        <a href="/" className="flex items-center gap-2">
          <p className="text-xl font-bold">Atletas</p> <span><FcSportsMode size="22"/></span>
        </a>
        <button onClick={onFavoriteToggle} className="flex items-center gap-2 cursor-pointer">
          <p>Meus favoritos</p> <span> <AiFillStar color="yellow"/> </span>
        </button>
      </header>
    </>
  );
}