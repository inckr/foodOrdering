"use client";
import Search from "../ui/Search";
import { useState } from "react";
import Logo from "../ui/Logo"
import { FaUserAlt, FaSearch  } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";


const Header = () => {
  const [isSearchModal, setIsSearchModal] = useState(false);
  return (
    <div className="h-[5.5rem] bg-secondary">
       <div className="container mx-auto text-white flex justify-between items-center h-full">
      
            <Logo/>
        
        <nav>
          <ul className="flex gap-x-2">
            <li className="px-[0.313rem] py-[0.9rem] uppercase hover:text-primary cursor-pointer transition-all">
              <a href="">Home</a>
            </li>
            <li className="px-[0.313rem] py-[0.9rem] uppercase hover:text-primary cursor-pointer transition-all">
              <a href="">Menu</a>
            </li>
            <li className="px-[0.313rem] py-[0.9rem] uppercase hover:text-primary cursor-pointer transition-all">
              <a href="">About</a>
            </li>
            <li className="px-[0.313rem] py-[0.9rem] uppercase hover:text-primary cursor-pointer transition-all">
              <a href="">Book Table</a>
            </li>
          </ul>
        </nav>
        <div className="flex gap-x-4 items-center">
          <a href="">
          <FaUserAlt className="hover:text-primary transition-all"/>
          </a>
          <a href="">
          <FaCartShopping className="hover:text-primary transition-all"/>
          </a>
          <button onClick={() => setIsSearchModal(true)}>
          <FaSearch className="hover:text-primary transition-all"/>
          </button>
          <a href="">
            <button className="btn-primary">
              Order Online
            </button>
          </a>
        </div>
       </div>
       <div>
       {isSearchModal &&(
        <Search setIsSearchModal={setIsSearchModal}/>
       ) }
       </div>
   </div>
  )
}

export default Header