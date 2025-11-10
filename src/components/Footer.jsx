import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import navigateToWhatsapp from '../helpers/navigateToWhatsapp';
import { useLanguage } from '../context/ContextHooks';
import FiveStarLogo from '../assets/FiveStarLogo.png'

function IconLinks({ className }) {
  return (
    <div className={className}>
      <a href={`https://www.facebook.com/profile.php?id=${import.meta.env.VITE_FACEBOOK_ID}`} target='_blank' className='cursor-pointer hover:text-[#1877F2] transition-all duration-100' title='Facebook'>
        <FontAwesomeIcon icon={faFacebook} size='2xl' />
      </a>
      <a href={`https://mail.google.com/mail/u/0/#inbox?compose=${import.meta.env.VITE_EMAIL_ID}`} target='_blank' className='cursor-pointer hover:text-[#1877F2] transition-all duration-100' title='Email'>
        <FontAwesomeIcon icon={faEnvelope} size='2xl' />
      </a>
      <a href="" target='_blank' className='cursor-pointer hover:text-[#25D366] transition-all duration-100' title='Whatsapp' onClick={navigateToWhatsapp}>
        <FontAwesomeIcon icon={faWhatsapp} size='2xl' />
      </a>
    </div>
  );
}

function FooterContent({ className, children }) {
  const { language } = useLanguage()
  return (
    <footer className={`${className} ${language.arabic && ' ' + 'flex-row-reverse'}`}>
      {children}
    </footer>
  )
}

export default function Footer() {
  const { language } = useLanguage()
  const arabicStyle = {
    textAlign: language.arabic ? 'right' : 'left',
    direction: language.arabic ? 'rtl' : 'ltr'
  }
  return (
    <div className='flex justify-center items-center bg-black text-white h-auto z-50'>
      <FooterContent className="footer sm:flex bg-neutral text-neutral-content p-10">
        <aside className='w-full'>
          <img src={FiveStarLogo} className={`w-36 mb-2 ${language.arabic && 'justify-self-end'}`}/>
          <p className={`${language.arabic && 'justify-self-end'}`} style={arabicStyle}>
            FIVE STAR DOCUMENT CLEARANCE.
            <br />
            {language.arabic
              ? 'تخليص جمركي موثوق في البحرين منذ عام 2024'
              : 'Reliable Custom Clearance in Bahrain since 2024'
            }
          </p>
        </aside>
        <nav className='w-full'>
          <h6 className={`footer-title ${language.arabic && 'justify-self-end text-[16px]'}`}>
            { language.arabic ? 'اجتماعي' : 'Social'}
          </h6>
          <div className={`grid grid-flow-col gap-4 ${language.arabic && 'justify-self-end'}`}>
            <IconLinks className={`flex gap-4 text-neutral-200 ${language.arabic && 'flex flex-row-reverse'}`}/>
          </div>
        </nav>
      </FooterContent>
    </div>
  );
}