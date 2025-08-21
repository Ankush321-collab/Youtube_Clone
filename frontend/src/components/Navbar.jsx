import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import youtube from '../../public/youtubelogo.png'
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { FaVideo } from "react-icons/fa6";
import profile from '../../public/profile.png'

import { IoIosNotificationsOutline } from "react-icons/io";
import Avatar from "react-avatar";



const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const inputRef = React.useRef();

  const handleInput = (e) => setSearchTerm(e.target.value);
  const handleClear = () => {
    setSearchTerm("");
    inputRef.current?.focus();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim());
    }
  };

  return (
    <>
  <div className="flex justify-between items-center px-6 py-2 bg-[#232323] shadow-md text-white">
        <div className=" flex justify-between   px-4 py-2 rounded-lg">
          <span className="text-3xl flex justify-between px-2 py-2 cursor-pointer" onClick={() => alert('Menu clicked!')}><GiHamburgerMenu />
</span>
          <span className="flex justify-between px-2 py-1"><img
          className="h-[32px] w-[55px] cursor-pointer " src={youtube} alt="YouTube Logo" onClick={() => alert('Logo clicked!')} /></span>
        </div>
        {/* input search-bar mic */}
        <form className="flex items-center gap-2 w-full max-w-2xl" onSubmit={handleSubmit}>
      <div className="flex items-center border border-gray-700 rounded-l-full px-3 py-2 flex-1 w-[35%] focus-within:ring-1 focus-within:ring-blue-500 bg-[#181818]">
            <CiSearch size={25} className="text-gray-400 mr-2" />
            <input
              ref={inputRef}
              type="text"
              value={searchTerm}
              onChange={handleInput}
              placeholder="Search..."
              className="flex-1 bg-transparent outline-none text-white h-[20px] placeholder-gray-400"
            />
            <button type="button" className="text-gray-800 hover:text-black" onClick={handleClear}>
              <RxCross2 size={25} />
            </button>
          </div>
          <button
            type="submit"
            className="px-4 py-2 border-[1px] border-gray-700 bg-[#181818] text-white rounded-r-full"
          >
            <CiSearch size={"24px"} />
          </button>
          <IoMdMic
            size={"42px"}
            className="ml-3 border border-gray-700 rounded-full p-2 cursor-pointer hover:bg-gray-800 duration-200 text-white bg-[#181818]"
          />
        </form>

        <div className=" flex flex-row items-center gap-4 px-4 py-2 rounded-lg">
      <button className="p-2 rounded-full hover:text-gray-800" onClick={() => alert('Video upload clicked!')}>
        <FaVideo size={25} />
      </button>

      <button className="p-2 rounded-full  hover:text-gray-800" onClick={() => alert('Notifications clicked!')}>
       <IoIosNotificationsOutline size={25}/>
      </button>

      <button className="p-2 rounded-full hover:text-gray-800" onClick={() => alert('Profile clicked!')}>
        <Avatar src={profile} size="32" round={true} />
      </button>
    </div>
      </div>
    </>
  );
};

export default Navbar;
