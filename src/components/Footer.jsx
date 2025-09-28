import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function TextLinks({ className }) {
  return (
    <div className={className}>
      <span>Quick Links</span>
      <span>Services</span>
      <span>Contact Us</span>
    </div>
  );
}

function Watermark({ className }) {
  return (
    <span className={className}>
      Copyright © 2023 FiveStar Cargo Clearance. All rights reserved.
    </span>
  );
}

function IconLinks({ className }) {
  return (
    <div className={className}>
      <a href="" target='_blank' className='cursor-pointer hover:text-[#1877F2] transition-all duration-100' title='Facebook'>
        <FontAwesomeIcon icon={faFacebook} size='xl' />
      </a>
      <a href="" target='_blank' className='cursor-pointer hover:text-[#1877F2] transition-all duration-100' title='Email'>
        <FontAwesomeIcon icon={faEnvelope} size='xl' />
      </a>
      <a href="" target='_blank' className='cursor-pointer hover:text-[#25D366] transition-all duration-100' title='Whatsapp'>
        <FontAwesomeIcon icon={faWhatsapp} size='xl' />
      </a>
    </div>
  );
}

export default function Footer({ className }) {
  return (
    <div className={className}>
      <div className='flex items-center min-[1000px]:hidden flex-1 justify-evenly px-4'>
        <div className='flex flex-col gap-4'>
          <TextLinks className='flex max-[400px]:flex-col gap-[16.5px] text-neutral-200 text-sm font-medium' />
          <Watermark className='text-neutral-400 text-sm' />
        </div>
        <IconLinks className='flex gap-4 text-neutral-200 pl-5'/>
      </div>
      <div className='flex max-[1000px]:hidden flex-1 justify-evenly'>
        <TextLinks className='flex gap-6 text-neutral-200 text-sm font-medium' />
        <Watermark className='text-neutral-400 text-sm' />
        <IconLinks className='flex gap-4 text-neutral-200'/>
      </div>
    </div>
  );
}