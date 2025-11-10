import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-regular-svg-icons";
import AirplaneIcon from "../../assets/regular-icons/AirplaneIcon.png";
import ShipIcon from "../../assets/regular-icons/ShipIcon.png";
import { useLanguage } from '../../context/ContextHooks'
import { Link } from 'react-router-dom';

function HeaderService() {
  const { language } = useLanguage();
  return (
    <div className='text-[36px] font-montserrat font-bold'>
      <h2>{
        language.english 
          ? 'Our Clearance Services'
          : language.arabic && 'خدمات التخليص الخاصة بنا'
      }</h2>
    </div>
  );
}

function ServicesCards({ className, icon, title, description, imageIcon, alt, learnMore }) {
  return (
    <div className={className}>
      {
        icon ? (
          <div className='text-[30px]'>
            <FontAwesomeIcon icon={faTruck} size='2xl' color='#00bd7b' />
          </div>
        ) : (
          <div className='w-[60px]'>
            <img src={imageIcon} alt={alt} />
          </div>
        )
      }
      <div className='font-montserrat text-2xl max-[500px]:text-[clamp(20.5px,5vw,24px)] font-bold text-neutral-200'>
        <h3>{title}</h3>
      </div>
      <div className='text-[#BDC1CAFF] max-[500px]:text-[clamp(16px,3.6vw,18px)] text-lg mb-auto'>
        <p>
          {description}
        </p>
      </div>
      <div className='w-full pt-10'>
        <Link to='/services' className='block text-center w-full bg-[#018758] hover:bg-[#01a36b] transition-all duration-100 py-2 rounded-md cursor-pointer'>
          {learnMore}
        </Link>
      </div>
    </div>
  );
}

function ServiceContainer({ className, children }) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

export default function ServiceSection({ className }) {
  const { language } = useLanguage();
  const services = [
    {
      title: language.english ? "Land Cargo Clearance" : language.arabic && 'تخليص الشحن البري',
      description: language.english ? "Efficient customs processing for goods transported by road across borders. We ensure all documentation and tariffs are handled correctly for swift transit." : language.arabic && 'معالجة جمركية فعالة للبضائع المنقولة بريًا عبر الحدود. نضمن التعامل الصحيح مع جميع الوثائق والرسوم لضمان عبور سريع.',
      icon: faTruck,
      alt: "Truck Icon",
    },
    {
      title: language.english ? "Air Freight Clearance" : language.arabic && 'تخليص البضائع الجوية',
      description: language.english ? "Rapid customs declarations and clearance for air cargo, minimizing airport delays and ensuring your time-sensitive shipments arrive promptly." : language.arabic && 'التصريحات والتخليص الجمركي السريع للشحن الجوي، مما يقلل التأخيرات في المطار ويضمن وصول شحناتك الحساسة للوقت بسرعة.',
      imageIcon: AirplaneIcon,
      alt: "Airplane Icon",
    },
    {
      title: language.english ? "Sea Freight Clearance" : language.arabic && 'تخليص الشحن البحري',
      description: language.english ? "Comprehensive customs solutions for ocean-bound cargo, managing import/export duties, vessel clearances, and port logistics for smooth maritime trade." : language.arabic && 'حلول جمركية شاملة للشحن البحري، تشمل إدارة الرسوم على الاستيراد والتصدير، وتخليص السفن، ولوجستيات الموانئ لضمان تجارة بحرية سلسة.',
      imageIcon: ShipIcon,
      alt: "Ship Icon",
    },
  ];
  return (
    <div className={className}>
      <HeaderService />
      <ServiceContainer className='flex flex-wrap w-full gap-7 justify-center h-auto mt-14'>
        {
          services.map((service, index) => (
            <ServicesCards
              key={index}
              className={`flex flex-col gap-5 max-w-[406px] min-w-[280px] w-full bg-[#303340] max-[500px]:px-5 px-7 max-[500px]:py-7 py-10 rounded-lg ${language.arabic && 'items-end'}`}
              title={service.title}
              description={service.description}
              imageIcon={service.imageIcon}
              alt={service.alt}
              icon={service.icon}
              learnMore={language.english ? 'Learn More' : language.arabic && 'تعرف على المزيد'}
            />
          ))
        }
      </ServiceContainer>
    </div>
  );
}
