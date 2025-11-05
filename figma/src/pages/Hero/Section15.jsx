import React from 'react';
import map1 from '../../assets/blue.png';
import map2 from '../../assets/yellow.png';

const Mapping = () => {
  return (
    <div className="bg-white p-[1rem] max-[600px]:p-[0.5rem] font-['Noto_Sans']">
      <div className="flex flex-wrap flex-row gap-[2rem] max-[1024px]:gap-[1.5rem] max-[600px]:flex-col max-[600px]:gap-[1rem]">

        {/* Left Section */}
        <div className="flex-[1_1_45%] relative flex flex-col justify-end">
          <div className="w-full aspect-[16/13] max-[600px]:aspect-[16/12] overflow-hidden rounded-[8px] relative">
            <img
              className="w-full h-full object-cover object-center"
              src={map1}
              alt="Preview"
            />
            <div className="absolute bottom-[0.2rem] left-[0.5rem] right-[0.5rem] z-[2] p-[0.5rem] max-[600px]:p-[0.4rem] text-white">
              <p className="text-[0.5rem] max-[1024px]:text-[0.85rem] max-[600px]:text-[0.8rem] font-normal m-0 p-0">
                IKEA around the world
              </p>
              <div className="flex items-center justify-between gap-[7rem]">
                <h2 className="flex-1 text-[2rem] max-[1024px]:text-[1.3rem] max-[600px]:text-[1.2rem] font-bold m-0 p-0">
                  Big in Japan
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-[1_1_45%] relative flex flex-col justify-end">
          <div className="w-full aspect-[16/13] max-[600px]:aspect-[16/12] overflow-hidden rounded-[8px] relative">
            <img
              className="w-full h-full object-cover object-center"
              src={map2}
              alt="Children's Storage"
            />
            <div className="absolute bottom-[0.2rem] left-[0.5rem] right-[0.5rem] z-[2] p-[0.5rem] max-[600px]:p-[0.4rem] text-black">
              <p className="text-[0.5rem] max-[1024px]:text-[0.85rem] max-[600px]:text-[0.8rem] font-normal m-0 p-0">
                IKEA around the world
              </p>
              <div className="flex items-center justify-between gap-[7rem]">
                <h2 className="flex-1 text-[2rem] max-[1024px]:text-[1.3rem] max-[600px]:text-[1.2rem] font-bold m-0 p-0 text-left">
                  Olá, Portugal!
                </h2>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Mapping;
