function Container({ className, children }) {
  return <div className={className}>{children}</div>;
}

function Header({ className, children }) {
  return <h2 className={className}>{children}</h2>;
}

function Message({ className, children }) {
  return (
    <div className={className}>
      <h3 className='max-w-[600px] w-full text-[clamp(16px,4vw,18px)]'>
        {children}
      </h3>
    </div>
  );
}

function Button({ className, children }) {
  return <button className={className}>{children}</button>;
}

export default function CallToAction() {
  return (
    <div className='bg-[#80ACFA] text-[#19191F] border border-[#80ACFA] rounded-[16px] w-full'>
      <Container
        className={"flex flex-col items-center justify-center py-20 px-5"}
      >
        <Header
          className={
            "font-montserrat text-[clamp(20.4px,6.2vw,36px)] font-bold pb-4 text-center"
          }
        >
          Ready to Streamline Your Cargo Operations?
        </Header>
        <Message className={"text-center w-full flex justify-center"}>
          Contact us today for a personalized quote and experience efficient,
          hassle-free customs clearance services tailored to your business
          needs.
        </Message>
        <Button
          className={
            "bg-[#00078a] hover:bg-[#242dd2] cursor-pointer transition-all duration-150 rounded-md gap-x-2 text-nowrap w-[200px] py-3 px-8 text-sm font-medium text-white mt-5"
          }
        >
          Request a Quote
        </Button>
      </Container>
    </div>
  );
}
