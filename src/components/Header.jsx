import { NavLink } from "react-router-dom";
import FiveStarLogo from "../assets/FiveStarLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function MainLogo({ className }) {
  return (
    <div className={className}>
      <img src={FiveStarLogo} alt='five star logo' typeof='image' />
    </div>
  );
}

function Navigations({ className }) {
  const handleActive = ({ isActive }) => {
    return isActive
      ? "text-[#80ACFA] p-2 px-4"
      : "text-white p-2 px-4 hover:text-[#b5d0ff] transition-all duration-100";
  };
  return (
    <nav className={className}>
      <NavLink className={handleActive} to='home'>
        Home
      </NavLink>
      <NavLink className={handleActive} to='services'>
        Services
      </NavLink>
      <NavLink className={handleActive} to='contact'>
        Contact
      </NavLink>
    </nav>
  );
}

function ReachOuts({ className }) {
  return (
    <div className={className}>
      <button className='py-2 px-4 bg-transparent hover:bg-[#1a1a1a] transition-all duration-100 border border-[#323747] rounded-md flex items-center gap-x-2 text-nowrap'>
        <FontAwesomeIcon icon={faEnvelope} size='md' />
        <span>Contact Us</span>
      </button>
      <button className='py-2 pr-4 pl-3 bg-[#065ae9] hover:bg-[#317dff] transition-all duration-100 rounded-md flex items-center gap-x-2 text-nowrap'>
        <FontAwesomeIcon icon={faPhone} size='md' />
        <span>Call Us</span>
      </button>
    </div>
  );
}

export default function Header({ className }) {
  return (
    <div className={className}>
      <MainLogo className='w-60 -ml-5' />
      <Navigations className='flex gap-3' />
      <ReachOuts className='flex gap-2 pr-6' />
    </div>
  );
}
