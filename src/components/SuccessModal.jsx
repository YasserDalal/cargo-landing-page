export default function SuccessModal({ className }) {
  return (
    <div className={className}>
      <div className='alert alert-success gap-2'>
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
        <span>Message sent successfully.</span>
      </div>
    </div>
  );
}
