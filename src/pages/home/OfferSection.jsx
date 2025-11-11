import GlobeIcon from "../../assets/regular-icons/GlobeIcon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import ShieldIcon from "../../assets/regular-icons/ShieldIcon.png";
import BoxIcon from "../../assets/regular-icons/BoxIcon.png";
import PhoneIcon from "../../assets/regular-icons/PhoneIcon.png";
import { useLanguage } from '../../context/ContextHooks'

function HeaderOffer({ className }) {
  const { language } = useLanguage();
  return (
    <div className={className}>
      <h2 className='font-montserrat text-4xl font-bold max-[780px]:text-[33px]'>
        {
          language.english
            ? 'Why Choose Us'
            : language.arabic && 'لماذا تختارنا'
        }
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
  const { language } = useLanguage();
  const objectOffers = [
    {
      srcImage: GlobeIcon,
      alt: "Globe Icon",
      header: language.english ? "Global Reach" : language.arabic && "الوصول العالمي",
      text: language.english ? "Extensive network ensuring smooth customs clearance across all major international routes and diverse regulatory environments." : language.arabic && "شبكة كبيرة تضم جميع المسارات الدولية والمناطق السياسية المتنوعة لضمان التجاوز الجمركي بسهولة.",
    },
    {
      icon: faClock,
      header: language.english ? "Timely Delivery" : language.arabic && 'توصيل في الوقت المناسب',
      text: language.english ? "Streamlined processes and proactive management minimize delays, ensuring your cargo reaches its destination on schedule." : language.arabic && "تقلل العمليات المبسطة والإدارة الاستباقية من التأخير، مما يضمن وصول شحنتك إلى وجهتها في الوقت المحدد.",
    },
    {
      srcImage: ShieldIcon,
      alt: "Shield Icon",
      header: language.english ? "Secure Handling" : language.arabic && 'المناولة الآمنة',
      text: language.english ? "Robust security protocols and meticulous handling procedures guarantee the safety and integrity of your shipments." : language.arabic && 'تضمن بروتوكولات الأمان القوية وإجراءات المناولة الدقيقة حماية وسلامة شحناتك.',
    },
    {
      srcImage: BoxIcon,
      alt: "Box Icon",
      header: language.english ? "Customs Expertise" : language.arabic && 'خبرة الجمارك',
      text: language.english ? "Our experienced team navigates complex customs regulations with precision, avoiding costly errors and ensuring compliance.": language.arabic && 'يقوم فريقنا المتمرس بالتعامل مع لوائح الجمارك المعقدة بدقة، متجنبًا الأخطاء المكلفة وضامنًا الالتزام بالقوانين.',
    },
    {
      srcImage: PhoneIcon,
      alt: "Phone Icon",
      header: language.english ? "24/7 Support" : language.arabic && 'دعم 24/7',
      text: language.english ? "Dedicated support team available around the clock to assist with inquiries and provide real-time updates on your cargo." : language.arabic && 'فريق دعم مخصص يعمل حول الساعة لمساعدة في الاستفسارات وتقديم التحديثات الحقيقية على شحنتك.',
    },
    {
      icon: faEnvelope,
      alt: "Globe Icon",
      header: language.english ? "Transparent Pricing" : language.arabic && 'تسعير شفاف',
      text: language.english ? "Clear and competitive pricing with no hidden fees, providing you with full cost visibility from start to finish." : language.arabic && 'تسعير واضح وتنافسي بدون أي رسوم مخفية، مما يتيح لك رؤية كاملة للتكاليف من البداية حتى النهاية.',
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
