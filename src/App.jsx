import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/home/Home'
import Center from './components/Center'
import Footer from './components/Footer'
import Services from './pages/services/Services'
import Contacts from './pages/contacts/Contacts'
import SuccessModal from "./components/SuccessModal"
import FailedModal from "./components/FailedModal";
import { useUserDetails } from "./context/ContextHooks";
import { HeaderProvider } from "./context/providers/HeaderProvider";
import DarkModal from './components/DarkModal'
import { useDarkModal } from './context/ContextHooks'
import ExpandedMap from './components/ExpandedMap'

function Wrapper({ children }) {
  const {
    isSent,
    isFailed,
    isSending,
    handleRemoveModal } = useUserDetails();
  const {
    showModal,
    openMaps,
    didClickSubmit } = useDarkModal();
  return (
    <>
      <div className='relative'>
        {children}
        {(showModal && !isSending) &&
          <DarkModal onClick={handleRemoveModal}>
            {(isSent && didClickSubmit)
              ? <SuccessModal className={`toast toast-end z-[99]`} />
              : (isFailed && didClickSubmit) && <FailedModal className={`toast toast-end z-[99]`} />
            }
          </DarkModal>
        }
        {(showModal && openMaps) &&
          <DarkModal>
            <ExpandedMap />
          </DarkModal>
        }
      </div>
    </>
  );
}

export default function App() {
  return (
    <div className='min-w-80'>
    <Wrapper>
      <HeaderProvider>
        <Header />
      </HeaderProvider>
      <Center className='flex flex-col z-10 h-auto max-[1130px]:pt-10'>
        <Routes path='/'>
          <Route index element={<Home className=' text-white px-1 bg-black pt-14'/>}/>
          <Route path='home' element={<Home className=' text-white px-1 bg-black pt-14' />} />
          <Route path='services' element={<Services className=' flex justify-center text-white px-1 bg-black pt-14' />} />
          <Route path='contacts' element={<Contacts className=' flex justify-center text-white px-1 bg-black pt-14' />} />

          {/* Display an empty page (not found from routes) */}
          <Route path='/*' element={<div className=' text-white px-1 bg-neutral-900 h-screen flex justify-center items-center'>Empty</div>} />
        </Routes>
      </Center>
      <Footer className='flex justify-center items-center bg-black text-white py-10 h-auto z-50'/>
    </Wrapper>
    </div>
  )
}