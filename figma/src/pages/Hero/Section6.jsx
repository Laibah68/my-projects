import React, { useState } from 'react';
import lady from '../../assets/lady.png';
import kid from '../../assets/kid.png';
import hero from '../../assets/hero.mp4';

const MediaLayout = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayback = () => {
    setIsPlaying(prev => !prev);
  };

  return (
    <div className="bg-white p-[1rem] max-[600px]:p-[0.5rem] font-['Noto_Sans']">
      <div className="flex flex-wrap flex-row gap-[2rem] max-[1024px]:gap-[1.5rem] max-[600px]:flex-col max-[600px]:gap-[1rem]">

        {/* Left Section */}
        <div className="flex-[1_1_45%] relative flex flex-col justify-end">
          <div className="w-full aspect-[16/13] max-[600px]:aspect-[16/12] overflow-hidden rounded-[8px] relative">
            {isPlaying ? (
              <video
                className="w-full h-full object-cover"
                src={hero}
                autoPlay
                loop
                muted
              />
            ) : (
              <img
                className="w-full h-full object-cover"
                src={lady}
                alt="Preview"
              />
            )}
            <div className="absolute bottom-[0.2rem] left-[0.5rem] right-[1rem] z-[2] p-[0.5rem] max-[600px]:p-[0.4rem] rounded-[6px]">
              <p className="text-[0.5rem] max-[1024px]:text-[0.85rem] max-[600px]:text-[0.8rem] font-normal text-white m-0 p-0">
                Global Refugee Forum 2023
              </p>
              <div className="flex items-center justify-between">
                <h2 className="text-[2rem] max-[1024px]:text-[1.3rem] max-[600px]:text-[1.2rem] font-bold text-white m-0 p-0 whitespace-nowrap leading-[1.2]">
                  Providing opportunities<div>and respect</div>
                </h2>
                <button
                  className="bg-black text-white border-none rounded-full w-[40px] h-[40px] text-[1.2rem] cursor-pointer flex items-center justify-center max-[1024px]:w-[36px] max-[1024px]:h-[36px] max-[1024px]:text-[1rem] max-[600px]:w-[32px] max-[600px]:h-[32px] max-[600px]:text-[0.9rem]"
                  onClick={togglePlayback}
                >
                  {isPlaying ? '⏸' : '▶'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-[1_1_45%] relative flex flex-col justify-end max-[600px]:self-stretch">
          <div className="w-full aspect-[16/13] max-[600px]:aspect-[16/12] overflow-hidden rounded-[8px] relative">
            <img
              className="w-full h-full object-cover"
              src={kid}
              alt="Children's Storage"
            />
            <div className="absolute bottom-[0.2rem] left-[0.5rem] z-[2] p-[0.5rem] max-[600px]:p-[0.4rem] rounded-[6px]">
              <p className="text-[0.5rem] max-[1024px]:text-[0.85rem] max-[600px]:text-[0.8rem] font-normal text-white m-0 p-0">
                IKEA storage school
              </p>
              <h2 className="text-[2rem] max-[1024px]:text-[1.3rem] max-[600px]:text-[1.2rem] font-bold text-white m-0 p-0 leading-[1.2] whitespace-nowrap">
                The ABCs of children's storage
              </h2>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MediaLayout;
