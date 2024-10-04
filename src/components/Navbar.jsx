import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  return (
    <nav className="flex flex-row items-center justify-between pt-6 pb-6 border-b-2 border-gray-200">
    
      <div className="flex flex-row space-x-2 items-center justify-center">
        <button className="cursor-default">
          <img src="logo.svg" alt="logo" className="w-8 h-8" />
        </button>
        <h1 className="text-lg font-medium">Untitled UI</h1>
      </div>

      
      <div className="hidden md:flex space-x-5 flex-row items-center justify-center">
        <button className="text-grey text-xs">Home</button>
        <div>
          <button className="text-grey text-xs">
            Product <ExpandMoreIcon />
          </button>
        </div>
        <div>
          <button className="text-grey text-xs">
            Resource <ExpandMoreIcon />
          </button>
        </div>
        <button className="text-grey text-xs">Pricing</button>
      </div>
      <div className="hidden md:flex items-center justify-center ">
        <div className="rounded-full w-8 h-8 overflow-hidden">
          <img src="avatar.png" alt="" />
        </div>
      </div>
      
      <div className="md:hidden p-2">
        <MenuIcon/>
      </div>
    </nav>
  );
}

export default Navbar;
