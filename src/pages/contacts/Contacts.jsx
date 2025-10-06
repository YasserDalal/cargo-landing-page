import React from "react";
import Details from "./Details";
import FillUpContent from "./FillUpContent";
import Location from "./Location";

function Container({ className, children }) {
  return <div className={className}>{children}</div>;
}

function Header({ className }) {
  return (
    <div className={className}>
      <h2>Get a Quote & Contact Us</h2>
    </div>
  );
}

function Contents({ className, children }) {
  return <div className={className}>{children}</div>;
}

function DetailContents({ children }) {
  return (
    <div className='flex flex-col gap-12 max-[1050px]:gap-6'>{children}</div>
  );
}

export default function Contacts({ className }) {
  return (
    <div className={className}>
      <Container className='w-full flex flex-col items-center gap-32 max-[1050px]:gap-28 pb-7 px-3 max-[362px]:px-2'>
        <Header className='text-[#F3F4F6FF] text-[clamp(35px,9vw,48px)] font-montserrat font-bold text-center mt-[70px] min-[590px]:text-[clamp(35px,7vw,48px)]'>
          Get a Quote & Contact Us
        </Header>
        <Contents className='flex gap-12 max-[920px]:flex-col max-[920px]:items-center max-[1050px]:gap-6 w-full justify-center'>
          <FillUpContent className='flex flex-col gap-8 p-10 max-w-[642px] bg-[#1E2128] min-[920px]:min-w-[440.2px] rounded-[10px] max-[1050px]:p-7 max-[950px]:p-6 max-[920px]:p-10 max-[600px]:p-9 max-[585px]:p-8 max-[510px]:p-7 max-[430px]:px-6 max-[400px]:px-[1rem] h-auto max-h-[790px]' />
          <DetailContents>
            <Details className='max-w-[642px] min-[920px]:min-w-[309px] h-full max-[1350px]:h-auto bg-[#1E2128] rounded-[10px] min-[1050px]:p-10 max-[1050px]:p-7 max-[950px]:p-6 max-[920px]:p-10 max-[600px]:p-9 max-[580px]:p-8 max-[560px]:p-7 max-[540px]:p-6 max-[520px]:p-5 ' />
            <Location className='max-w-[642px] min-[920px]:min-w-[309px] h-full max-[1350px]:h-auto bg-[#1E2128] rounded-[10px] p-10 max-[1050px]:p-7 max-[950px]:p-6 max-[920px]:p-10 flex flex-col gap-8 max-[600px]:p-9 max-[580px]:p-8 max-[560px]:p-7 max-[540px]:p-6 max-[520px]:p-5' />
          </DetailContents>
        </Contents>
      </Container>
    </div>
  );
}
