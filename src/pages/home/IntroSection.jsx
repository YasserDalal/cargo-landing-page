import { Link } from 'react-router-dom';
import Hero from "../../assets/Hero.png";
import { useLanguage } from '../../context/ContextHooks'
import LightRays from '../../components/background/LightRays';

function Intro({ className }) {
  const { language } = useLanguage();
  return (
    <div className={className}>
      <div className='flex flex-col max-[1130px]:max-w-[580px] min-[1130px]:w-[580px]'>
        <h2 className='font-montserrat text-5xl font-bold leading-[55px] text-[clamp(27px,6vw,48px)]'>
          {
            language.english
              ? 'Seamless Global Cargo Clearance'
              : language.arabic && 'تخليص البضائع العالمي السلس'
          }
        </h2>
        <p className='text-lg text-neutral-300 mb-[28px] mt-[19px] leading-[24.5px] text-[clamp(16px,3vw,18px)]'>
          {
            language.english
              ? 'Navigate international logistics with ease. FiveStar Document Clearance offers expert customs brokerage and freight forwarding for land, air, and sea cargo, ensuring smooth and efficient delivery worldwide.'
              : language.arabic && 'تصفح اللوجستيات الدولية بسهولة. تقدم شركة FiveStar لتخليص المستندات خبراء في الوساطة الجمركية وشحن البضائع برياً وجواً وبحراً، مما يضمن تسليمًا سلسًا وفعالاً في جميع أنحاء العالم.'
          }
        </p>
        <Link to='/contacts' className={`flex ${language.arabic && 'self-end'} justify-center pb-[10px] pt-[9px] px-8 text-[#fafafa] text-sm font-medium bg-[#4e53b7] hover:bg-[#656ac683] transition-all duration-100 rounded-md gap-x-2 text-nowrap w-[200px] cursor-pointer`}>
          {
            language.english
              ? 'Request a Quote'
              : language.arabic && 'اطلب عرض سعر'
          }
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

export default function IntroSection() {
  const { language } = useLanguage();
  return (
    <div className={`flex ${language.arabic && 'flex-row-reverse text-right'} justify-evenly items-center min-h-[653px] h-full max-[1130px]:h-auto max-[1130px]:px-10 px-5 pb-16 max-[1130px]:flex-col relative`}>
      <LightRays
        raysOrigin="top-center"
        raysColor="#00ffff"
        raysSpeed={1.5}
        lightSpread={1}
        rayLength={10}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.06}
        className="custom-rays"
      />
      <Intro className={`min-[1130px]:max-w-[590px] pt-[30px] ${language.arabic ? 'min-[1130px]:pl-5' : 'min-[1130px]:pr-5'} max-[1130px]:mt-16 flex justify-center`} />
      <HeroImage
        Hero={Hero}
        className={
          "w-full min-[1130px]:max-w-[650px] max-w-[580px] min-[1130px]:pl-5 max-[1130px]:pt-[50px]"
        }
      />
    </div>
  );
}
