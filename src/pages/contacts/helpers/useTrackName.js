import { useLanguage } from '../../../context/ContextHooks'

export default function useTrackName(nameRef, message, setNameErrorShown, setMessage) {
  const { language } = useLanguage()

  const handleName = (e) => {
    const { empty, invalid } = message.nameMessage
    nameRef.current.value = e.target.value
    
    if (e.target.value.length > 0) {
      setNameErrorShown(false)
      setMessage((prev) => ({
        ...prev,
        nameMessage: {
          result: '',
          empty,
          invalid,
        },
      }))
    } else {
      setNameErrorShown(true)
      setMessage((prev) => ({
        ...prev,
        nameMessage: {
          result: empty
            ? language.arabic
              ? 'الاسم مطلوب'
              : 'Name is required'
            : invalid
            ? language.arabic
              ? 'يرجى استخدام اسم مختلف'
              : 'Please use a different name'
            : '',
          empty,
          invalid,
        },
      }))
    }
  }

  return { handleName }
}
