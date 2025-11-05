import { useState, useEffect } from 'react';
import img1 from '../../assets/metal.png';
import img2 from '../../assets/plastic.png';
import img3 from '../../assets/clothe.png';

const cardsData = [
  { img: img1, small: 'Designed by Iina Vuorivirta', big: 'SYMFONISK lamp' },
  { img: img2, small: 'Designed by Mikael Axelsson', big: 'BURVIK table' },
  { img: img3, small: 'Designed by Akanksha Deo', big: 'BRONDEN rug' },
];

export default function Section16() {
  const [startIndex, setStartIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visibleCount = isMobile ? 2 : 3;

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (startIndex + i) % cardsData.length;
      cards.push(cardsData[index]);
    }
    return cards;
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
  };

  const visibleCards = getVisibleCards();

  return (
    <div className="flex flex-wrap justify-between bg-white p-[2rem] font-['Noto_Sans'] max-[768px]:flex-col max-[768px]:p-[1rem]">
      {/* Left Text */}
      <div className="flex-1 min-w-[300px] flex flex-col justify-center items-start text-left mb-0 max-[768px]:mb-[1rem]">
        <h1 className="text-[2rem] font-bold leading-[1.2] flex flex-col items-start text-left max-[768px]:text-[1.2rem] max-[768px]:flex-row max-[768px]:gap-[0.3rem] max-[768px]:whitespace-nowrap">
          <span>The stories</span>
          <span>behind the</span>
          <span>products</span>
        </h1>
        <p className="text-[1rem] font-normal m-0 p-0 mt-[0.5rem] max-[768px]:mt-[0.5rem]">
          Democratic design dispatches straight from the heart of Älmhult.
        </p>
      </div>

      {/* Card Section */}
      <div className="flex flex-nowrap gap-[1rem] flex-[2] overflow-hidden relative max-[768px]:overflow-x-auto max-[768px]:w-full">
        {visibleCards.map((card, index) => {
          const isLastVisible = index === visibleCards.length - 1;
          return (
            <div
              key={index}
              
              className="flex flex-col items-center relative transition-all duration-400 ease-in-out bg-[#f5f5f5] rounded-[1rem] p-[1rem] animate-slideFade "
            >
              <img
                src={card.img}
                alt={card.big}
                className="w-full h-auto object-cover rounded-[0.5rem]"
              />
              <div className="flex flex-col items-start text-left w-full mt-[0.5rem]">
                <p className="text-[0.8rem] font-normal m-0 p-0">{card.small}</p>
                <h2 className="text-[1.2rem] font-bold m-0 p-0 pb-[1rem]">{card.big}</h2>
              </div>
              {isLastVisible && (
                <button
                  className="absolute left-[10.8rem] top-[35%] transform -translate-y-1/2 bg-black text-white 
                  border-none px-[0.5rem] py-[0.3rem] cursor-pointer z-[2] rounded-full 
                  max-[768px]:left-auto max-[768px]:right-[0.5rem] max-[768px]:top-[40%]"
                  onClick={handleNext}
                >
                  →
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
