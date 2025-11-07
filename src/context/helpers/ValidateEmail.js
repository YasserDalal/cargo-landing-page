export default function ValidateEmail(emailRef, setIsFailed) {
  if (!emailRef.current.value.endsWith(".com") || !emailRef.current.value.includes("@")) {
    setIsFailed(true);
    return true;
  }
  return false;
}