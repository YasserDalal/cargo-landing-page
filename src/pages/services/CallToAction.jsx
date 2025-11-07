import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/ContextHooks'

function Container({ className, children }) {
  return <div className={className}>{children}</div>;
}

function Header() {
  const { language } = useLanguage();
  return (
    <h2 className={`font-montserrat ${language.arabic ? 'text-[clamp(26.4px,6.2vw,46px)]' : 'text-[clamp(20.4px,6.2vw,36px)]'} font-bold pb-4 text-center`}>
      {language.english ? 'Ready to Streamline Your Cargo Operations?' : language.arabic && 'مستعد لتبسيط عمليات الشحن؟'}
    </h2>
  );
}

function Message({ className }) {
  const { language } = useLanguage();
  return (
    <div className={className}>
      <h3 className={`max-w-[600px] w-full ${language.arabic ? 'text-[clamp(18px,4vw,20px)]' : 'text-[clamp(16px,4vw,18px)]'}`}>
        {
          language.english
            ? 'Contact us today for a personalized quote and experience efficient, hassle-free customs clearance services tailored to your business needs.'
            : language.arabic && 'تواصل معنا اليوم للحصول على عرض سعر مخصص وتجربة خدمات تخليص جمركي فعّالة وخالية من المتاعب مصممة لتلبية احتياجات عملك.'}
      </h3>
    </div>
  );
}

function Button({ className }) {
  const { language } = useLanguage();
  return (
    <Link to='/contacts' className={className}>
      {
          language.english
            ? 'Request a Quote'
            : language.arabic && 'اطلب عرض سعر'
      }
    </Link>
  );
}

export default function CallToAction() {
  return (
    <div className='bg-[#80ACFA] text-[#19191F] border border-[#80ACFA] min-[903px]:rounded-[16px] w-full'>
      <Container
        className={"flex flex-col items-center justify-center py-20 px-5"}
      >
        <Header />
        <Message className={"text-center w-full flex justify-center"}/>
        <Button className={"flex justify-center bg-[#00078a] hover:bg-[#242dd2] cursor-pointer transition-all duration-150 rounded-md gap-x-2 text-nowrap w-[200px] py-3 px-8 text-sm font-medium text-white mt-5"}/>
      </Container>
    </div>
  );
}
