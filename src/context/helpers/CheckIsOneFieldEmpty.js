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
  setShowModal,
  setIsFailed
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
          result: "Phone number is required",
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
          result: "Email is required",
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
          result: "Name is required",
          empty: true,
          invalid: false,
        },
      }));
      setNameErrorShown(true);
    }
    setShowModal(true);
    setIsFailed(true);
    console.log("One field is empty");
    return true;
  }
  return false;
}
