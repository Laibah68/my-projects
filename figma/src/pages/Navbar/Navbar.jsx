import React, { useState } from "react";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white font-sans">
      <div className="max-w-[1200px] mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Left side: logo + links */}
        <div className="flex items-center gap-10">
          <img src={logo} alt="IKEA Logo" className="h-10" />

          <nav className="hidden md:flex items-center gap-7">
            <a href="#" className="text-[#111] font-semibold text-[16px] hover:opacity-70">Stories</a>
            <a href="#" className="text-[#111] font-semibold text-[16px] hover:opacity-70">Jobs</a>
            <a href="#" className="text-[#111] font-semibold text-[16px] hover:opacity-70">Newsroom</a>
            <a href="#" className="text-[#111] font-semibold text-[16px] hover:opacity-70">Our business</a>
          </nav>
        </div>

        {/* Hamburger (only for mobile) */}
        <button
          className="flex md:hidden flex-col gap-1 bg-transparent border-none cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className="w-[22px] h-[2px] bg-[#111]"></span>
          <span className="w-[22px] h-[2px] bg-[#111]"></span>
          <span className="w-[22px] h-[2px] bg-[#111]"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center gap-6 z-[100]">
          <button
            className="absolute top-5 right-5 bg-transparent border-none text-[24px] cursor-pointer"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>
          <a href="#" onClick={() => setOpen(false)} className="text-[#111] text-[20px] font-semibold">Stories</a>
          <a href="#" onClick={() => setOpen(false)} className="text-[#111] text-[20px] font-semibold">Jobs</a>
          <a href="#" onClick={() => setOpen(false)} className="text-[#111] text-[20px] font-semibold">Newsroom</a>
          <a href="#" onClick={() => setOpen(false)} className="text-[#111] text-[20px] font-semibold">Our business</a>
        </div>
      )}
    </header>
  );
}
