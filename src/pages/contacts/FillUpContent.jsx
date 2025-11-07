import React, { useEffect, useMemo, useState } from "react";
import Select from "react-select";
import { useUserDetails } from "../../context/ContextHooks";
import useTrackName from "./helpers/useTrackName";
import useTrackEmail from "./helpers/useTrackEmail";
import useTrackPhone from "./helpers/useTrackPhone";
import { useLanguage } from '../../context/ContextHooks'
import InputField from '../../components/InputField';

function Intro() {
  const { language } = useLanguage();
  return (
    <div className='flex flex-col gap-2'>
      <h3 className='text-[#F3F4F6FF] min-[920px]:text-[clamp(22px,2.43vw,30px)] max-[920px]:text-[clamp(17.1px,5.15vw,30px)] font-montserrat font-semibold leading-9'
        style={{
          textAlign: language.arabic ? 'right' : 'left',
          direction: language.arabic ? 'rtl' : 'ltr'
        }}>
        {
          language.english ? 'Request a Quote / Contact Us' : language.arabic && 'اطلب عرض سعر / اتصل بنا'
        }
      </h3>
      <h4 className='text-[#BDC1CA] text-[clamp(14px,3vw,16px)] leading-6 text-end'
        style={{
          textAlign: language.arabic ? 'right' : 'left',
          direction: language.arabic ? 'rtl' : 'ltr'
        }}>
        {
          language.english
            ? 'Fill out the form below to get a custom quote for your cargo clearance needs or for any general inquiries.'
            : language.arabic && 'املأ النموذج أدناه للحصول على عرض سعر مخصص لاحتياجات تخليص الشحن أو لأي استفسارات عامة.'
        }
      </h4>
    </div>
  );
}

function FillUpForm({ className, children }) {
  return <form className={className}>{children}</form>;
}

function NameInput() {
  const {
    nameRef,
    nameErrorShown,
    setMessage,
    message,
    setNameErrorShown } = useUserDetails();
  const { handleName } = useTrackName(nameRef, message, setNameErrorShown, setMessage);
  return (
    <fieldset className='fieldset'>
      <InputField className={`input ${
          nameErrorShown ? "input-error" : "input-success"
        } w-full border-0 bg-gray-700`}
        inputType='name'
        autoComplete = 'on'
        result={message.nameMessage.result}
        ref={nameRef}
        type='text'
        name='full name'
        title='full name'
        placeholder='Type here'
        onChange={(e) =>
          handleName(e)
        }
      />
    </fieldset>
  );
}

function EmailInput() {
  const {
    emailRef,
    emailErrorShown,
    setEmailErrorShown,
    message,
    setMessage } = useUserDetails();
  const { handleEmail } = useTrackEmail(emailRef, message, setEmailErrorShown, setMessage);
  return (
    <fieldset className='fieldset'>
      <InputField className={`input ${
          emailErrorShown ? "input-error" : "input-success"
        } w-full border-0 bg-gray-700`}
        inputType='email'
        ref={emailRef}
        type='email'
        name='email'
        autoComplete='on'
        result={message.emailMessage.result}
        placeholder='Type here'
        onChange={(e) => handleEmail(e)}
        pattern='[a-zA-Z0-9@.]+'
        title='Please use a different email'
        required
      />
    </fieldset>
  );
}

function Phone() {
  const { phoneRef, message, setMessage, setPhoneErrorShown, phoneErrorShown } =
    useUserDetails();
  const [phone, setPhone] = useState("");
  const { handlePhone } = useTrackPhone(phoneRef, message, setPhone, setPhoneErrorShown, setMessage);
  return (
    <fieldset className='fieldset'>
        <InputField className={`input w-full bg-gray-700 ${
            phoneErrorShown ? "input-error" : "input-success"
          }`}
          inputType='phone'
          ref={phoneRef}
          type='tel'
          name='phone'
          autoComplete='on'
          required
          placeholder='+973'
          pattern='[0-9]*'
          minLength='8'
          maxLength='8'
          result={message.phoneMessage.result}
          phoneLength={phone.length}
          title='Must be 8 digits'
          onChange={(e) => handlePhone(e)}
        />
    </fieldset>
  );
}

