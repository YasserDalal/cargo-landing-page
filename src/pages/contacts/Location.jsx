import React from "react";
import SampleMap from "../../assets/regular-icons/SampleMap.png";

export default function Location({ className }) {
  return (
    <div className={className}>
      <div className='flex flex-col gap-2'>
        <h2 className='text-[clamp(22px,2.43vw,30px)] max-[920px]:text-[clamp(22px,5vw,30px)] font-montserrat font-bold text-[#F3F4F6FF]'>
          Location
        </h2>
        <h3 className='text-[#BDC1CA] text-[clamp(14px,3vw,16px)] leading-6'>
          Find us on the map for easy navigation.
        </h3>
      </div>
      <div>
        <img src={SampleMap} alt='Map image' />
      </div>
    </div>
  );
}
