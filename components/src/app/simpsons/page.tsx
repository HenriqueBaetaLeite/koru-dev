"use client";

const URL = "https://thesimpsonsapi.com/api/characters/17";

import Image from 'next/image';

import { useState, useEffect } from "react";
import { PacmanLoader } from 'react-spinners';
import { Rating } from 'react-simple-star-rating'

type Simpson = {
  name: string;
  phrases: string[];
  age: number;
};

export default function Simpson() {
  const [personagem, setPersonagem] = useState<Simpson>();

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setPersonagem(data));
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-200 to-orange-400 p-8">
      <h1 className="text-4xl font-bold text-center text-orange-600 mb-8">
        Simpsons API
      </h1>

      {
        !personagem && 
        <div className=" text-black flex flex-col items-center">
          <PacmanLoader />
          <h1 className="text-black">Carregando personagem ...</h1>
        </div>
      }

      {personagem && (
        <div className=" text-black flex flex-col items-center">
          <p className="text-2xl">{personagem.name}</p>

          <p>Idade: {personagem.age}</p>

          <Image
            src="https://cdn.thesimpsonsapi.com/200/character/17.webp"
            alt="imagem de um personagem dos Simpsons"
            width={200}
            height={200}
            priority
          />

          <p>{personagem.phrases[0]}</p>
        </div>
      )}

      <Rating />

    </main>
  );
}
