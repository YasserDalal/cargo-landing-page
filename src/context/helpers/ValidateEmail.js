export default function ValidateEmail(emailRef, setIsFailed) {
  if (!emailRef.current.value.endsWith(".com")) {
    setIsFailed(true);
    return true;
  }
  return false;
}