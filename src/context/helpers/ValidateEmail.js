export default function ValidateEmail(emailRef, setShowModal, setIsFailed) {
  if (!emailRef.current.value.endsWith(".com")) {
    setShowModal(true);
    setIsFailed(true);
    return true;
  }
  return false;
}