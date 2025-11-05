import React, { useState } from 'react';
import vase from '../../assets/vase.png';
import sofa from '../../assets/sofa.png';
import hero from '../../assets/hero.mp4';

const MediaLayout = () => {
  const [isPlayingRight, setIsPlayingRight] = useState(false);
  const toggleRight = () => setIsPlayingRight(prev => !prev);

  return (
    <div className="bg-white p-[1rem] max-[600px]:p-[0.5rem] font-['Noto_Sans']">
      <div className="flex flex-wrap flex-row gap-[2rem] max-[1024px]:gap-[1.5rem] max-[600px]:flex-col max-[600px]:gap-[1rem]">

        {/* Left Section */}
        <div className="flex-[1_1_45%] relative flex flex-col justify-end">
          <div className="w-full aspect-[16/13] max-[600px]:aspect-[16/12] overflow-hidden rounded-[8px] relative">
            <img
              className="w-full h-full object-cover object-center"
              src={vase}
              alt="Preview"
            />
            <div className="absolute bottom-[0.2rem] left-[0.5rem] right-[0.5rem] z-[2] p-[0.5rem] max-[600px]:p-[0.4rem] text-white">
              <p className="text-[0.5rem] max-[1024px]:text-[0.85rem] max-[600px]:text-[0.8rem] font-normal m-0 p-0">
                Warm up your home for the holidays
              </p>
              <div className="flex items-center justify-between gap-[0.5rem]">
                <h2 className="flex-1 text-[2rem] max-[1024px]:text-[1.3rem] max-[600px]:text-[1.2rem] font-bold m-0 p-0">
                  Cosy in the countryside
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-[1_1_45%] relative flex flex-col justify-end max-[600px]:self-stretch">
          <div className="w-full aspect-[16/13] max-[600px]:aspect-[16/12] overflow-hidden rounded-[8px] relative">
            {isPlayingRight ? (
              <video
                className="w-full h-full object-cover object-center"
                src={hero}
                autoPlay
                loop
                muted
              />
            ) : (
              <img
                className="w-full h-full object-cover object-center"
                src={sofa}
                alt="Children's Storage"
              />
            )}
            <div className="absolute bottom-[0.2rem] left-[0.5rem] right-[0.5rem] z-[2] p-[0.5rem] max-[600px]:p-[0.4rem] text-black">
              <p className="text-[0.5rem] max-[1024px]:text-[0.85rem] max-[600px]:text-[0.8rem] font-normal m-0 p-0">
                1980 until today
              </p>
              <div className="flex items-center justify-between gap-[0.5rem]">
                <h2 className="flex-1 text-[2rem] max-[1024px]:text-[1.3rem] max-[600px]:text-[1.2rem] font-bold m-0 p-0 text-left">
                  KLIPPAN through the year
                </h2>
                <button
                  className="bg-black text-white border-none rounded-full w-[40px] h-[40px] text-[1.2rem] cursor-pointer flex items-center justify-center flex-shrink-0 max-[1024px]:w-[36px] max-[1024px]:h-[36px] max-[1024px]:text-[1rem] max-[600px]:w-[32px] max-[600px]:h-[32px] max-[600px]:text-[0.9rem]"
                  onClick={toggleRight}
                >
                  {isPlayingRight ? '⏸' : '▶'}
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MediaLayout;
