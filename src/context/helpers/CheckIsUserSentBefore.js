import isSimilarStrings from "../../helpers/isSimilarStrings";

export default function CheckIsUserSentBefore(
  previousUser,
  nameRef,
  emailRef,
  phoneRef,
  setMessage,
  setIsFailed,
  setIsSent,
  setNameErrorShown,
  setEmailErrorShown,
  setPhoneErrorShown,
  language
) {
  for (const user of previousUser) {
    const nameMatch = isSimilarStrings(user.name, nameRef.current.value);
    const emailMatch = isSimilarStrings(user.email, emailRef.current.value);
    const phoneMatch = isSimilarStrings(user.phone, phoneRef.current.value);
    if (nameMatch || emailMatch || phoneMatch) {
      setMessage({
        nameMessage: {
          result: nameMatch ? (language.arabic ? "يرجى استخدام اسم مختلف" : "Please use a different name") : "",
          empty: false,
          invalid: true,
        },
        emailMessage: {
          result: emailMatch ? (language.arabic ? "يرجى استخدام بريد إلكتروني مختلف" : "Please use a different email") : "",
          empty: false,
          invalid: true,
        },
        phoneMessage: {
          result: phoneMatch ? (language.arabic ? "يرجى استخدام رقم هاتف مختلف" : "Please use a different phone number") : "",
          empty: false,
          invalid: true,
        }
      })
      console.log('did run')
      setNameErrorShown(nameMatch);
      setEmailErrorShown(emailMatch);
      setPhoneErrorShown(phoneMatch);

      setIsFailed(true);
      setIsSent(false);
      return true;
    }
  }
  return false;
}