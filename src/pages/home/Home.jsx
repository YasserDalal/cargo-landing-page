import IntroSection from "./IntroSection";
import OfferSection from "./OfferSection";
import ServiceSection from "./ServiceSection";

export default function Home({ className }) {
  return (
    <div className={className}>
      <IntroSection className='flex bg-[#03193F] justify-evenly items-center min-h-[653px] h-full max-[1130px]:h-auto max-[1130px]:px-10 px-5 pb-16 max-[1130px]:flex-col' />
      <OfferSection
        className='flex flex-col bg-black justify-center items-center h-auto 
        px-5 max-[1035px]:pb-16 max-[1035px]:pt-[75px] gap-20 pb-16 mt-[75px] max-[1035px]:mt-0'
      />
      <ServiceSection className='flex flex-col bg-[#171A1FFF] justify-center items-center h-auto max-[500px]:px-5 px-2 pt-[75px] pb-16' />
    </div>
  );
}
