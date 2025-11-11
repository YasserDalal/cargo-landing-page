export default function CheckIsAllFieldsEmpty(
  nameRef,
  emailRef,
  phoneRef,
  setMessage,
  setIsFailed,
  setNameErrorShown,
  setEmailErrorShown,
  setPhoneErrorShown,
  language
) {
  if (
    !nameRef.current.value &&
    !emailRef.current.value &&
    !phoneRef.current.value
  ) {
    setMessage({
      nameMessage: {
        result: language.arabic ? "الاسم مطلوب" : "Name is required",
        empty: true,
        invalid: false,
      },
      emailMessage: {
        result: language.arabic ? "البريد الإلكتروني مطلوب" : "Email is required",
        empty: true,
        invalid: false,
      },
      phoneMessage: {
        result: language.arabic ? "رقم الهاتف مطلوب" : "Phone number is required",
        empty: true,
        invalid: false,
      },
    });
    setIsFailed(true);
    setNameErrorShown(true);
    setEmailErrorShown(true);
    setPhoneErrorShown(true);
    return true;
  }
  return false;
}
