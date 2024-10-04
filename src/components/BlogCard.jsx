import React from "react";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
function BlogCard({img, title, smText, author, date , txt1, txt2, aimg}) {
  return (
    <div className="flex-col w-96 h-[444px]">
      <div className="w-full h-60 ">
        <img src={img} alt="" className="w-full h-full object-cover" />
      </div>
      <div>
        <p className="text-sm text-mediumPurple pt-4 pb-2">{smText}</p>
      </div>
      <div className="flex items-center justify-between">
        <h2 className="font-medium text-xl ">{title}</h2>
        <ArrowOutwardOutlinedIcon />
      </div>
      <div className="pt-2">
        <p className=" font-light text-grey">
          {txt1} <br />
          {txt2}
        </p>
      </div>
      <div className="flex space-x-3 pt-2">
        <div className="w-8 h-8 overflow-hidden rounded-full">
          <img
            src={aimg}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div>
          <p className="text-sm">{author}</p>
          <p className="text-sm  font-light text-grey">{date}</p>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
