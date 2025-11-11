import { useLanguage } from '../context/ContextHooks';

export default function SuccessModal() {
  const { language } = useLanguage()
  return (
    <div className={`toast ${language.arabic ? 'toast-start' : 'toast-end'} z-[99]`}>
      <div className={`alert alert-success ${language.arabic && 'flex flex-row-reverse'} gap-2`}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-auto w-5 shrink-0 stroke-current'
          fill='none'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
        <span>
          { language.english ? 'Your request has been sent successfully' : language.arabic && 'تم إرسال طلبك بنجاح' }
        </span>
      </div>
    </div>
  );
}
