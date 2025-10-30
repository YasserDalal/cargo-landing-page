export default function CheckIsAllFieldsEmpty(
  nameRef,
  emailRef,
  phoneRef,
  setMessage,
  setIsFailed,
  setNameErrorShown,
  setEmailErrorShown,
  setPhoneErrorShown
) {
  if (
    !nameRef.current.value &&
    !emailRef.current.value &&
    !phoneRef.current.value
  ) {
    setMessage({
      nameMessage: {
        result: "Name is required",
        empty: true,
        invalid: false,
      },
      emailMessage: {
        result: "Email is required",
        empty: true,
        invalid: false,
      },
      phoneMessage: {
        result: "Phone number is required",
        empty: true,
        invalid: false,
      },
    });
    setIsFailed(true);
    setNameErrorShown(true);
    setEmailErrorShown(true);
    setPhoneErrorShown(true);
    console.log("all fields are empty");
    return true;
  }
  return false;
}
