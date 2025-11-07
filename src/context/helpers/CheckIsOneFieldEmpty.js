export default function CheckIsOneFieldEmpty(
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
  setIsFailed,
  language
) {
  if (
    !phoneRef.current.value ||
    !emailRef.current.value ||
    !nameRef.current.value
  ) {
    if (!phoneErrorShown && !phoneRef.current.value) {
      setMessage((prev) => ({
        ...prev,
        phoneMessage: {
          result: language.arabic ? "رقم الهاتف مطلوب" : "Phone number is required",
          empty: true,
          invalid: false,
        },
      }));
      setPhoneErrorShown(true);
    }
    if (!emailErrorShown && !emailRef.current.value) {
      setMessage((prev) => ({
        ...prev,
        emailMessage: {
          result: language.arabic ? "البريد الإلكتروني مطلوب" : "Email is required",
          empty: true,
          invalid: false,
        },
      }));
      setEmailErrorShown(true);
    }
    if (!nameErrorShown && !nameRef.current.value) {
      setMessage((prev) => ({
        ...prev,
        nameMessage: {
          result: language.arabic ? "الاسم مطلوب" : "Name is required",
          empty: true,
          invalid: false,
        },
      }));
      setNameErrorShown(true);
    }
    setIsFailed(true);
    return true;
  }
  return false;
}
