"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Locations() {
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);
  const router = useRouter();
 
  const images: Record<string, string> = {
    "Campina Grande": "/campina.jpg",
    "Brasília": "/brasilia.jpg",
    "Santana": "/santana.jpg",
    "Company": "/company.jpg",
  };

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center">
      
      {backgroundImage && (
        <img
          src={backgroundImage}
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300"
        />
      )}

      <img src="../stf_logo.png" alt="logo" />
      <h1 className="p-10 text-4xl">Selecione a localidade</h1>
      
      <div className="relative z-10 flex gap-4 p-4 bg-black bg-opacity-50 rounded-lg">
        {Object.keys(images).map((location) => (
          <button
            key={location}
            onMouseEnter={() => setBackgroundImage(images[location])}
            onMouseLeave={() => setBackgroundImage(null)}
            className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
            onClick={()=>router.push("/home")}>
            {location}
          </button>
        ))}
      </div>
    </div>
  );
}
