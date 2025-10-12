import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-regular-svg-icons";
import AirplaneIcon from "../../assets/regular-icons/AirplaneIcon.png";
import ShipIcon from "../../assets/regular-icons/ShipIcon.png";

function HeaderService() {
  return (
    <div className='text-[36px] font-montserrat font-bold'>
      <h2>Our Clearance Services</h2>
    </div>
  );
}

function ServicesCards({ className, icon, title, description, imageIcon, alt }) {
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
      <div className='text-[#BDC1CAFF] max-[500px]:text-[clamp(16px,3.6vw,18px)] text-lg'>
        <p>
          {description}
        </p>
      </div>
      <div className='pt-10'>
        <button className='text-center w-full bg-[#018758] hover:bg-[#01a36b] transition-all duration-100 py-2 rounded-md cursor-pointer'>
          Learn More
        </button>
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
  const services = [
    {
      title: "Land Cargo Clearance",
      description:
        "Efficient customs processing for goods transported by road across borders. We ensure all documentation and tariffs are handled correctly for swift transit.",
      icon: faTruck,
      alt: "Truck Icon",
    },
    {
      title: "Air Freight Clearance",
      description:
        "Rapid customs declarations and clearance for air cargo, minimizing airport delays and ensuring your time-sensitive shipments arrive promptly.",
      imageIcon: AirplaneIcon,
      alt: "Airplane Icon",
    },
    {
      title: "Sea Freight Clearance",
      description:
        "Comprehensive customs solutions for ocean-bound cargo, managing import/export duties, vessel clearances, and port logistics for smooth maritime trade.",
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
              className='flex flex-col gap-5 max-w-[406px] min-w-[280px] w-full bg-[#303340] max-[500px]:px-5 px-7 max-[500px]:py-7 py-10 rounded-lg'
              title={service.title}
              description={service.description}
              imageIcon={service.imageIcon}
              alt={service.alt}
              icon={service.icon}
            />
          ))
        }
      </ServiceContainer>
    </div>
  );
}
