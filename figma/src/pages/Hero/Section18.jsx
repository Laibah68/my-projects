import React from 'react';
import grassy from '../../assets/grassy.png';

const Mountains = () => {
  return (
    <div className="bg-white px-[clamp(0.5rem,2vw,1rem)] py-[clamp(0.5rem,2vw,1rem)] max-w-[1440px] mx-auto flex justify-center font-['Noto_Sans']">
      <div
        className="relative w-full aspect-[16/7] min-h-[280px] bg-cover bg-center rounded-[12px] overflow-hidden flex items-end"
        style={{ backgroundImage: `url(${grassy})` }}
      >
        <div className="absolute bottom-[clamp(1rem,2vw,2rem)] left-[clamp(1rem,2vw,2rem)] flex flex-col gap-[clamp(0.2rem,0.5vw,0.4rem)] max-w-[90%] text-white text-shadow-custom max-[480px]:bottom-[0.75rem] max-[480px]:left-[0.75rem]">
          <p className="font-normal m-0 p-0 text-[clamp(0.5rem,1vw,1rem)] max-[480px]:text-[0.75rem]">
            Making design dreams come true, one project at a time
          </p>
          <p className="font-bold m-0 p-0 text-[clamp(1.5rem,5vw,3rem)] max-[480px]:text-[1.25rem]">
            The extra mile
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mountains;
