import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import youtube from '../../public/youtubelogo.png'
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa"
import { RxCross2 } from "react-icons/rx";
import { FaVideo } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { IoIosNotificationsOutline } from "react-icons/io";



const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center px-6 py-2 bg-gray-100 shadow-md">
        <div className=" flex justify-between   px-4 py-2 rounded-lg">
          <span className="text-3xl flex justify-between px-2 py-2 cursor-pointer" ><GiHamburgerMenu />
</span>
          <span className="flex justify-between px-2 py-1"><img
          className="h-[32px] w-[55px] cursor-pointer " src={youtube} alt="" /></span>
        </div>
        {/* input search-bar mic */}
       {/* input search-bar mic */}
  <div className="flex items-center gap-2 w-full max-w-2xl">
      {/* Input container */}
      <div className="flex items-center border rounded-l-full px-3 py-2 flex-1 w-[35%]   focus-within:ring-1 focus-within:ring-blue-500">
        {/* Left search icon */}
        <CiSearch size={25} className="text-gray-400 mr-2" />

        {/* Input field */}
        <input
          type="text"
          placeholder="Search..."
          className="flex-1 bg-transparent outline-none text-black h-[20px] "
        />

        {/* Clear button */}
        <button className="text-gray-800 hover:text-black">
          <RxCross2 size={25} />
        </button>
      </div>

      {/* External search button */}
      <button className="p-2 rounded-full bg-[#222] hover:bg-[#333]">
        <CiSearch size={25} className="text-white" />
      </button>

      {/* Mic button */}
      <button className="p-2 rounded-full bg-[#222] hover:bg-[#333]">
        <FaMicrophone size={22} className="text-white" />
      </button>
    </div>
 

        <div className=" flex flex-row items-center gap-4 px-4 py-2 rounded-lg">
      <button className="p-2 rounded-full hover:text-gray-800">
        <FaVideo size={25} />
      </button>

      <button className="p-2 rounded-full  hover:text-gray-800">
       <IoIosNotificationsOutline size={25}/>
      </button>

      <button className="p-2 rounded-full hover:text-gray-800">
       <CgProfile size={25} />
      </button>
    </div>
      </div>
    </>
  );
};

export default Navbar;
