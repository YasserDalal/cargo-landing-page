export default function trackEmail(
  e,
  emailRef,
  message,
  setEmailErrorShown,
  setMessage
) {
  emailRef.current.value = e.target.value;
  
  const { empty, invalid } = message.emailMessage;
  if (e.target.value.endsWith(".com") || e.target.value.endsWith(".net")) {
    setMessage((prev) => ({
      ...prev,
      emailMessage: {
        result: "",
        empty,
        invalid,
      },
    }));
    setEmailErrorShown(false);
  } else {
    setMessage((prev) => ({
      ...prev,
      emailMessage: {
        result: empty
          ? "Email is required"
          : invalid
          ? "Please use a different email"
          : "",
        empty,
        invalid,
      },
    }));
    setEmailErrorShown(true);
  }
}
