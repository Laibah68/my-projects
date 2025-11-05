import React from 'react';
import homeReportImg from '../../assets/home.png';

const HomeReportSection = () => {
  return (
    <div className="bg-white p-[1rem] max-[600px]:p-[0.5rem] font-['Noto_Sans']">
      <div className="flex flex-wrap justify-between relative bg-[#545844] p-[3rem] rounded-[8px] max-[1024px]:flex-col max-[1024px]:p-[2rem]">

        <div className="flex-[0_0_35%] max-w-[500px] text-white flex items-center justify-start p-[2rem] z-[2] max-[1024px]:flex-[1_1_100%] max-[1024px]:ml-0">
          <div className="flex flex-col gap-[0.2rem] max-[600px]:gap-[0.5rem] max-[600px]:items-start">
            <p className="text-[0.5rem] max-[600px]:text-[0.9rem] font-normal m-0 p-0">
              It’s here! Check out the new
            </p>
            <div className="text-[2rem] max-[1024px]:text-[1.6rem] max-[600px]:text-[1.3rem] font-bold leading-[1.2] flex flex-col gap-[0.2rem] max-[600px]:flex-row">
              <span>Life at</span>
              <span>Home</span>
              <span>Report</span>
            </div>
          </div>
        </div>

        <div className="flex-[1_1_65%] relative flex items-center justify-center -ml-[8%] z-[1] max-[1024px]:flex-[1_1_100%] max-[1024px]:ml-0">
          <div className="relative w-full aspect-[16/8] max-[600px]:aspect-[16/12] overflow-hidden rounded-[8px]">
            <img
              src={homeReportImg}
              alt="Life at Home Report"
              className="w-[120%] h-full object-cover object-center transform translate-x-[-3%] rounded-[8px] max-[1024px]:w-full max-[1024px]:translate-x-0 max-[1024px]:object-center max-[600px]:rounded-[6px] shadow-[0_0_10px_rgba(0,0,0,0.1)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeReportSection;
