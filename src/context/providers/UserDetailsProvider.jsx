import { createContext, useCallback, useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import dayjs from "dayjs";
import isSimilarStrings from "../../helpers/isSimilarStrings";
import CheckIsAllFieldsEmpty from "../helpers/CheckIsAllFieldsEmpty";
import CheckIsOneFieldEmpty from "../helpers/CheckIsOneFieldEmpty";
import ValidateEmail from "../helpers/ValidateEmail";
import ValidatePhone from "../helpers/ValidatePhone";
import CheckIsUserSentBefore from "../helpers/CheckIsUserSentBefore";

export const UserDetailsContext = createContext();

export default function UserDetailsProvider({ children }) {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const messageRef = useRef(null);
  const clearanceRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const [previousUser, setPreviousUser] = useState([
    {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      phone: phoneRef.current?.value,
    },
  ]);
  const [message, setMessage] = useState({
    nameMessage: {
      result: "",
      empty: false,
      invalid: false,
    },
    emailMessage: {
      result: "",
      empty: false,
      invalid: false,
    },
    phoneMessage: {
      result: "",
      empty: false,
      invalid: false,
    },
  });
  const [phoneErrorShown, setPhoneErrorShown] = useState(false);
  const [emailErrorShown, setEmailErrorShown] = useState(false);
  const [nameErrorShown, setNameErrorShown] = useState(false);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    // if sending, do nothing
    if (isSending) {
      return;
    }

    // if all fields are empty, show the error message
    if(CheckIsAllFieldsEmpty(
      nameRef,
      emailRef,
      phoneRef,
      setMessage,
      setShowModal,
      setIsFailed,
      setNameErrorShown,
      setEmailErrorShown,
      setPhoneErrorShown
    )) {
      return;
    }

    // if one field is empty, show the error message
    if(CheckIsOneFieldEmpty(
      nameRef,
      emailRef,
      phoneRef,
      nameErrorShown,
      emailErrorShown,
      phoneErrorShown,
      setNameErrorShown,
      setEmailErrorShown,
      setPhoneErrorShown,
      setMessage,
      setShowModal,
      setIsFailed
    )) {
      return;
    }

    // if the email doesn't end with .com, show the error message
    if(ValidateEmail(emailRef, setShowModal, setIsFailed)) {
      return;
    }

    // if the phone number is not 8 digits, show the error message
    if(ValidatePhone(phoneRef, setShowModal, setIsFailed)) {
      return;
    };

    // if the user already sent before, show the error message
    if(CheckIsUserSentBefore(
      previousUser,
      nameRef,
      emailRef,
      phoneRef,
      setMessage,
      setShowModal,
      setIsFailed,
      setIsSent,
      setNameErrorShown,
      setEmailErrorShown,
      setPhoneErrorShown
    )) {
      return;
    }

    setIsSending(true);

    const templateParams = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      clearance: clearanceRef.current.value,
      message: messageRef.current.value,
      date: dayjs().format("MMM D, YYYY"),
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_ID
      )
      .then(() => {
        setPreviousUser([
          ...previousUser,
          {
            name: nameRef.current.value,
            email: emailRef.current.value,
            phone: phoneRef.current.value,
          },
        ]);
        setMessage({
          nameMessage: {
            result: "",
            empty: false,
            invalid: false,
          },
          emailMessage: {
            result: "",
            empty: false,
            invalid: false,
          },
          phoneMessage: {
            result: "",
            empty: false,
            invalid: false,
          },
        });
        setIsSent(true);
        setShowModal(true);
        setIsFailed(false);
        setEmailErrorShown(false);
        setPhoneErrorShown(false);
        setNameErrorShown(false);
      })
      .catch((err) => console.log("Failed to send message: " + err))
      .finally(() => setIsSending(false));
    },
    [isSending]
  );

  const handleRemoveModal = useCallback(() => {
    setIsSent(false);
    setShowModal(false);
    setIsSending(false);
  }, []);

  useEffect(() => {
    if (!isSent) return;

    const timeout = setTimeout(() => {
      setShowModal(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [isSent]);

  const value = {
    nameRef,
    emailRef,
    phoneRef,
    messageRef,
    clearanceRef,
    handleSubmit,
    isSent,
    setIsSent,
    handleRemoveModal,
    isSending,
    isFailed,
    message,
    setMessage,
    showModal,
    setPhoneErrorShown,
    phoneErrorShown,
    emailErrorShown,
    setEmailErrorShown,
    setNameErrorShown,
    nameErrorShown,
  };
  return (
    <UserDetailsContext.Provider value={value}>
      {children}
    </UserDetailsContext.Provider>
  );
}
