export default function ValidatePhone(phoneRef, setShowModal, setIsFailed) {
  if (phoneRef.current.value.length !== 8) {
    setShowModal(true);
    setIsFailed(true);
    return true;
  }
  return false;
}
