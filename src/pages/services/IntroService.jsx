import ShinyText from "../../components/react-bits/shiny-text/ShinyText";

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
  return (
    <div className={className}>
      <IntroBlock className='max-w-[820px] min-w-[300px] w-full px-4'>
        <IntroHeader className='font-bold text-center font-montserrat text-[#F3F4F6FF] leading-12 pb-5 text-[clamp(23.93px,7vw,48px)]'>
          Our Comprehensive Global Cargo Services
        </IntroHeader>
        <IntroDescription className='text-center w-full text-lg font-[400] text-[#BDC1CA] text-[clamp(16px,3vw,18px)]'>
          FiveStar Cargo Clearance Connect provides seamless customs clearance
          solutions for every mode of transport, ensuring your goods move
          efficiently across borders.
        </IntroDescription>
      </IntroBlock>
    </div>
  );
}
