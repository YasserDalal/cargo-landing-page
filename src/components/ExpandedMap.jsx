import { faXmark } from '@fortawesome/free-solid-svg-icons'
import Map from './Map'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDarkModal } from '../context/ContextHooks'

export default function ExpandedMap() {
  const { handleCloseModal } = useDarkModal()
  return (
    <div className='flex justify-center items-center h-full z-[99] py-5'>
      <div className='flex flex-col min-w-[320px] max-w-[1000px] min-h-[200px] max-h-[600px] h-full w-full z-[99]'>
        <div className='flex w-full justify-end bg-neutral-800 py-[10px] min-[1000px]:rounded-tl-2xl min-[1000px]:rounded-tr-2xl px-4'>
          <button className='px-2 py-[10px] bg-neutral-600 hover:bg-neutral-500 rounded-full cursor-pointer' onClick={handleCloseModal}>
            <FontAwesomeIcon icon={faXmark} size='xl' style={{ color: 'white' }} />
          </button>
        </div>
        <div className='flex-1'>
          <Map
            latitude={26.2292}
            longitude={50.5094}
            popupText='Five Star Document Clearance'
            style={{
              height: '100%',
              width: '100%',
            }}
          />
        </div>
      </div>
    </div>
  )
}
