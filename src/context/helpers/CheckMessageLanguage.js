export default function CheckMessageLanguage(message, language, setMessage, nameErrorShown, emailErrorShown, phoneErrorShown) {
  setMessage((prev) => ({
    nameMessage: {
      ...prev.nameMessage,
      result: nameErrorShown && message.nameMessage.empty
        ? language.arabic
          ? 'الاسم مطلوب' 
          : 'Name is required'
        : nameErrorShown && message.nameMessage.invalid
        ? language.arabic ? 'يرجى استخدام اسم مختلف' : 'Please use a different name'
        : '',
    },
    emailMessage: {
      ...prev.emailMessage,
      result: emailErrorShown && message.emailMessage.empty
        ? language.arabic ? 'البريد الإلكتروني مطلوب' : 'Email is required'
        : emailErrorShown && message.emailMessage.invalid
        ? language.arabic ? 'يرجى استخدام بريد إلكتروني مختلف' : 'Please use a different email'
        : '',
    },
    phoneMessage: {
      ...prev.phoneMessage,
      result: phoneErrorShown && message.phoneMessage.empty
        ? language.arabic ? 'رقم الهاتف مطلوب' : 'Phone number is required'
        : phoneErrorShown && message.phoneMessage.invalid
        ? language.arabic ? 'يرجى استخدام رقم هاتف مختلف' : 'Please use a different phone number'
        : '',
    }
  }))
}