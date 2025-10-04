"use client";

import React, { useState, useEffect } from "react";
import { FaInstagram } from "react-icons/fa";

import BuyNowButtonBlack from "./BuyNowButtonBlack";

import { heroDetails } from "@/data/hero";

const Hero: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.src = "/images/Capsule Corp.png";
  }, []);

  return (
    <section
      id="hero"
      className={`relative flex items-center justify-center pb-16 pt-32 md:pt-24 md:pb-24 px-5 min-h-screen ${!imageLoaded ? 'bg-black' : ''}`}
    >
      <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
        <div 
          className="absolute inset-0 h-full w-full bg-cover bg-no-repeat bg-center animate-slow-zoom"
          style={{
            backgroundImage: "url('/images/Capsule Corp.png')",
            backgroundPosition: "55% center",
            backgroundSize: "cover"
          }}
        ></div>
        <div className={`absolute inset-0 h-full w-full bg-black/40 transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}></div>
      </div>

      <div className="absolute left-0 right-0 bottom-0"></div>

      <div className="text-center animate-slide-up px-6 md:px-0">
        <h1 className="text-4xl md:text-6xl md:leading-tight font-bold text-white max-w-lg md:max-w-2xl mx-auto">
          {heroDetails.heading}
        </h1>
        <p className="mt-4 text-white max-w-lg mx-auto">
          {heroDetails.subheading}
        </p>
        <div className="mt-6 mb-6 flex flex-col sm:flex-row items-center sm:gap-4 w-fit mx-auto">
          <BuyNowButtonBlack dark={true} />
        </div>
        {/* <Image
          src={heroDetails.centerImageSrc}
          width={384}
          height={340}
          quality={100}
          sizes="(max-width: 768px) 100vw, 384px"
          priority={true}
          unoptimized={true}
          alt="app mockup"
          className="relative mt-12 md:mt-16 mx-auto z-10"
        /> */}
      </div>

      {/* Botón flotante de Instagram - Solo en Hero */}
      <a
        href="https://instagram.com/moovimiento"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-6 left-6 z-10 bg-black text-white p-4 rounded-full shadow-lg transition-all duration-500 hover:scale-105 group animate-slide-up"
        aria-label="Síguenos en Instagram"
      >
        <FaInstagram className="w-6 h-6 group-hover:text-yellow-400 transition-colors" />
      </a>
    </section>
  );
};

export default Hero;
