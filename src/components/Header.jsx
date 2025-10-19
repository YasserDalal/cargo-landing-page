import { NavLink } from "react-router-dom";
import FiveStarLogo from "../assets/FiveStarLogo.png";
import FiveStarLogoSingle from "../assets/FiveStarLogoSingle.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-regular-svg-icons";
import ServiceIconWhite from "../assets/regular-icons/ServiceIcon.png";
import ServiceIconBlue from "../assets/regular-icons/BoxIcon.png";
import PhoneIconWhite from "../assets/regular-icons/PhoneIconWhite.png";
import PhoneIconBlue from "../assets/regular-icons/PhoneIcon.png";
import useDefaultRoute from '../hooks/useDefaultRoute';
import useScrollDown from '../hooks/useScrollDown';

const handleActive = ({ isActive }) => {
  return isActive
    ? "text-[#80ACFA] p-2 min-[418px]:px-4 flex items-center gap-x-2"
    : "text-white p-2 min-[418px]:px-4 hover:text-[#b5d0ff] transition-all duration-100 flex items-center gap-x-2";
};

const navLinks = [
  {
    icon: faHouse,
    alt: "Home Icon",
    title: "Home",
    to: "home",
  },
  {
    imgSrcWhite: ServiceIconWhite,
    imgSrcBlue: ServiceIconBlue,
    alt: "Services Icon",
    title: "Services",
    to: "services",
  },
  {
    imgSrcWhite: PhoneIconWhite,
    imgSrcBlue: PhoneIconBlue,
    alt: "Phone Icon",
    title: "Contacts",
    to: "contacts",
  },
];

function NavButtons({ icon, alt, imgSrcWhite, imgSrcBlue, to, title }) {
  const defaultRoute = useDefaultRoute();

  const handleFocus = () => {
    document.activeElement.blur();
  };
  return (
    <NavLink to={to} className={handleActive} onClick={handleFocus}>
      {({ isActive }) => (
        <div
          className={`flex items-center space-x-2 ${
            isActive ? "text-blue-400" : "text-[#F4F4F4]"
          }`}
        >
          {imgSrcWhite || imgSrcBlue ? (
            <img
              src={isActive ? imgSrcBlue : imgSrcWhite}
              alt={alt}
              className='ml-[3px] w-[14px]'
            />
          ) : (
            <FontAwesomeIcon
              icon={icon}
              size='lg'
              style={{ color: isActive || defaultRoute ? "#80ACFA" : "#F4F4F4" }}
            />
          )}
          <span
            className={defaultRoute && title === "Home" ? "text-[#80ACFA]" : undefined}
          >
            {title}
          </span>
        </div>
      )}
    </NavLink>
  );
}

function NavMenu({ className }) {
  return (
    <div className={className}>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div
            tabIndex={0}
            role='button'
            className='btn btn-ghost btn-circle'
            title='Menu'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              {" "}
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h7'
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow border-2 border-[#323747]'
          >
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavButtons
                  icon={link.icon}
                  alt={link.alt}
                  imgSrcWhite={link.imgSrcWhite}
                  imgSrcBlue={link.imgSrcBlue}
                  title={link.title}
                  to={link.to}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function MainLogo() {
  return (
    <>
      <div className='min-w-10 max-w-11 w-full min-[680px]:hidden'>
        <img src={FiveStarLogoSingle} alt='five star logo' typeof='image' />
      </div>
      <div className='max-w-44 max-[680px]:hidden'>
        <img src={FiveStarLogo} alt='five star logo' typeof='image' />
      </div>
    </>
  );
}

function Navigations({ className }) {
  const defaultRoute = useDefaultRoute();

  return (
    <nav className={className}>
      <NavLink className={handleActive} to='home'>
        <span className={defaultRoute ? "text-[#80ACFA]" : undefined}>Home</span>
      </NavLink>
      <NavLink className={handleActive} to='services'>
        <span>Services</span>
      </NavLink>
      <NavLink className={handleActive} to='contacts'>
        <span>Contacts</span>
      </NavLink>
    </nav>
  );
}

function ReachOuts({ className }) {
  return (
    <div className={className}>
      <button className='py-2 px-4 cursor-pointer bg-transparent hover:bg-[#1a1a1a] transition-all duration-100 border border-[#323747] rounded-md flex items-center gap-x-2 text-nowrap'>
        <FontAwesomeIcon icon={faEnvelope} size='md' />
        <span className='max-[800px]:hidden'>Contact Us</span>
      </button>
      <button className='py-2 pr-4 pl-3 cursor-pointer bg-[#065ae9] hover:bg-[#317dff] transition-all duration-100 rounded-md flex items-center gap-x-2 text-nowrap '>
        <FontAwesomeIcon icon={faPhone} size='md' />
        <span className='max-[529px]:hidden'>Call Us</span>
      </button>
    </div>
  );
}

export default function Header() {
  const isScrollDown = useScrollDown(0.1);
  return (
    <div className={`flex justify-between items-center bg-black ${isScrollDown ? '-translate-y-20' : ''} transition-all duration-200 text-white py-2 fixed w-full z-50 max-[529px]:px-2 px-6`}>
      <NavMenu className='min-[400px]:hidden' />
      <MainLogo />
      <Navigations className='flex max-[529px]:gap-0 gap-3 max-[400px]:hidden' />
      <ReachOuts className='flex gap-2' />
    </div>
  );
}
