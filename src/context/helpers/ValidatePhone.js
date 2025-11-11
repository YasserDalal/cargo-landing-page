export default function ValidatePhone(phoneRef, setIsFailed) {
  if (phoneRef.current.value.length !== 8) {
    setIsFailed(true);
    return true;
  }
  return false;
}
