import React from 'react';
import livingRoom from '../../assets/livingroom.png';

const LivingRoom = () => {
  return (
    <div className="bg-white px-[1rem] py-[1rem] max-w-[1440px] mx-auto flex justify-center items-center font-['Noto_Sans'] max-[480px]:px-[0.5rem]">
      <div
        className="relative w-full aspect-[16/7] min-h-[280px] bg-cover bg-center rounded-[12px] overflow-hidden flex items-end"
        style={{ backgroundImage: `url(${livingRoom})` }}
      >
        <div className="absolute bottom-[clamp(1rem,2vw,2rem)] left-[clamp(1rem,2vw,2rem)] flex flex-col gap-[0.3rem] text-white text-shadow-custom max-w-[90%] max-[480px]:bottom-[0.75rem] max-[480px]:left-[0.75rem]">
          <p className="font-normal m-0 p-0 text-[clamp(0.5rem,1vw,1rem)] max-[480px]:text-[0.75rem]">
            Cosy celebrations
          </p>
          <p className="font-bold m-0 p-0 text-[clamp(1.5rem,4vw,2.5rem)] max-[480px]:text-[1.25rem]">
            A global gathering
          </p>
        </div>
      </div>
    </div>
  );
};

export default LivingRoom;
