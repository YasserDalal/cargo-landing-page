export default function trackName(
  e,
  nameRef,
  message,
  setNameErrorShown,
  setMessage
) {
  nameRef.current.value = e.target.value;

  const { empty, invalid } = message.nameMessage;

  if (e.target.value.length > 0) {
    setNameErrorShown(false);
    setMessage((prev) => ({
      ...prev,
      nameMessage: {
        result: "",
        empty,
        invalid,
      },
    }));
  } else {
    setNameErrorShown(true);
    setMessage((prev) => ({
      ...prev,
      nameMessage: {
        result: empty
          ? "Name is required"
          : invalid
          ? "Please use a different name"
          : "",
        empty,
        invalid,
      },
    }));
  }
}
