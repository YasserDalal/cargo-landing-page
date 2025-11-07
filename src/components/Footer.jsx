import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import navigateToWhatsapp from '../helpers/navigateToWhatsapp';
import { useLanguage } from '../context/ContextHooks';

function TextLinks({ className }) {
  const { language } = useLanguage()
  return (
    <div className={className}>
      <span>{language.arabic ? 'روابط سريعة' : 'Quick Links'}</span>
      <span>{language.arabic ? 'الخدمات' : 'Services'}</span>
      <span>{language.arabic ? 'اتصل بنا' : 'Contact Us'}</span>
    </div>
  );
}

function Watermark({ className }) {
  const { language } = useLanguage()
  return (
    <span className={className}>
      {language.arabic ? 'حقوق الطبع والنشر © 2023 فايف ستار لتخليص الشحنات. كل الحقوق محفوظة.' : 'Copyright © 2023 FiveStar Cargo Clearance. All rights reserved.'}
    </span>
  );
}

function IconLinks({ className }) {
  return (
    <div className={className}>
      <a href={`https://www.facebook.com/profile.php?id=${import.meta.env.VITE_FACEBOOK_ID}`} target='_blank' className='cursor-pointer hover:text-[#1877F2] transition-all duration-100' title='Facebook'>
        <FontAwesomeIcon icon={faFacebook} size='xl' />
      </a>
      <a href={`https://mail.google.com/mail/u/0/#inbox?compose=${import.meta.env.VITE_EMAIL_ID}`} target='_blank' className='cursor-pointer hover:text-[#1877F2] transition-all duration-100' title='Email'>
        <FontAwesomeIcon icon={faEnvelope} size='xl' />
      </a>
      <a href="" target='_blank' className='cursor-pointer hover:text-[#25D366] transition-all duration-100' title='Whatsapp' onClick={navigateToWhatsapp}>
        <FontAwesomeIcon icon={faWhatsapp} size='xl' />
      </a>
    </div>
  );
}

function FooterContent({ className, children }) {
  const { language } = useLanguage()
  return (
    <div className={`${className} ${language.arabic && ' ' + 'flex-row-reverse'}`}>
      {children}
    </div>
  )
}

export default function Footer() {
  return (
    <div className='flex justify-center items-center bg-black text-white py-10 h-auto z-50'>
      <FooterContent className='flex gap-2 items-center min-[1000px]:hidden flex-1 justify-evenly max-[430px]:px-2 px-4'>
        <div className='flex flex-col gap-4'>
          <TextLinks className='flex max-[410px]:flex-col gap-[16.5px] text-neutral-200 text-sm font-medium' />
          <Watermark className='text-neutral-400 text-sm' />
        </div>
        <IconLinks className='flex gap-4 text-neutral-200 pl-5'/>
      </FooterContent>
      <FooterContent className='flex max-[1000px]:hidden flex-1 justify-evenly'>
        <TextLinks className='flex gap-6 text-neutral-200 text-sm font-medium' />
        <Watermark className='text-neutral-400 text-sm' />
        <IconLinks className='flex gap-4 text-neutral-200'/>
      </FooterContent>
    </div>
  );
}