import React, { useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import film from '../../assets/film.png';
import spin from '../../assets/spin.png';
import hero from '../../assets/hero.mp4';

const DualContainer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(prev => !prev);
  };

  return (
    <div className="bg-white px-[1rem] py-[2rem] sm:px-[1rem] sm:py-[1.5rem] max-sm:px-[0.5rem] max-sm:py-[1rem] flex flex-wrap justify-center items-stretch gap-[2rem] font-['Noto_Sans']">

      {/* Left Box */}
      <div className="flex-[1_1_300px] max-w-[500px] flex flex-col items-center text-center w-full sm:max-w-full">
        <div className="relative w-full h-full overflow-hidden rounded-[10px] shadow-[0_0_5px_rgba(0,0,0,0.1)] aspect-[16/13] sm:aspect-[16/12] max-sm:aspect-[16/14]">
          {isPlaying ? (
            <video
              src={hero}
              className="w-full h-full object-cover block rounded-[10px]"
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <img
              src={film}
              alt="Left Visual"
              className="w-full h-full object-cover block rounded-[10px]"
            />
          )}
          <div className="absolute bottom-[0.1rem] left-[10px] right-[10px] max-sm:bottom-[8px] max-sm:left-[8px] max-sm:right-[8px] max-sm:p-[0.3rem] text-black text-left ">
            <p className="text-[0.5rem] sm:text-[0.75rem] max-sm:text-[0.7rem] font-normal m-0 p-0">Explore our first ever</p>
            <div className="flex items-center justify-between">
              <h2 className="text-[2rem] sm:text-[1.4rem] max-sm:text-[2rem] font-bold m-0 leading-[1.2] whitespace-nowrap">IKEA Yearbook!</h2>
              <button
                className="bg-black text-white border-none rounded-full w-[40px] h-[40px] text-[1.2rem] flex items-center justify-center cursor-pointer sm:w-[32px] sm:h-[32px] sm:text-[0.9rem] max-sm:w-[28px] max-sm:h-[28px] max-sm:text-[0.8rem]"
                onClick={togglePlay}
              >
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Box */}
      <div className="flex-[1_1_300px] max-w-[500px] flex flex-col items-center text-center w-full sm:max-w-full">
        <div className="relative w-full h-full overflow-hidden rounded-[10px] shadow-[0_0_5px_rgba(0,0,0,0.1)] aspect-[16/13] sm:aspect-[16/12] max-sm:aspect-[16/14]">
          <img
            src={spin}
            alt="Right Visual"
            className="w-full h-full object-cover block rounded-[10px]"
          />
          <div className="absolute bottom-[0.1rem] left-[10px] right-[10px] max-sm:bottom-[8px] max-sm:left-[8px] max-sm:right-[8px] max-sm:p-[0.3rem] text-white text-left ">
            <p className="text-[0.5rem] sm:text-[0.75rem] max-sm:text-[0.7rem] font-normal m-0 p-0">The VAXELBRUK collection</p>
            <h2 className="text-[2rem] sm:text-[2rem] max-sm:text-[1.2rem] font-bold m-0 leading-[1.2] flex flex-col sm:flex-col max-sm:flex-row gap-[0.2rem] whitespace-nowrap">
              <span className="block max-sm:inline">From uniforms to fresh&nbsp;</span>
              <span className="block max-sm:inline">designs</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DualContainer;
