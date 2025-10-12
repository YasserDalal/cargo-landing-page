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
            <h4 className='font-semibold'>CargoClear Connect Headquarters</h4>
            <h4>123 Global Logistics Way,</h4>
            <h4>Port City, PC 90210, Country</h4>
          </div>
        </div>
        <div className='flex gap-4 items-center'>
          <div className='w-5'>
            <img src={PhoneIconGreen} alt='location pin icon' />
          </div>
          <div>
            <h4>+973 330 31351</h4>
          </div>
        </div>
        <div className='flex gap-4 items-center'>
          <div className='text-[20px]'>
            <FontAwesomeIcon icon={faEnvelope} size='md' color='#00BD7B' />
          </div>
          <div>
            <h4>info@cargoclearconnect.com</h4>
          </div>
        </div>
        <div className='flex gap-4'>
          <div className='text-[20px]'>
            <FontAwesomeIcon icon={faClock} size='md' color='#00BD7B' />
          </div>
          <div>
            <h4>Mon-Fri: 9:00 AM - 5:00 PM</h4>
            <h4>(Local Time)</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
