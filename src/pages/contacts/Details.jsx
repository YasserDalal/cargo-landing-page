import React from "react";
import LocationPinGreen from "../../assets/regular-icons/LocationPinGreen.png";
import PhoneIconGreen from "../../assets/regular-icons/PhoneIconGreen.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Details({ className }) {
  return (
    <div className={className}>
      <div className='flex flex-col gap-2 pb-8'>
        <h2 className='text-[clamp(22px,2.43vw,30px)] max-[920px]:text-[clamp(20px,5vw,30px)] font-montserrat font-bold text-[#F3F4F6FF]'>
          Our Details
        </h2>
        <h3 className='text-[#BDC1CA] text-[clamp(14px,3vw,16px)] leading-6'>
          Reach out to us directly through the following channels.
        </h3>
      </div>
      <div className='flex flex-col gap-6 text-[#F3F4F6] text-[clamp(14px,3vw,16px)]'>
        <div className='flex gap-4'>
          <div className='w-5'>
            <img src={LocationPinGreen} alt='location pin icon' />
          </div>
          <div>
            <h4 className='font-semibold'> Five Star Document Clearance</h4>
            <h4>Building 401, Road 60, Block 456,</h4>
            <h4>Karranah, Bahrain</h4>
          </div>
        </div>
        <div className='flex gap-4 items-center'>
          <div className='w-5'>
            <img src={PhoneIconGreen} alt='location pin icon' />
          </div>
          <h4>+973 3989 4173</h4>
        </div>
        <div className='flex gap-4 items-center'>
          <div className='text-[20px]'>
            <FontAwesomeIcon icon={faEnvelope} size='md' color='#00BD7B' />
          </div>
          <h4>fivestarbh11@gmail.com</h4>
        </div>
        <div className='flex gap-4 items-center'>
          <div className='text-[20px]'>
            <FontAwesomeIcon icon={faClock} size='md' color='#00BD7B' />
          </div>
          <h4>Mon–Sun: Open 24 Hours</h4>
        </div>
      </div>
    </div>
  )
}