function ClearanceType() {
  const [selectedClearance, setSelectedClearance] = useState(null);
  const { clearanceRef } = useUserDetails();
  const { language } = useLanguage()
  const placeholder = useMemo(() => {
    if (language.arabic) {
      return 'اختر نوع التخليص'
    }
    return 'Select Clearance Type'
  }, [language])
  const clearanceTypes = useMemo(() => {
    if (language.arabic) {
      return [
      { value: "Land Cargo Clearance", label: "تخليص الشحنات البرية" },
      { value: "Sea Cargo Clearance", label: "تخليص الشحن البحري" },
      { value: "Air Cargo Clearance", label: "تخليص الشحن الجوي" },
    ];
    } else {
      return [
        { value: "Land Cargo Clearance", label: "Land Cargo Clearance" },
        { value: "Sea Cargo Clearance", label: "Sea Cargo Clearance" },
        { value: "Air Cargo Clearance", label: "Air Cargo Clearance" },
      ];
    }
  }, [language]);

  useEffect(() => {
    if (clearanceRef && selectedClearance) {
      const newValue = clearanceTypes.find(ct => ct.value === selectedClearance.value);
      setSelectedClearance(newValue || null);
    }
  }, [language])
  return (
    <fieldset className='fieldset'>
      <legend className={`fieldset-legend text-[14px] 
      ${language.arabic ? 'text-right' : 'text-left'}`
      }
      >
        {language.arabic ? 'نوع التخليص' : 'Clearance Type'}
      </legend>
      <Select
        ref={clearanceRef}
        title={placeholder}
        aria-label={placeholder}
        value={selectedClearance}
        onChange={(select) => {
          setSelectedClearance(select);
          if (clearanceRef) {
            clearanceRef.current.value = select.value;
          }
        }}
        placeholder={placeholder}
        styles={{
          control: (base) => ({
            ...base,
            backgroundColor: "#374151",
            border: "1px solid #4B5563",
            color: "#F9FAFB",
            display: "flex",
            flexDirection: language.arabic ? 'row-reverse' : 'row',
            textAlign: language.arabic ? 'right' : 'left',
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
            textAlign: language.arabic ? 'right' : 'left',
          }),
          singleValue: (base) => ({
            ...base,
            color: "#F9FAFB",
          }),
          placeholder: (base) => ({
            ...base,
            color: "#F9FAFB",
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

function Message({ className }) {
  const { messageRef } = useUserDetails();
  const { language } = useLanguage()
  const placeholder = useMemo(() => {
    if (language.arabic) {
      return 'أخبرنا المزيد عن حمولتك، والمتطلبات الخاصة أو أي تعليمات خاصة...'
    }
    return 'Tell us more about your cargo, specific requirements or any special instructions...'
  }, [language])
  return (
    <fieldset className={className}>
      <legend className={`fieldset-legend text-[14px] ${language.arabic ? 'text-right' : 'text-left'}`}>
        { language.arabic ? 'رسالتك / تفاصيل الشحنة' : 'Your Message / Cargo Details'}
      </legend>
      <textarea
        placeholder={placeholder}
        className='textarea textarea-info w-full resize-none min-h-28 h-full bg-gray-800'
        style={{
          textAlign: language.arabic ? 'right' : 'left',
          direction: language.arabic ? 'rtl' : 'ltr'
        }}
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

function TextSubmitButton() {
  const { language } = useLanguage();
  return (
    <span>{
      language.english 
        ? 'Submit a Request'
        : language.arabic && 'إرسال طلب'
    }</span>
  )
}

function SubmitButton({ children }) {
  const { handleSubmit, isSending } = useUserDetails();
  return (
    <button
      className={`btn bg-[#027eab] text-lg h-12 border-0 flex justify-center items-center rounded-[6px] mt-5 ${
        !isSending ? "cursor-pointer hover:bg-[#025675]" : "cursor-default"
      }`}
      type='button'
      onClick={handleSubmit}
    >
      {isSending
        ? <span className="loading loading-spinner loading-xl"></span>
        : children
      }
    </button>
  );
}

export default function FillUpContent({ className }) {
  return (
    <div className={className}>
      <Intro />
      <FillUpForm className='flex flex-col gap-2'>
        <NameInput />
        <EmailInput />
        <Phone />
        <ClearanceType />
        <Message className='fieldset mt-2' />
        <SubmitButton>
          <TextSubmitButton />
        </SubmitButton>
      </FillUpForm>
    </div>
  );
}
