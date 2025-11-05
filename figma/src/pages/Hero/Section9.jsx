import React, { useState } from 'react';
import imageSrc from '../../assets/green.png';
import videoSrc from '../../assets/hero.mp4';

const HeroSplit = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const togglePlay = () => setIsPlaying(prev => !prev);

  return (
    <div className="bg-white p-[1rem] max-[600px]:p-[0.5rem] font-['Noto_Sans']">
      <div className="flex flex-wrap justify-between bg-black p-[3rem] rounded-[8px] relative max-[1024px]:flex-col max-[1024px]:p-[2rem]">

        {/* Left Section */}
        <div className="flex-[0_0_45%] max-w-[500px] text-white flex items-center justify-start p-[2rem] z-[2]">
          <div className="flex flex-col gap-[0.2rem] max-[600px]:gap-[0.5rem] max-[600px]:items-start">
            <p className="text-[0.5rem] max-[600px]:text-[0.9rem] font-normal m-0 p-0">The XCRA Foundation</p>
            <div className="text-[2rem] max-[1024px]:text-[1.6rem] max-[600px]:text-[1.3rem] font-bold leading-[1.2] flex flex-col max-[1024px]:flex-row max-[1024px]:gap-[0.5rem] max-[600px]:flex-wrap max-[600px]:gap-[0.3rem]">
              <span>Reaching goals,</span>
              <span>Together</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-[1_1_60%] relative flex items-center justify-center -ml-[8%] z-[1] max-[1024px]:ml-0">
          <div className="relative w-full aspect-[16/8] max-[600px]:aspect-[16/12] overflow-hidden rounded-[8px]">
            {isPlaying ? (
              <video
                className="w-[100%] h-full object-cover object-center transform max-[1024px]:w-full max-[1024px]:translate-x-0"
                src={videoSrc}
                autoPlay
                loop
                muted
              />
            ) : (
              <img
                className="w-[100%] h-full object-cover object-center transform max-[1024px]:w-full max-[1024px]:translate-x-0"
                src={imageSrc}
                alt="Preview"
              />
            )}
            <button
              className="absolute bottom-[0.5rem] right-[0.5rem] bg-black text-white border-none rounded-full w-[40px] h-[40px] text-[1.2rem] cursor-pointer z-[3] max-[1024px]:w-[36px] max-[1024px]:h-[36px] max-[1024px]:text-[1rem] max-[600px]:w-[32px] max-[600px]:h-[32px] max-[600px]:text-[0.9rem] max-[600px]:bottom-[0.4rem] max-[600px]:right-[0.4rem]"
              onClick={togglePlay}
            >
              {isPlaying ? '⏸' : '▶'}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroSplit;
