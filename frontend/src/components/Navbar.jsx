import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import youtube from '../../public/youtubelogo.png'
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { FaVideo } from "react-icons/fa6";
import profile from '../../public/profile.png'
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiFillHome, AiOutlineClose } from "react-icons/ai";
import { BiMoviePlay } from "react-icons/bi";
import Avatar from "react-avatar";

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const inputRef = React.useRef();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  // Animation variants for Framer Motion
  const mobileMenuVariants = {
    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 300
      }
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 300
      }
    }
  };

  const notificationVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300
      }
    }
  };

  return (
    <>
      {/* Main Navbar */}
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 md:px-6 py-2 backdrop-blur-md transition-all duration-300 ${
          isScrolled 
            ? "bg-black/30 shadow-lg rounded-b-xl" 
            : "bg-black/50"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", damping: 20, stiffness: 200 }}
      >
        {/* Left section - Logo and menu */}
        <div className="flex items-center">
          {/* Hamburger menu (mobile only) */}
          <motion.button 
            whileTap={{ scale: 0.95 }}
            className="md:hidden p-2 mr-2 rounded-full text-white"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <GiHamburgerMenu size={24} />
          </motion.button>
          
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center cursor-pointer"
            onClick={() => window.location.href = "/"}
          >
            <img
              className="h-8 w-auto"
              src={youtube}
              alt="YouTube Logo"
            />
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex ml-8 space-x-6">
            <motion.a 
              href="/"
              className="flex items-center text-white hover:text-blue-400 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AiFillHome size={20} className="mr-1" />
              <span>Home</span>
            </motion.a>
            <motion.a 
              href="/videos"
              className="flex items-center text-white hover:text-blue-400 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <BiMoviePlay size={20} className="mr-1" />
              <span>Videos</span>
            </motion.a>
          </div>
        </div>

        {/* Center section - Search */}
        <form className="hidden md:flex items-center gap-2 w-full max-w-2xl mx-4" onSubmit={handleSubmit}>
          <div className="flex items-center border border-gray-700 rounded-l-full px-4 py-2 flex-1 bg-black/30 focus-within:ring-2 focus-within:ring-blue-500 transition-all">
            <CiSearch size={20} className="text-gray-400 mr-2" />
            <input
              ref={inputRef}
              type="text"
              value={searchTerm}
              onChange={handleInput}
              placeholder="Search..."
              className="flex-1 bg-transparent outline-none text-white placeholder-gray-400"
            />
            {searchTerm && (
              <motion.button 
                type="button" 
                className="text-gray-400 hover:text-white transition-colors"
                onClick={handleClear}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                <RxCross2 size={18} />
              </motion.button>
            )}
          </div>
          <motion.button
            type="submit"
            className="px-5 py-2 border border-gray-700 bg-black/30 text-white rounded-r-full hover:bg-black/50 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <CiSearch size={20} />
          </motion.button>
          <motion.button
            type="button"
            className="ml-2 p-2 border border-gray-700 rounded-full hover:bg-black/50 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <IoMdMic size={24} className="text-white" />
          </motion.button>
        </form>

        {/* Right section - Icons and profile */}
        <div className="flex items-center space-x-4">
          <motion.button 
            className="hidden md:block p-2 rounded-full hover:bg-white/10 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaVideo size={20} className="text-white" />
          </motion.button>

          {/* Notifications with dropdown */}
          <div className="relative">
            <motion.button 
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
              onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <IoIosNotificationsOutline size={24} className="text-white" />
            </motion.button>
            
            <AnimatePresence>
              {isNotificationsOpen && (
                <motion.div
                  variants={notificationVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="absolute right-0 mt-2 w-80 bg-black/70 backdrop-blur-md rounded-xl shadow-lg overflow-hidden border border-white/10"
                >
                  <div className="p-4 border-b border-white/10">
                    <h3 className="text-white font-semibold">Notifications</h3>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-300 text-center">No new notifications</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.button 
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Avatar src={profile} size="32" round={true} />
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Search Bar */}
      <div className="md:hidden fixed top-16 left-0 right-0 z-40 px-4 py-2 bg-black/50 backdrop-blur-md">
        <form className="flex items-center w-full" onSubmit={handleSubmit}>
          <div className="flex items-center border border-gray-700 rounded-l-full px-3 py-2 flex-1 bg-black/30">
            <CiSearch size={20} className="text-gray-400 mr-2" />
            <input
              ref={inputRef}
              type="text"
              value={searchTerm}
              onChange={handleInput}
              placeholder="Search..."
              className="flex-1 bg-transparent outline-none text-white placeholder-gray-400"
            />
            {searchTerm && (
              <button 
                type="button" 
                className="text-gray-400 hover:text-white transition-colors"
                onClick={handleClear}
              >
                <RxCross2 size={18} />
              </button>
            )}
          </div>
          <button
            type="submit"
            className="px-4 py-2 border border-gray-700 bg-black/30 text-white rounded-r-full"
          >
            <CiSearch size={20} />
          </button>
        </form>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              className="fixed inset-0 bg-black/50 z-50 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            <motion.div 
              className="fixed top-0 left-0 bottom-0 w-64 bg-black/80 backdrop-blur-xl z-50 md:hidden rounded-r-2xl shadow-2xl border-r border-white/10"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="p-4 border-b border-white/10 flex justify-between items-center">
                <img
                  className="h-8 w-auto"
                  src={youtube}
                  alt="YouTube Logo"
                />
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors"
                >
                  <AiOutlineClose size={20} className="text-white" />
                </button>
              </div>
              
              <div className="p-4 space-y-4">
                <motion.a 
                  href="/"
                  className="flex items-center text-white p-3 rounded-lg hover:bg-white/10 transition-colors"
                  whileHover={{ x: 10 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <AiFillHome size={24} className="mr-3" />
                  <span className="text-lg">Home</span>
                </motion.a>
                
                <motion.a 
                  href="/videos"
                  className="flex items-center text-white p-3 rounded-lg hover:bg-white/10 transition-colors"
                  whileHover={{ x: 10 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <BiMoviePlay size={24} className="mr-3" />
                  <span className="text-lg">Videos</span>
                </motion.a>
                
                <motion.button 
                  className="flex items-center w-full text-white p-3 rounded-lg hover:bg-white/10 transition-colors"
                  whileHover={{ x: 10 }}
                  onClick={() => {
                    setIsNotificationsOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <IoIosNotificationsOutline size={24} className="mr-3" />
                  <span className="text-lg">Notifications</span>
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Add padding to prevent content from being hidden behind fixed navbar */}
      <div className="h-16 md:h-20"></div>
    </>
  );
};

export default Navbar;