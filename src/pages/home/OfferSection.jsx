import GlobeIcon from "../../assets/regular-icons/GlobeIcon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import ShieldIcon from "../../assets/regular-icons/ShieldIcon.png";
import BoxIcon from "../../assets/regular-icons/BoxIcon.png";
import PhoneIcon from "../../assets/regular-icons/PhoneIcon.png";

function HeaderOffer({ className }) {
  return (
    <div className={className}>
      <h2 className='font-montserrat text-4xl font-bold max-[780px]:text-[33px]'>
        Why Choose Us
      </h2>
    </div>
  );
}

function GridParent({ children }) {
  return (
    <div className='flex justify-center'>
      <div className='grid grid-cols-3 max-[1035px]:grid-cols-2 max-[780px]:grid-cols-1 grid-rows-2 gap-x-8 gap-y-8 justify-center items-center max-w-[1220px] max-[780px]:max-w-[620px] min-w-[300px]'>
        {children}
      </div>
    </div>
  );
}

function GridItems({ className, srcImage, alt, header, text, icon }) {
  return (
    <div className={className}>
      <div className='text-[20px]'>
        {srcImage ? (
          <img className='w-10' src={srcImage} alt={alt} />
        ) : (
          <FontAwesomeIcon icon={icon} size='2xl' color='#759FFF' />
        )}
      </div>
      <div className='font-montserrat text-xl font-semibold pt-2 text-neutral-200'>
        <h3>{header}</h3>
      </div>
      <div className='text-center text-[#BDC1CAFF] text-[16px] leading-6'>
        <h4>{text}</h4>
      </div>
    </div>
  );
}

export default function OfferSection({ className }) {
  const objectOffers = [
    {
      srcImage: GlobeIcon,
      alt: "Globe Icon",
      header: "Global Reach",
      text: "Extensive network ensuring smooth customs clearance across all major international routes and diverse regulatory environments.",
    },
    {
      icon: faClock,
      header: "Timely Delivery",
      text: "Streamlined processes and proactive management minimize delays, ensuring your cargo reaches its destination on schedule.",
    },
    {
      srcImage: ShieldIcon,
      alt: "Shield Icon",
      header: "Secure Handling",
      text: "Robust security protocols and meticulous handling procedures guarantee the safety and integrity of your shipments.",
    },
    {
      srcImage: BoxIcon,
      alt: "Box Icon",
      header: "Customs Expertise",
      text: "Our experienced team navigates complex customs regulations with precision, avoiding costly errors and ensuring compliance.",
    },
    {
      srcImage: PhoneIcon,
      alt: "Phone Icon",
      header: "24/7 Support",
      text: "Dedicated support team available around the clock to assist with inquiries and provide real-time updates on your cargo.",
    },
    {
      icon: faEnvelope,
      alt: "Globe Icon",
      header: "Transparent Pricing",
      text: "Clear and competitive pricing with no hidden fees, providing you with full cost visibility from start to finish.",
    },
  ];
  return (
    <div className={className}>
      <HeaderOffer className="w-full text-center"/>
      <GridParent>
        {objectOffers.map((item, index) => (
          <GridItems
            className='flex flex-col items-center justify-center bg-[#1E2128FF] w-full min-w-56 min-h-[210px] rounded-[10px] px-4 gap-2 pt-3 pb-2'
            srcImage={item.srcImage}
            alt={item.alt}
            header={item.header}
            text={item.text}
            icon={item.icon}
            key={index}
          />
        ))}
      </GridParent>
    </div>
  );
}
