import { useUserDetails } from '../context/ContextHooks'
import { useLanguage } from '../context/ContextHooks'

function Message() {
  const { nameRef, emailRef, phoneRef, message } = useUserDetails()
  const { language } = useLanguage()
  return (
    <span>
      {/* check if field is empty (english) */}
      {language.english && (!nameRef.current.value && !emailRef.current.value && !phoneRef.current.value
        ? 'Please fill out the name, email and phone number'
        // check if two field is empty
        : nameRef.current.value && (!emailRef.current.value && !phoneRef.current.value)
        ? 'Please fill out the email and phone number'
        : emailRef.current.value && (!nameRef.current.value && !phoneRef.current.value)
        ? 'Please fill out the name and phone number'
        : phoneRef.current.value && (!nameRef.current.value && !emailRef.current.value)
        ? 'Please fill out the name and email'
        // check if one field is empty
        : !nameRef.current.value && (emailRef.current.value && phoneRef.current.value)
        ? 'Please fill out the name'
        : !emailRef.current.value && (nameRef.current.value && phoneRef.current.value)
        ? 'Please fill out the email'
        : !phoneRef.current.value && (nameRef.current.value && emailRef.current.value)
        ? 'Please fill out the phone number'
        // check if the user has already sent before
        : (message.nameMessage.invalid || message.emailMessage.invalid || message.phoneMessage.invalid)
        ? 'Submit failed: This user has already sent before'
        : (!emailRef.current.value.includes("@") ||
          (!emailRef.current.value.endsWith(".com") ||
          !emailRef.current.value.endsWith(".net")))
        && 'Please enter a valid email address')             
      }
      {/* check if field is empty (arabic) */}
      {language.arabic && (!nameRef.current.value && !emailRef.current.value && !phoneRef.current.value
        ? 'يرجى تعبئة الاسم والبريد الإلكتروني ورقم الهاتف'
        // check if two field is empty
        : nameRef.current.value && (!emailRef.current.value && !phoneRef.current.value)
        ? 'يرجى ملء البريد الإلكتروني ورقم الهاتف'
        : emailRef.current.value && (!nameRef.current.value && !phoneRef.current.value)
        ? 'يرجى ملء الاسم ورقم الهاتف'
        : phoneRef.current.value && (!nameRef.current.value && !emailRef.current.value)
        ? 'يرجى ملء الاسم والبريد الإلكتروني'
        // check if one field is empty
        : !nameRef.current.value && (emailRef.current.value && phoneRef.current.value)
        ? 'يرجى ملء الاسم'
        : !emailRef.current.value && (nameRef.current.value && phoneRef.current.value)
        ? 'يرجى ملء البريد الإلكتروني'
        : !phoneRef.current.value && (nameRef.current.value && emailRef.current.value)
        ? 'يرجى تعبئة رقم الهاتف'
        // check if the user has already sent before
        : (message.nameMessage.invalid || message.emailMessage.invalid || message.phoneMessage.invalid)
        ? 'فشل الإرسال: هذا المستخدم قد أرسل من قبل'
        : (!emailRef.current.value.includes("@") ||
          (!emailRef.current.value.endsWith(".com") ||
          !emailRef.current.value.endsWith(".net")))
        && 'يرجى إدخال عنوان بريد إلكتروني صالح')             
      }
    </span>
  )
}

export default function FailedModal() {
  const { language } = useLanguage()
  return (
    <div className={`toast ${language.arabic ? 'toast-start' : 'toast-end'} z-[99]`}>
      <div role='alert' className={`alert alert-error ${language.arabic && 'flex flex-row-reverse'} gap-2`}>
        <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 shrink-0 stroke-current' fill='none' viewBox='0 0 24 24'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
        <Message />
      </div>
    </div>
  )
}
