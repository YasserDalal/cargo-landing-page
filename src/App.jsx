import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/home/Home'
import Center from './components/Center'
import Footer from './components/Footer'
import Services from './pages/services/Services'
import Contacts from './pages/contacts/Contacts'

export default function App() {
  return (
    <div className='min-w-80'>
      <Header />
      <Center className='flex flex-col z-10 h-auto max-[1130px]:pt-10 pt-14'>
        <Routes path='/'>
          <Route index element={<Home className=' text-white px-1 bg-black'/>}/>
          <Route path='home' element={<Home className=' text-white px-1 bg-black' />} />
          <Route path='services' element={<Services className=' flex justify-center text-white px-1 bg-black' />} />
          <Route path='contacts' element={<Contacts className=' flex justify-center text-white px-1 bg-black' />} />

          {/* Display an empty page (not found from routes) */}
          <Route path='/*' element={<div className=' text-white px-1 bg-neutral-900 h-screen flex justify-center items-center'>Empty</div>} />
        </Routes>
      </Center>
      <Footer className='flex justify-center items-center bg-black text-white py-10 h-auto z-50'/>
    </div>
  )
}