import useUserDetails from "../../hooks/useUserDetails";
import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Select from "react-select";

function Intro({ className }) {
  return (
    <div className={className}>
      <h3 className='text-[#F3F4F6FF] min-[920px]:text-[clamp(22px,2.43vw,30px)] max-[920px]:text-[clamp(16.5px,5.15vw,30px)] font-montserrat font-semibold leading-9'>
        Request a Quote / Contact Us
      </h3>
      <h4 className='text-[#BDC1CA] text-[clamp(14px,3vw,16px)] leading-6 '>
        Fill out the form below to get a custom quote for your cargo clearance
        needs or for any general inquiries.
      </h4>
    </div>
  );
}

function FillUpForm({ className, children }) {
  return <form className={className}>{children}</form>;
}

function NameInput({ nameRef }) {
  return (
    <fieldset className='fieldset'>
      <legend className='fieldset-legend text-[14px]'>Full Name</legend>
      <input
        ref={nameRef}
        type='text'
        name='full name'
        title='full name'
        className='input w-full border-0 bg-gray-700'
        placeholder='Type here'
      />
    </fieldset>
  );
}

function EmailInput({ emailRef }) {
  const [validity, setValidity] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    if (email.endsWith(".com") || email.endsWith(".net")) {
      setValidity("input-success");
    } else {
      setValidity("input-error");
    }
  }, [email]);
  return (
    <fieldset className='fieldset'>
      <legend className='fieldset-legend text-[14px]'>Email Address</legend>
      <label className={`input ${validity} w-full bg-gray-700 `}>
        <svg
          className='h-[1.1em] opacity-50'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
        >
          <g
            strokeLinejoin='round'
            strokeLinecap='round'
            strokeWidth='2.5'
            fill='none'
            stroke='currentColor'
          >
            <rect width='20' height='16' x='2' y='4' rx='2'></rect>
            <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7'></path>
          </g>
        </svg>
        <input
          className='pl-2'
          type='email'
          placeholder='mail@site.com'
          name='email'
          ref={emailRef}
          title='email'
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <div
        className={`${
          validity === "input-success" || email === "" ? "hidden" : "block text-[#ff637d]"
        }`}
      >
        Enter valid email address
      </div>
    </fieldset>
  );
}

function Phone({ phoneRef }) {
  return (
    <fieldset className='fieldset'>
      <legend className='fieldset-legend text-[14px]'>Phone Number</legend>
      <label className='input validator w-full bg-gray-700'>
        <svg
          className='h-[1.1em] opacity-50'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 16 16'
        >
          <g fill='none'>
            <path
              d='M7.25 11.5C6.83579 11.5 6.5 11.8358 6.5 12.25C6.5 12.6642 6.83579 13 7.25 13H8.75C9.16421 13 9.5 12.6642 9.5 12.25C9.5 11.8358 9.16421 11.5 8.75 11.5H7.25Z'
              fill='currentColor'
            ></path>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M6 1C4.61929 1 3.5 2.11929 3.5 3.5V12.5C3.5 13.8807 4.61929 15 6 15H10C11.3807 15 12.5 13.8807 12.5 12.5V3.5C12.5 2.11929 11.3807 1 10 1H6ZM10 2.5H9.5V3C9.5 3.27614 9.27614 3.5 9 3.5H7C6.72386 3.5 6.5 3.27614 6.5 3V2.5H6C5.44771 2.5 5 2.94772 5 3.5V12.5C5 13.0523 5.44772 13.5 6 13.5H10C10.5523 13.5 11 13.0523 11 12.5V3.5C11 2.94772 10.5523 2.5 10 2.5Z'
              fill='currentColor'
            ></path>
          </g>
        </svg>
        <input
          ref={phoneRef}
          type='tel'
          name='phone'
          autoComplete='phone'
          className='tabular-nums pl-2'
          required
          placeholder='+973'
          pattern='[0-9]*'
          minLength='8'
          maxLength='8'
          title='Must be 8 digits'
        />
      </label>
      <p className='validator-hint hidden'>Must be 8 digits</p>
    </fieldset>
  );
}

function ClearanceType({ clearanceRef }) {
  const clearanceTypes = useMemo(() => {
    return [
      { value: "Land Cargo Clearance", label: "Land Cargo Clearance" },
      { value: "Sea Cargo Clearance", label: "Sea Cargo Clearance" },
      { value: "Air Cargo Clearance", label: "Air Cargo Clearance" },
    ];
  }, []);
  return (
    <fieldset className='fieldset'>
      <legend className='fieldset-legend text-[14px]'>Clearance Type</legend>
      <Select
        ref={clearanceRef}
        onChange={select => {
          if (clearanceRef) {
            clearanceRef.current.value = select.value
          };
        }}
        placeholder='Select Clearance Type'
        styles={{
          control: (base) => ({
            ...base,
            backgroundColor: "#374151",
            border: "1px solid #4B5563",
            color: "#F9FAFB",
          }),
          menu: (base) => ({
            ...base,
            backgroundColor: "#1F2937",
          }),
          option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused ? "#4B5563" : "#1F2937",
            color: "#F9FAFB",
            cursor: "pointer",
          }),
          singleValue: (base) => ({
            ...base,
            color: "#F9FAFB",
          }),
          placeholder: (base) => ({
            ...base,
            color: "#F9FAFB", // white placeholder
          }),
        }}
        options={clearanceTypes}
        components={{
          IndicatorSeparator: () => null, // remove separator line
        }}
        isSearchable={false}
      />
    </fieldset>
  );
}

function Message({ className, messageRef }) {
  return (
    <fieldset className={className}>
      <legend className='fieldset-legend text-[14px]'>
        Your Message / Cargo Details
      </legend>
      <textarea
        placeholder='Tell us more about your cargo, specific requirements or any special instructions...'
        className='textarea textarea-info w-full resize-none min-h-28 h-full bg-gray-800'
        onInput={(e) => {
          e.target.style.height = "auto";
          e.target.style.height = `${e.target.scrollHeight}px`;
        }}
        ref={messageRef}
        name='message'
        id='message'
      ></textarea>
    </fieldset>
  );
}

function SubmitButton({ className, handleSubmit }) {
  return (
    <div className={className} typeof='submit' onClick={handleSubmit}>
      <span>Submit a Request</span>
    </div>
  );
}

export default function FillUpContent({ className }) {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const messageRef = useRef(null);
  const clearanceRef = useRef(null);

  const [userDetails, setUserDetails] = useUserDetails();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserDetails({
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      message: messageRef.current.value,
      clearance: clearanceRef.current.value,
    });
  };

  useEffect(() => console.log(userDetails), [userDetails]);

  return (
    <div className={className}>
      <Intro className='flex flex-col gap-2' />
      <FillUpForm className='flex flex-col gap-2'>
        <NameInput nameRef={nameRef} />
        <EmailInput emailRef={emailRef} />
        <Phone phoneRef={phoneRef} />
        <ClearanceType clearanceRef={clearanceRef} />
        <Message messageRef={messageRef} className='fieldset mt-2' />
        <SubmitButton
          className='btn bg-[#027eab] hover:bg-[#025675] text-lg h-12 border-0 flex justify-center items-center rounded-[6px] mt-5 cursor-pointer'
          handleSubmit={handleSubmit}
        />
      </FillUpForm>
    </div>
  );
}
