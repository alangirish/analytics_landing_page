import React from "react";

function Testimonial() {
  return (
    <div className="flex flex-col items-center mt-20 p-4 bg-bg">
      <div className="flex items-center justify-center">
        <img src="fc7.png" alt="" className="max-w-full" />
      </div>

      <div className="flex items-center justify-center">
        <h1 className="text-4xl p-6 text-center">
          We've been using Untitled to kick start every new <br />
          project and can't imagine working without it.
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center pt-2">
        <div className="w-16 h-16 rounded-full overflow-hidden bg-grey">
          <img
            src="avatar2.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col items-center justify-center mt-4 text-center">
          <h1 className="font-medium text-sm">Candice Wu</h1>
          <h1 className="text-xs text-grey">Product Manager, Sisyphus</h1>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
