import { useLanguage } from '../../../context/ContextHooks'

export default function useTrackEmail(emailRef, message, setEmailErrorShown, setMessage) {
  const { language } = useLanguage()
  const { empty, invalid } = message.emailMessage

  const handleEmail = (e) => {
    emailRef.current.value = e.target.value.replace(/\s+/g, '')
    if ((e.target.value.endsWith('.com') || e.target.value.endsWith('.net')) && e.target.value.includes('@')) {
      setMessage((prev) => ({
        ...prev,
        emailMessage: {
          result: '',
          empty,
          invalid,
        },
      }))
      setEmailErrorShown(false)
    } else if (!e.target.value.includes('@') && e.target.value.length > 0) {
      setMessage((prev) => ({
        ...prev,
        emailMessage: {
          result: language.arabic ? 'يرجى إضافة @ في بريدك الإلكتروني' : 'Please add @ in your email',
          empty,
          invalid,
        },
      }))
      setEmailErrorShown(true)
    } else {
      setMessage((prev) => ({
        ...prev,
        emailMessage: {
          result: empty
            ? language.arabic
              ? 'البريد الإلكتروني مطلوب'
              : 'Email is required'
            : invalid
            ? language.arabic
              ? 'يرجى استخدام بريد إلكتروني مختلف'
              : 'Please use a different email'
            : '',
          empty,
          invalid,
        },
      }))
      setEmailErrorShown(true)
    }
  }

  return { handleEmail }
}
