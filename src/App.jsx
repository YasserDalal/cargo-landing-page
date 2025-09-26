import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/home/Home'
import Center from './components/Center'

export default function App() {
  return (
    <div className='min-w-80'>
      <Header className={'flex justify-between items-center bg-black text-white py-2 fixed w-full z-50'} />
      <Center className='flex flex-col z-10 h-auto max-[1130px]:pt-10 pt-16'>
        <Routes path='/'>
          <Route index element={<Home className=' text-white px-1 bg-black'/>}/>
          <Route path='home' element={<Home className=' text-white px-1 bg-black' />} />
        </Routes>
      </Center>
    </div>
  )
}