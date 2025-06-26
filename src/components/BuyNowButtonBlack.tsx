import React from "react";
import clsx from "clsx";
import Image from "next/image";

const BuyNowButtonBlack = ({ dark }: { dark?: boolean }) => {
  return (
    <a href="#precios">
      <button
        type="button"
        className={clsx(
          "flex items-center justify-center min-w-[205px] mt-3 px-6 h-14 rounded-full w-full sm:w-fit",
          {
            "text-white bg-foreground": !dark,
            "text-foreground bg-white": dark,
          }
        )}
      >
        <div className="mr-3">
          <Image
            src="/images/moovimiento-white.png" // Ruta relativa desde /public
            alt="Logo"
            width={30}
            height={30}
            priority // Esto evita el lazy load y mejora LCP para logos
          />
        </div>
        <div>
          <div className="text-xs"></div>
          <div className="-mt-1 font-sans text-xl font-semibold">
            Hacer pedido
          </div>
        </div>
      </button>
    </a>
  );
};

export default BuyNowButtonBlack;
