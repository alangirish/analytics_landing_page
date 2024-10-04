import React from "react";

function FeaturesCard({ img, title, text1, text2, text3}) {
  return (
    <div className="flex-col">
      <div className="items-center justify-center flex pt-2">
        <div className="border-2 border-gray-100 rounded-lg text-grey p-2">
          <img src={img} alt="" />
        </div>
      </div>
      <div className="flex items-center justify-center pt-2">
        <h1 className="font-medium text-lg">{title}</h1>
      </div>
      <div className="flex items-center justify-center pt-2">
        <p className="text-grey font-light text-sm text-center">
          {text1}<br/>{text2}<br/>{text3}
        </p>
      </div>
    </div>
  );
}

export default FeaturesCard;
