export default function trackPhone(
  e,
  phoneRef,
  message,
  setPhone,
  setPhoneErrorShown,
  setMessage
) {
  const value = e.target.value.replace(/[^0-9]/g, "");
  
  phoneRef.current.value = value;
  setPhone((e.target.value = value));

  const { empty, invalid } = message.phoneMessage;
  if (value.length === 8) {
    setMessage((prev) => ({
      ...prev,
      phoneMessage: {
        result: "",
        empty,
        invalid,
      },
    }));
    setPhoneErrorShown(false);
  } else if (value.length === 0) {
    setMessage((prev) => ({
      ...prev,
      phoneMessage: {
        result: empty
          ? "Phone is required"
          : invalid
          ? "Please use a different phone number"
          : "",
        empty,
        invalid,
      },
    }));
    setPhoneErrorShown(true);
  } else if (value.length < 8) {
    setPhoneErrorShown(true);
  }
}
