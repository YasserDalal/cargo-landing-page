import { useDarkModal } from '../context/ContextHooks'

export default function DarkModal({ children }) {
  const { showModal, handleCloseModal } = useDarkModal()
  return (
    <div className={`fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center z-[99]`}>
      <div
        className={`${showModal ? 'opacity-75 absolute top-0 left-0 right-0 bottom-0 bg-black' : 'brightness-100 hidden'}`}
        onClick={handleCloseModal}
      ></div>
      {children}
    </div>
  )
}