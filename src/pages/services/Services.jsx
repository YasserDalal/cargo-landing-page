import CallToAction from "./CallToAction";
import IntroService from "./IntroService";
import KeyServices from "./KeyServices";

function ServiceContents({ className, children }) {
  return <div className={className}>{children}</div>;
}

export default function Services({ className }) {
  return (
    <div className={className}>
      <ServiceContents className='flex flex-col items-center gap-24 pb-24 max-w-[1182px] w-full'>
        <IntroService className='flex items-center flex-col mt-20 bg-black' />
        <KeyServices className='flex flex-col w-full' />
        <CallToAction />
      </ServiceContents>
    </div>
  );
}
