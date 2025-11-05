import React from 'react';
import plant from '../../assets/plant.png';

const ImageOverlay = () => {
  return (
    <div className="bg-white px-[clamp(1rem,2vw,3rem)] py-[clamp(1rem,2vw,3rem)] max-w-[1440px] mx-auto flex justify-center items-center font-['Noto_Sans'] max-[480px]:px-[0.5rem]">
      <div className="relative w-full aspect-[16/7] min-h-[280px] bg-cover bg-center rounded-[12px] overflow-hidden flex items-end">
        <img
          src={plant}
          alt="Decorative"
          className="w-full h-full object-cover block"
        />
        <div className="absolute bottom-[clamp(1rem,2vw,2rem)] left-[clamp(1rem,2vw,2rem)] flex flex-col gap-[0.3rem] text-black text-shadow-custom max-w-[90%] max-[480px]:bottom-[0.75rem] max-[480px]:left-[0.75rem]">
          <p className="text-[0.6rem] max-[480px]:text-[0.75rem] font-normal m-0 p-0">IKEA storage school</p>
          <h2 className="text-[2rem] max-[480px]:text-[1.25rem] font-bold m-0 p-0">Boost a small bedroom</h2>
        </div>
      </div>
    </div>
  );
};

export default ImageOverlay;
