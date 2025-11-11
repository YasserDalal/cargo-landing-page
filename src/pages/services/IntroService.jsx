import ShinyText from "../../components/react-bits/shiny-text/ShinyText";
import { useLanguage } from '../../context/ContextHooks'

function IntroHeader({ className, children }) {
  return (
    <ShinyText
      text={children}
      disabled={false}
      speed={10}
      className={className}
    />
  );
}

function IntroDescription({ className, children }) {
  return <h3 className={className}>{children}</h3>;
}

function IntroBlock({ className, children }) {
  return <div className={className}>{children}</div>;
}

export default function IntroService({ className }) {
  const { language } = useLanguage();
  return (
    <div className={className}>
      <IntroBlock className='max-w-[820px] min-w-[300px] w-full px-4'>
        <IntroHeader className={`font-bold w-full text-center font-montserrat text-[#F3F4F6FF] leading-12 pb-5 ${
          language.english ? 'text-[clamp(23.93px,7vw,48px)]' : language.arabic && 'text-[clamp(30.93px,7vw,60px)] mb-4'
        }`}>
          {language.english ? 'Our Comprehensive Global Cargo Services' : language.arabic && 'خدمات البضائع العالمية المتكاملة'}
        </IntroHeader>
        <IntroDescription className={`text-center w-full text-lg font-[400] text-[#BDC1CA] ${
          language.english ? 'text-[clamp(16px,3vw,18px)]' : language.arabic && 'text-[clamp(18px,3vw,20px)]'
        }`}>
          {
            language.english
              ? 'FiveStar Cargo Clearance Connect provides seamless customs clearance solutions for every mode of transport, ensuring your goods move efficiently across borders.'
              : language.arabic && 'توفر شركة فايف ستار لتخليص الشحن حلول تخليص جمركي سلسة لكل وسيلة نقل، مما يضمن تحرك بضائعك بكفاءة عبر الحدود.'
          }
        </IntroDescription>
      </IntroBlock>
    </div>
  );
}
