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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import Map from './components/Map'

function Wrapper({ children }) {
  const {
    isSent,
    isFailed,
    isSending } = useUserDetails();
  const {
    showModal,
    openMaps,
    didClickSubmit,
    handleCloseModal } = useDarkModal();
  return (
    <>
      <div className='relative'>
        {children}
        {(showModal && !isSending) &&
          <DarkModal>
            {/* Form Submission Modals */}
            {(isSent && didClickSubmit)
              ? <SuccessModal className={`toast toast-end z-[99]`} />
              : (isFailed && didClickSubmit) && <FailedModal className={`toast toast-end z-[99]`} />
            }
            {/* Maps Modal */}
            {(openMaps && !didClickSubmit) &&
              (
                <div className='relative min-w-[320px] max-w-[1000px] w-full'>
                  <div className='flex justify-end bg-neutral-800 py-[10px] min-[1000px]:rounded-tl-2xl min-[1000px]:rounded-tr-2xl px-4'>
                    <button className='px-2 py-[10px] bg-neutral-600 hover:bg-neutral-500 rounded-full cursor-pointer'
                      onClick={handleCloseModal}>
                      <FontAwesomeIcon icon={faXmark} size='xl' style={{ color: 'white' }} />
                    </button>
                  </div>
                  <Map
                    latitude={26.2292}
                    longitude={50.5094}
                    popupText="Five Star Document Clearance"
                    style={{
                      height: '500px',
                      width: '100%',
                    }} />
                </div>
              )
            }
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