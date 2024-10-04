import React from "react";

function TitleTextCard({ title, text1, text2, size }) {
  return (
    <div className="flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-4 text-center">
        <h1 className={`font-bold ${size} text-black leading-tight`}>
          {title}
        </h1>
        <div>
          <p className="font-light text-grey text-xs md:text-sm leading-relaxed text-center">
            {text1} <br/> {text2}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TitleTextCard;
