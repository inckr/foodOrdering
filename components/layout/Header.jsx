import Logo from "../ui/Logo"
import { FaUserAlt, FaSearch  } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="h-[5.5rem] bg-secondary h-full">
       <div className="container mx-auto text-white flex justify-between ">
      
            <Logo/>
        
        <nav className="h-full">
          <ul className="flex gap-x-2">
            <li className="px-[0.313rem] py-[0.9rem] uppercase hover:text-primary cursor-pointer">
              <a href="">Home</a>
            </li>
            <li className="px-[0.313rem] py-[0.9rem] uppercase hover:text-primary cursor-pointer">
              <a href="">Menu</a>
            </li>
            <li className="px-[0.313rem] py-[0.9rem] uppercase hover:text-primary cursor-pointer">
              <a href="">About</a>
            </li>
            <li className="px-[0.313rem] py-[0.9rem] uppercase hover:text-primary cursor-pointer">
              <a href="">Book Table</a>
            </li>
          </ul>
        </nav>
        <div className="flex gap-x-4 items-center">
          <a href="">
          <FaUserAlt />
          </a>
          <a href="">
          <FaCartShopping />
          </a>
          <a href="">
          <FaSearch />
          </a>
          <a href="">
            <button className="btn-primary">
              Order Online
            </button>
          </a>
        </div>
       </div>
    </div>
  )
}

export default Header