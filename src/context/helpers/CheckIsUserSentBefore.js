import isSimilarStrings from "../../helpers/isSimilarStrings";

export default function CheckIsUserSentBefore(
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
) {
  for (const user of previousUser) {
    if (
      isSimilarStrings(user.name, nameRef.current.value) ||
      isSimilarStrings(user.email, emailRef.current.value) ||
      isSimilarStrings(user.phone, phoneRef.current.value)
    ) {
      if (isSimilarStrings(user.name, nameRef.current.value)) {
        setMessage((prev) => ({
          ...prev,
          nameMessage: {
            result: "Please use a different name",
            empty: false,
            invalid: true,
          },
        }));
        console.log("Name is similar");
        setNameErrorShown(true);
      }

      if (isSimilarStrings(user.email, emailRef.current.value)) {
        setMessage((prev) => ({
          ...prev,
          emailMessage: {
            result: "Please use a different email",
            empty: false,
            invalid: true,
          },
        }));
        setEmailErrorShown(true);
      } else {
        setMessage((prev) => ({
          ...prev,
          emailMessage: {
            result: "",
            empty: false,
            invalid: false,
          },
        }));
      }

      if (isSimilarStrings(user.phone, phoneRef.current.value)) {
        setMessage((prev) => ({
          ...prev,
          phoneMessage: {
            result: "Please use a different phone number",
            empty: false,
            invalid: true,
          },
        }));
        setPhoneErrorShown(true);
      } else {
        setMessage((prev) => ({
          ...prev,
          phoneMessage: {
            result: "",
            empty: false,
            invalid: false,
          },
        }));
      }
      setShowModal(true);
      setIsFailed(true);
      setIsSent(false);
      return true;
    }
  }
  return false;
}