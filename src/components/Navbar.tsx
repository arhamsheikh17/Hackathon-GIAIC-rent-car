import React from 'react'

// import { FaHeart, FaBell, FaSearch, FaCog } from 'react-icons/fa';
// import { VscSettings } from "react-icons/vsc";
import Image from 'next/image';
import Link from 'next/link';
const Navbar = () => {
  return (
  //   <div>
  //       <div className='w-[full] h-[124px]' >
  //           <p className="w-[148px] h-[44px] text-[#3563E9] font-plus-jakarta font-bold text-[32px] leading-[48px] tracking-[-0.03em] absolute left-[60px] top-[40px]">
  // MORENT
  //           </p>
  //           <div className="w-[492px] h-[44px] rounded-[70px] absolute mt-[40px] ml-[272px] border-[1px] ">
  //            <div className="w-[149px] h-[20px]  text-[14px] font-medium flex justify-center items-center  ">
  //               <p>Search something here</p>  
  //            </div>
  //           </div>
  //       </div>
        
  //   </div>
  


    <header className="bg-white py-4 px-4 md:px-8 shadow-md flex flex-wrap items-center justify-between">
      {/* Logo and Search Bar Container */}
      <div className="flex items-center space-x-4 lg:space-x-20 w-full lg:w-auto">
        {/* Logo */}
        <div className="text-xl md:text-2xl font-bold text-blue-600">MORENT</div>
        
        {/* Search Bar */}
        <div className="relative w-full lg:w-[492px] h-[44px] mt-2 lg:mt-0 flex item-center border border-gray-300 rounded-full justify-between">

     
         <div className='flex item-center gap-5 pl-[20px] pt-[10px] pb-[10px]'>
         <Image
              src="/search-normal.svg"
              alt="search-normal"
              width={24}
              height={24}
            />

         <input
            type="text"
            placeholder="Search something here"
            className="w-full h-full  py-2 px-4 pl-[20px] pr- text-sm  focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{ borderRadius: '70px' }}
          />
           </div>
     
         <div className='flex justify-center overflow-hidden mr-[20px] mt-[10px] mb-[10px] '>
          <Image
              src="/filter.svg"
              alt="filter"
              width={24}
              height={24}
              
            />
         </div>
       </div>
         {/* <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
            <FaSearch />
          </div>
          <div className="absolute text-2xl right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
            <VscSettings />
          </div>
        </div>
      </div> */}

     
        
        <Link href="/">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center overflow-hidden cursor-pointer">
            <Image src="/Like.svg" alt="Like" width={40} height={40} />
          </div>
        </Link>

        <Link href="/">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center overflow-hidden cursor-pointer">
            <Image src="/Notification.svg" alt="Notification" width={40} height={40} />
          </div>
        </Link>

        <Link href="/">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center overflow-hidden cursor-pointer">
            <Image src="/Settings.svg" alt="Settings" width={40} height={40} />
          </div>
        </Link>

        {/* Profile Picture */}
        <Link href="/">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center overflow-hidden cursor-pointer">
            <Image src="/Profil.svg" alt="Profile" width={40} height={40} />
          </div>
        </Link>
      </div>
    </header>
  );
};



export default Navbar