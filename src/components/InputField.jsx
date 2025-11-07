import { useLanguage } from '../context/ContextHooks'

export default function InputField({
  className = '',
  inputType = 'name',
  type = '',
  placeholder = '',
  onChange = '',
  name = '',
  title = 'add title',
  autoComplete = 'on',
  ref = '',
  result = '',
  phoneLength = '',
  pattern = '[a-zA-Z0-9@.]',
  minLength = '',
  maxLength = '',
}) {
  const { language } = useLanguage()

  // check name input's language
  const isNameEnglish = language.english && inputType === 'name'
  const isNameArabic = language.arabic && inputType === 'name'

  // check email input's language
  const isEmailEnglish = language.english && inputType === 'email'
  const isEmailArabic = language.arabic && inputType === 'email'

  // check phone input's language
  const isPhoneEnglish = language.english && inputType === 'phone'
  const isPhoneArabic = language.arabic && inputType === 'phone'

  const languageTextStyle = {
    textAlign: language.arabic ? 'right' : 'left',
    direction: language.arabic ? 'rtl' : 'ltr',
  }
  return (
    <>
      <legend className='fieldset-legend text-[14px]' style={languageTextStyle}>
        {isNameEnglish ? 'Full Name' : isNameArabic && 'اسم كامل'}
        {isEmailEnglish ? 'Email Address' : isEmailArabic && 'عنوان البريد الالكتروني'}
        {isPhoneEnglish ? 'Phone Number' : isPhoneArabic && 'رقم الهاتف'}
      </legend>
      {inputType === 'name' ? (
        <input
          ref={ref}
          type={type}
          name={name}
          title={title}
          className={className}
          autoComplete={autoComplete}
          placeholder={placeholder}
          onChange={onChange}
          style={languageTextStyle}
        />
      ) : (
        <label className={className + (language.arabic ? ' ' + 'flex-row-reverse' : '')}>
          {inputType === 'email' ? (
            <svg className='h-[1.1em] opacity-50' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
              <g strokeLinejoin='round' strokeLinecap='round' strokeWidth='2.5' fill='none' stroke='currentColor'>
                <rect width='20' height='16' x='2' y='4' rx='2'></rect>
                <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7'></path>
              </g>
            </svg>
          ) : (
            inputType === 'phone' && (
              <svg className='h-[1.1em] opacity-50' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'>
                <g fill='none'>
                  <path
                    d='M7.25 11.5C6.83579 11.5 6.5 11.8358 6.5 12.25C6.5 12.6642 6.83579 13 7.25 13H8.75C9.16421 13 9.5 12.6642 9.5 12.25C9.5 11.8358 9.16421 11.5 8.75 11.5H7.25Z'
                    fill='currentColor'
                  ></path>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M6 1C4.61929 1 3.5 2.11929 3.5 3.5V12.5C3.5 13.8807 4.61929 15 6 15H10C11.3807 15 12.5 13.8807 12.5 12.5V3.5C12.5 2.11929 11.3807 1 10 1H6ZM10 2.5H9.5V3C9.5 3.27614 9.27614 3.5 9 3.5H7C6.72386 3.5 6.5 3.27614 6.5 3V2.5H6C5.44771 2.5 5 2.94772 5 3.5V12.5C5 13.0523 5.44772 13.5 6 13.5H10C10.5523 13.5 11 13.0523 11 12.5V3.5C11 2.94772 10.5523 2.5 10 2.5Z'
                    fill='currentColor'
                  ></path>
                </g>
              </svg>
            )
          )}
          <input
            className='pl-2'
            type={type}
            autoComplete={autoComplete}
            placeholder={placeholder}
            name={name}
            ref={ref}
            title={title}
            onChange={onChange}
            pattern={inputType === 'phone' ? pattern : pattern}
            minLength={minLength}
            maxLength={maxLength}
            style={languageTextStyle}
            required
          />
        </label>
      )}
      <div className='block text-[#ff637d] pt-1' style={languageTextStyle}>
        {!inputType === 'phone'
          ? result
          : (phoneLength < 8 && phoneLength > 0)
            ? isPhoneArabic ? 'يجب أن تكون 8 أرقام'
              : 'Must be 8 digits'
              : result
        }
      </div>
    </>
  )
}
