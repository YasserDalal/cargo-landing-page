import { NavLink } from "react-router-dom";
import FiveStarLogo from "../assets/FiveStarLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { useHeaderProvider } from "../context/ContextHooks";
import openGmail from '../helpers/openGmail'
import navigateToWhatsapp from '../helpers/navigateToWhatsapp'
import { useLanguage } from '../context/ContextHooks';

function NavButtons({ icon, alt, imgSrcWhite, imgSrcBlue, to, title }) {
  const { handleActive, handleFocus, defaultRoute } = useHeaderProvider()
  const { language } = useLanguage();
  return (
    <NavLink to={to} className={handleActive} onClick={handleFocus}>
      {({ isActive }) => (
        <div
          className={`flex items-center gap-2 text-[16px] ${
            isActive ? "text-blue-400" : "text-[#F4F4F4]"
          } ${language.arabic && 'w-full flex-row-reverse text-right'}`}
        >
          {imgSrcWhite || imgSrcBlue ? (
            <img
              src={isActive ? imgSrcBlue : imgSrcWhite}
              alt={alt}
              className='w-[18px] mr-[3px] ml-[3px]'
            />
          ) : (
            <FontAwesomeIcon
              icon={icon}
              size='lg'
              style={{ color: isActive || defaultRoute ? "#80ACFA" : "#F4F4F4" }}
            />
          )}
          <span
            className={`text-lg ${defaultRoute && title === "Home" ? "text-[#80ACFA]" : undefined}`}
          >
            {title}
          </span>
        </div>
      )}
    </NavLink>
  );
}

function DropdownMenu({ children }) {
  const { isScrollDown, handleFocus } = useHeaderProvider();
  const { language } = useLanguage();
  return (
    <ul
      tabIndex={0}
      className={`${language.arabic && 'absolute right-0'} menu dropdown-content menu-sm bg-base-100 rounded-box z-1 mt-3 w-72 p-2 text-xl shadow border-2 border-[#323747]`}
      onBlur={isScrollDown ? handleFocus() : undefined}
    >
      {children}
    </ul>
  )
}

function NavMenu({ className }) {
  const { navLinks } = useHeaderProvider();
  return (
    <div className={className}>
      <div className='navbar-start'>
        <div className='dropdown relative'>
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
          <DropdownMenu
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
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}

function MainLogo({ className }) {
  const { handleLogoClick } = useHeaderProvider();
  return (
    <>
      <div className={className}>
        <img src={FiveStarLogo} alt='five star logo' typeof='image' onClick={handleLogoClick} className='cursor-pointer'/>
      </div>
    </>
  );
}

function Navigation() {
  const { handleActive, defaultRoute } = useHeaderProvider();
  const { language } = useLanguage();
  return (
    <nav className={`flex ${language.arabic ? 'flex-row-reverse mr-auto' : 'ml-auto'} max-[529px]:gap-0 gap-3 max-[950px]:hidden justify-center min-w-[320px]`}>
      <NavLink className={handleActive} to='home'>
        <span className={defaultRoute ? "text-[#80ACFA]" : undefined}>{
          language.arabic ? 'الرئيسية' : 'Home'
        }</span>
      </NavLink>
      <NavLink className={handleActive} to='services'>
        <span>{
          language.arabic ? 'الخدمات' : 'Services'
        }</span>
      </NavLink>
      <NavLink className={handleActive} to='contacts'>
        <span>{
          language.arabic ? 'جهات الاتصال' : 'Contacts'
        }</span>
      </NavLink>
    </nav>
  );
}

function ContactUs() {
  const { language } = useLanguage();
  return (
    <button className='py-2 px-4 cursor-pointer bg-transparent hover:bg-[#1a1a1a] transition-all duration-100 border border-[#323747] rounded-md flex items-center gap-x-2 text-nowrap' onClick={openGmail}>
      <FontAwesomeIcon icon={faEnvelope} size='md' />
      <span className='max-[815px]:hidden'>{ language.english ? 'Contact Us' : language.arabic && 'اتصل بنا'}</span>
    </button>
  );
}

function CallUs() {
  const { language } = useLanguage();
  return (
    <button
      className='py-2 pr-4 pl-3 cursor-pointer bg-[#065ae9] hover:bg-[#317dff] transition-all duration-100 rounded-md flex items-center gap-x-2 text-nowrap '
      onClick={navigateToWhatsapp}
    >
      <FontAwesomeIcon icon={faPhone} size='md' />
      <span className={`${language.arabic ? 'max-[700px]:hidden' : 'max-[529px]:hidden'}`}>{ language.english ? "Call Us" : language.arabic && 'اتصل بنا هاتفيًا'}</span>
    </button>
  );
}

function ReachOuts({ children }) {
  const { language } = useLanguage();
  return (
    <div className={`flex ${language.arabic && 'flex-row-reverse pr-4'} gap-2`}>
      {children}
    </div>
  );
}

function LanguageButton() {
  const { handleLanguage } = useLanguage();
  const { language } = useLanguage();
  return (
    <label className={`swap ${language.arabic ? 'mr-auto' : 'ml-auto'} w-20 h-10`}>
      <input type="checkbox" onClick={handleLanguage} className='px-10 py-5 hover:bg-neutral-700 transition-all duration-200 rounded-full' name='toggle-button' id='button'/>
      <div className='swap-on flex items-center justify-center'>
        <div className="text-center">English</div>
      </div>
      <div className='swap-off flex items-center justify-center'>
        <div className="text-center">العربية</div>
      </div>
    </label>
  )
}

function NavigationContainer({ children }) {
  const { language } = useLanguage();
  return (
    <div className={`flex ${language.arabic ? 'flex-row-reverse' : 'mr-3'} justify-center flex-1 gap-5`}>
      {children}
    </div>
  )
}

function HeaderContainer({ children }) {
  const { isScrollDown } = useHeaderProvider();
  const { language } = useLanguage();
  return (
    <div className={`flex ${language.arabic && 'flex-row-reverse'} justify-between items-center bg-black ${isScrollDown ? '-translate-y-20' : ''} transition-all duration-200 text-white py-2 fixed w-full z-50 max-[529px]:px-2 px-6`}>
      {children}
    </div>
  )
}

export default function Header() {
  return (
    <HeaderContainer>
      <NavMenu className='min-[950px]:hidden' />
      <div className='max-w-[300px] w-full flex justify-center max-[500px]:px-5'>
        <MainLogo className='max-w-36 pr-3 max-[400px]:hidden' />
      </div>
      <NavigationContainer>
        <Navigation />
        <LanguageButton />
      </NavigationContainer>
      <ReachOuts>
        <ContactUs />
        <CallUs />
      </ReachOuts>
    </HeaderContainer>
  );
}
