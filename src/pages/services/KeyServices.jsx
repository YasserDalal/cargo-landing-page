import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-regular-svg-icons";
import AirplaneIconBlue from "../../assets/regular-icons/AirplaneIconBlue.png";
import ShipIcon from "../../assets/regular-icons/ShipIconBlue.png";
import Card from "../../components/react-bits/card/Card";
import FlashlightCursor from "../../components/react-bits/flashlight-cursor/FlashlightCursor";
import { useLanguage } from '../../context/ContextHooks'
import { useMemo } from 'react';

function Title({ className }) {
  const { language } = useLanguage();
  return (
    <div className={className}>
      <h2>{ language.english ? 'Key Services' : language.arabic && 'الخدمات الرئيسية'}</h2>
    </div>
  );
}

function ServiceContainer({ className, children }) {
  return <div className={className}>{children}</div>;
}

function Services({ className }) {
  const { language } = useLanguage();
  const services = useMemo(() => [
    {
      title: language.english ? "Land Cargo Clearance" : language.arabic && 'تخليص الشحن البري',
      description:
        language.english ? "Streamlined customs processes for goods transported by road. Our expertise ensures quick approvals and compliance with all regulations, minimizing delays across borders. We handle all necessary documentation and inspections for efficient overland transit." : language.arabic && 'عمليات التخليص الجمركي المبسطة للبضائع المنقولة عن طريق البر. خبرتنا تضمن الموافقات السريعة والالتزام بجميع اللوائح، مما يقلل من التأخير عبر الحدود. نحن نتولى جميع الوثائق المطلوبة والفحوصات لضمان النقل البري بكفاءة.',
      icon: faTruck,
      alt: "Truck Icon",
      id: crypto.randomUUID(),
    },
    {
      title: language.english ? "Air Cargo Clearance" : language.arabic && 'تخليص الشحن الجوي',
      description:
        language.english
          ? "Rapid customs processing for air freight, ensuring your urgent shipments clear quickly. We manage pre-alerts, documentation, and coordination with airlines and customs authorities for swift delivery."
          : language.arabic && 'معالجة الجمارك السريعة للشحن الجوي، مع ضمان تخليص شحناتك العاجلة بسرعة. نحن ندير التنبيهات المسبقة، والوثائق، والتنسيق مع شركات الطيران والسلطات الجمركية لضمان تسليم سريع.',
      imageIcon: AirplaneIconBlue,
      alt: "Airplane Icon",
      id: crypto.randomUUID(),
    },
    {
      title: language.english ? "Sea Cargo Clearance" : language.arabic && 'تخليص الشحن البحري',
      description:
        language.english 
        ? "Comprehensive customs clearance for ocean freight, from full container loads (FCL) to less than container loads (LCL). Our service includes manifest review, duty assessment, and port authority liaison for smooth maritime logistics."
        : language.arabic && 'التخليص الجمركي الشامل للشحن البحري، من حاويات كاملة (FCL) إلى شحنات أقل من الحاوية (LCL). تشمل خدمتنا مراجعة البيان الجمركي، وتقييم الرسوم، والتواصل مع سلطات الميناء لضمان سلاسة اللوجستيات البحرية.',
      imageIcon: ShipIcon,
      alt: "Ship Icon",
      id: crypto.randomUUID(),
    },
  ], [language]);
  return services.map((service) =>
      <Card key={service.id}>
        <FlashlightCursor />
        <div className={className}>
          {service.icon ? (
            <div className='inline-block px-4 py-5 bg-[#80ACFA1A] rounded-full text-[24.2px] mb-[17px]'>
              <FontAwesomeIcon icon={faTruck} size='xl' color='#80ACFA' />
            </div>
          ) : (
            <div className='inline-block px-5 py-5 bg-[#80ACFA1A] rounded-full w-[77px] mb-[17px]'>
              <img src={service.imageIcon} alt={service.alt} />
            </div>
          )}
          <div className='font-bold text-[clamp(19.3px,5.5vw,24px)] font-montserrat pb-2 text-[#F3F4F6FF] cursor-default'>
            <h3>{service.title}</h3>
          </div>
          <div className='text-[clamp(14px,3.7vw,16px)] text-[#BDC1CA] leading-6 cursor-default'>
            <h4>{service.description}</h4>
          </div>
        </div>
      </Card>
    )
  ;
}

export default function KeyServices({ className }) {
  return (
    <div className={className}>
      <div className='flex flex-col bg-[#171a1f] h-auto px-10 py-20 rounded-2xl max-[400px]:px-5 max-[400px]:py-10'>
        <Title className='text-[clamp(28px,8vw,36px)] font-bold flex items-center flex-col font-montserrat pb-14 text-[#F3F4F6FF]' />
        <ServiceContainer className='flex justify-evenly flex-wrap gap-5 max-[794px]:gap-8'>
          <Services
            className='min-w-[264px] max-w-[331px] w-full max-[440px]:px-4 py-5 px-6 max-[1145px]:h-[372px] h-full text-center bg-[#1E2128FF] border border-[#323743FF] rounded-2xl'
          />
        </ServiceContainer>
      </div>
    </div>
  );
}
