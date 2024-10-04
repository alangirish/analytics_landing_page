import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import TitleTextCard from "./TitleTextCard";

function Hero() {
  return (
    <div className="flex flex-col items-center p-4 space-y-7">
      <div className="flex items-center justify-center pt-5">
        <div className="border-2 p-1 border-lightPurple text-mediumPurple text-xs font-light rounded-full flex items-center space-x-2 bg-lightPurple bg-opacity-60">
          <button className="border-2 border-lightPurple p-1 rounded-full text-xs md:text-base bg-white">
            New Feature
          </button>
          <button className="text-xs md:text-base">
            Check out the Team Dashboard →
          </button>
        </div>
      </div>
      <TitleTextCard
        title={"Beautiful analytics to grow smarter"}
        text1={
          "Powerful, self-serve product and growth analytics to help you convert, engage,"
        }
        text2={"and retain more users. Trusted by over 4,000 startups."}
        size={"text-3xl md:text-5xl text-center"}
      />

      <div className="flex flex-col-reverse w-full md:w-auto md:flex-row items-center justify-center md:space-x-6">
        <button className="border-gray-300 border-2 p-2 rounded-lg text-grey w-full h-12 md:w-32 md:h-16 transition duration-500 ease-in-out hover:font-medium mb-4 md:mb-0">
          <div className="flex items-center justify-center space-x-2">
            <PlayCircleFilledWhiteOutlinedIcon />
            <span>Demo</span>
          </div>
        </button>
        <button className="rounded-lg p-2 bg-purple text-white w-full h-12 md:w-32 md:h-16 hover:bg-mediumPurple transition duration-500 ease-in-out mb-4 md:mb-0">
          Sign Up
        </button>
      </div>
      <div className="flex items-center justify-center w-full">
        <div className="rounded-xl w-full overflow-hidden">
          <img src="dashboard2.jpeg" alt="Dashboard" className="w-full hidden md:block" />
          <img src="ipad.png" alt="iPad view" className="w-full md:hidden" />
        </div>
      </div>
      <div className="flex items-center justify-center pt-9">
        <div className="flex flex-col items-center space-y-9">
          <div>
            <p className="text-center text-grey text-xs md:text-sm">
              Join 4,000+ companies already growing
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-8 items-center justify-items-center">
            <img src="fc1.png" alt="" className="w-full max-w-[120px]" />
            <img src="fc2.png" alt="" className="w-full max-w-[120px]" />
            <img src="fc3.png" alt="" className="w-full max-w-[120px]" />
            <img src="fc4.png" alt="" className="w-full max-w-[120px]" />
            <img src="fc5.png" alt="" className="w-full max-w-[120px]" />
            <img src="fc6.png" alt="" className="w-full max-w-[120px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;