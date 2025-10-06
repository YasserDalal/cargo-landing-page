import { Link } from 'react-router-dom';
import Hero from "../../assets/Hero.png";

function Intro({ className }) {
  return (
    <div className={className}>
      <div className='flex flex-col max-[1130px]:max-w-[580px] min-[1130px]:w-[580px]'>
        <h2 className='font-montserrat text-5xl font-bold leading-[55px] text-[clamp(27px,6vw,48px)]'>
          Seamless Global Cargo Clearance
        </h2>
        <p className='text-lg text-neutral-300 mb-[28px] mt-[19px] leading-[24.5px] text-[clamp(16px,3vw,18px)]'>
          Navigate international logistics with ease. CargoClear Connect offers
          expert customs brokerage and freight forwarding for land, air, and sea
          cargo, ensuring smooth and efficient delivery worldwide.
        </p>
        <Link to='/contacts' className='flex justify-center pb-[10px] pt-[9px] px-8 text-[#fafafa] text-sm font-medium bg-[#4e53b7] hover:bg-[#656ac683] transition-all duration-100 rounded-md gap-x-2 text-nowrap w-[200px] cursor-pointer'>
          Request a Quote
        </Link>
      </div>
    </div>
  );
}

function HeroImage({ className, Hero }) {
  return (
    <div className={className}>
      <img src={Hero} alt='Hero Image' className='rounded-lg' />
    </div>
  );
}

export default function IntroSection({ className }) {
  return (
    <div className={className}>
      <Intro className='min-[1130px]:max-w-[590px] pt-[30px] min-[1130px]:pr-5 max-[1130px]:mt-16 flex justify-center' />
      <HeroImage
        Hero={Hero}
        className={
          "w-full min-[1130px]:max-w-[650px] max-w-[580px] min-[1130px]:pl-5 max-[1130px]:pt-[50px]"
        }
      />
    </div>
  );
}
