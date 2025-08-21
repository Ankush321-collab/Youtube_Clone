import React from "react";
import { GoHome } from "react-icons/go";
import { SiYoutubekids, SiYoutubemusic, SiYoutubeshorts, SiYoutubestudio } from "react-icons/si";
import { MdOutlineSubscriptions, MdHistory, MdOutlineWatchLater } from "react-icons/md";
import { PiUserSquareThin } from "react-icons/pi";
import { AiOutlineLike } from "react-icons/ai";
import { BiVideo } from "react-icons/bi";
import { FaYoutube } from "react-icons/fa6";

const Sidebar = () => {
  const sidebarMain = [
    { id: 1, name: "Home", icon: <GoHome size={24} /> },
    { id: 2, name: "Shorts", icon: <SiYoutubeshorts size={24} /> },
    { id: 3, name: "Subscription", icon: <MdOutlineSubscriptions size={24} /> },
  ];

  const sidebaritem2 = [
    { id: 4, name: "Your Channel", icon: <PiUserSquareThin size={24} /> },
    { id: 5, name: "History", icon: <MdHistory size={24} /> },
    { id: 6, name: "Playlists", icon: <MdOutlineSubscriptions size={24} /> },
    { id: 7, name: "Your Videos", icon: <BiVideo size={24} /> },
    { id: 8, name: "Watch Later", icon: <MdOutlineWatchLater size={24} /> },
    { id: 9, name: "Liked Videos", icon: <AiOutlineLike size={24} /> },
  ];

  const sidebaritem3 = [
    { id: 10, name: "Youtube Premium", icon: <FaYoutube size={24} /> },
    { id: 11, name: "Youtube Studio", icon: <SiYoutubestudio size={24} /> },
    { id: 12, name: "Youtube Music", icon: <SiYoutubemusic size={24} /> },
    { id: 13, name: "Youtube Kids", icon: <SiYoutubekids size={24} /> },
  ];

  return (
  <div className="w-[35vh] h-[100vh] bg-[#232323] border border-gray-700 px-3 py-2 space-y-2 rounded-lg text-white">
      {/* Main */}
      {sidebarMain.map((item) => (
        <div
          key={item.id}
          className="flex items-center space-x-4 hover:bg-gray-800 cursor-pointer rounded-xl p-2 transition-colors duration-200"
          onClick={() => alert(item.name + ' clicked!')}
        >
          {item.icon}
          <span className="text-lg font-medium text-white">{item.name}</span>
        </div>
      ))}

      <hr className="my-2" />

      {/* Section 2 */}
      {sidebaritem2.map((item) => (
        <div
          key={item.id}
          className="flex items-center space-x-4 hover:bg-gray-300 cursor-pointer rounded-xl p-2 transition-colors duration-200"
          onClick={() => alert(item.name + ' clicked!')}
        >
          {item.icon}
          <span className="text-lg font-medium">{item.name}</span>
        </div>
      ))}

      <hr className="my-2" />

      {/* Section 3 */}
      {sidebaritem3.map((item) => (
        <div
          key={item.id}
          className="flex items-center space-x-4 hover:bg-gray-300 cursor-pointer rounded-xl p-2 transition-colors duration-200"
          onClick={() => alert(item.name + ' clicked!')}
        >
          {item.icon}
          <span className="text-lg font-medium">{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
