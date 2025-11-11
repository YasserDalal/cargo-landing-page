import { useDarkModal } from '../context/ContextHooks'

export default function DarkModal({ children, onClick }) {
  const { showModal, handleCloseModal } = useDarkModal()
  return (
    <div className={`fixed top-0 bottom-0 left-0 right-0 z-[99]`}>
      <div
        className={`${showModal ? 'opacity-75 absolute top-0 left-0 right-0 bottom-0 bg-black' : 'brightness-100 hidden'}`}
        onClick={onClick ? onClick : handleCloseModal}
      ></div>
      {children}
    </div>
  )
}