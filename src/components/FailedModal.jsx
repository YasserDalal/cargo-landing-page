import { useUserDetails } from "../context/ContextHooks";

export default function FailedModal({ className }) {
  const { nameRef, emailRef, phoneRef } = useUserDetails();
  return (
    <div className={className}>
      <div role='alert' className='alert alert-error gap-2'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6 shrink-0 stroke-current'
          fill='none'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
        <span>
          {
            (!nameRef.current.value ||
            !emailRef.current.value ||
            !phoneRef.current.value)
              ? "Please fill out the name, email and phone number"
              : "Submit failed: Please use a different name, email and phone number"
          }
        </span>
      </div>
    </div>
  );
}
