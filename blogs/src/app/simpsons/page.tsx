"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { PacmanLoader } from "react-spinners";

type Simpson = {
  name: string;
  occupation: string;
  phrases: string[];
  age: number;
};

export default function Home() {
  const [character, setCharacter] = useState<Simpson>();

  useEffect(() => {
    fetch("https://thesimpsonsapi.com/api/characters/17")
      .then((res) => res.json())
      .then((data) => setCharacter(data));
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-200 to-orange-400 p-8">
      <h1 className="text-4xl font-bold text-center text-orange-600 mb-8">
        Simpsons API
      </h1>
      {!character && (
        <div className="text-black text-3xl flex flex-col items-center">
          <PacmanLoader />
          <p>Carregando personagem ...</p>
        </div>
      )}
      {character && (
        <div className="text-black flex flex-col items-center">
          <h1 className="text-2xl">{character.name}</h1>
          <Image
            src={"https://cdn.thesimpsonsapi.com/200/character/17.webp"}
            alt="simpsons"
            width={200}
            height={200}
            priority
          />
          <p>{character.occupation}</p>
          <p className="text-blue-700 mt-4">Age: {character.age}</p>
          <p className="italic mt-4">{character.phrases[0]}</p>
        </div>
      )}
    </main>
  );
}
