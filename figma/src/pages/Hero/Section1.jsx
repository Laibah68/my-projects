import React, { useState, useRef, useEffect } from 'react';
import { FaArrowRight, FaPlay, FaPause } from 'react-icons/fa';
import { FaCaretUp } from 'react-icons/fa6';
import heroImg from '../../assets/1984.png';
import heroVideo from '../../assets/hero.mp4';

const Ikea = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [shopTextIndex, setShopTextIndex] = useState(0);
  const [showDialog, setShowDialog] = useState(false);
  const videoRef = useRef(null);
  const dialogRef = useRef(null);

  const shopTexts = ['Go shopping', 'Explore deals', 'Browse catalog', 'Start your journey'];

  const togglePlay = () => {
    if (videoRef.current) {
      isPlaying ? videoRef.current.pause() : videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const handleArrowClick = () => {
    setShopTextIndex((prev) => (prev + 1) % shopTexts.length);
  };

  const handleCaretClick = () => {
    setShowDialog(!showDialog);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dialogRef.current && !dialogRef.current.contains(e.target)) {
        setShowDialog(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  return (
    <div className="bg-white px-2 sm:px-4 pt-12 sm:pt-20 flex justify-center items-center font-['Noto_Sans']">
      <div className="flex flex-wrap sm:flex-row flex-col gap-4 sm:gap-6 max-w-[1200px] w-full">

        <div className="flex-[2] relative min-h-[200px] sm:min-h-[250px] md:min-h-[300px] flex items-end p-[0.6rem] sm:p-[0.8rem] md:p-4 bg-cover bg-center rounded-[10px] overflow-hidden w-full">
          {!isPlaying && (
            <img
              src={heroImg}
              alt="Hero"
              className="absolute top-0 left-0 w-full h-full object-cover z-0"
            />
          )}
          <video
            ref={videoRef}
            className={`absolute top-0 left-0 w-full h-full object-cover z-0 ${isPlaying ? 'block' : 'hidden'}`}
            src={heroVideo}
            muted
            loop
            playsInline
          />
          <div className="text-black z-[1] w-full">
            <p className=" text-left text-[0.7rem] sm:text-[0.75rem] md:text-[0.9rem] font-normal m-0 p-0">The 1984 IKEA Catalogue</p>
            <div className="flex items-center justify-between gap-2 leading-[0.01rem]">
              <p className="text-[1.2rem] sm:text-[1.4rem] md:text-[2rem] font-bold m-0 pt-4 pb-2">Flashback to 40 years ago</p>
              <button
                className="bg-none border-none text-[0.9rem] sm:text-[1rem] md:text-[1.2rem] cursor-pointer text-black"
                onClick={togglePlay}
              >
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>
            </div>
          </div>
        </div>

        <div className="flex-[1] flex flex-col justify-between bg-[#fdd835] rounded-[12px] min-h-[300px] sm:min-h-auto max-w-auto sm:max-w-full w-full p-4 gap-4">

          <div className="flex flex-row justify-between items-center bg-[#fdd835] rounded-[12px] px-4 py-20 sm:py-6 md:py-24 text-[1.2rem] sm:text-[1.4rem] font-bold text-black">
            <span className="flex-1 text-left">{shopTexts[shopTextIndex]}</span>
            <div
              className="bg-black text-white rounded-full p-[0.5rem] sm:p-[0.6rem] flex items-center justify-center text-[1rem] sm:text-[1.1rem] cursor-pointer ml-2 sm:ml-4"
              onClick={handleArrowClick}
            >
              <FaArrowRight />
            </div>
          </div>

          <div className="bg-[#fdd835] border-t-2 border-white px-4 py-4 sm:py-6 flex justify-between items-center text-[1.2rem] sm:text-[1.1rem] text-black shadow-[0_0_5px_rgba(255,255,255,0.1)]">
            <span>Store: <strong>ikea.us</strong></span>
            <div
              className="text-black rounded-full p-[0.5rem] sm:p-[0.6rem] flex items-center justify-center text-[1rem] sm:text-[1.1rem] cursor-pointer"
              onClick={handleCaretClick}
            >
              <FaCaretUp />
            </div>
          </div>

          {showDialog && (
            <div
              ref={dialogRef}
              draggable
              className="absolute bottom-[2px] right-[25px] bg-white text-black p-4 rounded-[8px] shadow-[0_0_10px_rgba(0,0,0,0.2)] text-[0.9rem] sm:text-[0.95rem] z-10"
            >
              <p><strong>Email:</strong> contact@ikea.us</p>
              <p><strong>Phone:</strong> +1 800 456 7890</p>
              <p><strong>Hours:</strong> Mon–Fri 9am–6pm</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Ikea;
