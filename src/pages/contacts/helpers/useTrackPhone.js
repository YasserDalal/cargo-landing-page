import { useLanguage } from '../../../context/ContextHooks'

export default function useTrackPhone(phoneRef, message, setPhone, setPhoneErrorShown, setMessage) {
  const { language } = useLanguage()
  const { empty, invalid } = message.phoneMessage

  const handlePhone = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '')

    phoneRef.current.value = value
    setPhone((e.target.value = value))
    if (value.length === 8) {
      setMessage((prev) => ({
        ...prev,
        phoneMessage: {
          result: '',
          empty,
          invalid,
        },
      }))
      setPhoneErrorShown(false)
    } else if (value.length === 0) {
      setMessage((prev) => ({
        ...prev,
        phoneMessage: {
          result: empty
            ? language.arabic
              ? 'الهاتف مطلوب'
              : 'Phone is required'
            : invalid
            ? language.arabic
              ? 'يرجى استخدام رقم هاتف مختلف'
              : 'Please use a different phone number'
            : '',
          empty,
          invalid,
        },
      }))
      setPhoneErrorShown(true)
    } else if (value.length < 8) {
      setPhoneErrorShown(true)
    }
  }

  return { handlePhone }
}
