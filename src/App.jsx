import Header from './components/Header'

export default function App() {
  return (
    <div className='min-w-80'>
      <Header className={'flex justify-between items-center bg-black text-white py-2 fixed w-full z-50'} />
    </div>
  )
}