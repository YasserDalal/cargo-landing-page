import React from 'react'
import Map from '../../components/map/Map'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpand } from '@fortawesome/free-solid-svg-icons'
import { useDarkModal, useLanguage } from '../../context/ContextHooks'

export default function Location({ className }) {
  const { handleOpenMaps } = useDarkModal()
  const { language } = useLanguage()
  return (
    <div className={className}>
      <div className='flex flex-col gap-2'>
        <h2
          className={`text-[clamp(22px,2.43vw,30px)] max-[920px]:text-[clamp(22px,5vw,30px)] font-montserrat font-bold text-[#F3F4F6FF] ${
            language.arabic && 'text-right'
          }`}
        >
          {language.arabic ? 'الموقع' : 'Location'}
        </h2>
        <h3 className={`text-[#BDC1CA] text-[clamp(14px,3vw,16px)] leading-6 ${language.arabic && 'text-right'}`}>
          {language.arabic ? 'ابحث عنا على الخريطة لتسهيل التنقل.' : 'Find us on the map for easy navigation.'}
        </h3>
      </div>
      <div className='relative'>
        <Map
          latitude={26.2292}
          longitude={50.5094}
          popupText='Five Star Document Clearance'
          style={{ height: '300px', width: '100%', filter: 'brightness(0.9)' }}
          language={language}
        />
        <button
          className={`absolute bottom-0 ${
            language.arabic ? 'left-0' : 'right-0'
          } text-black bg-[#ffffff95] hover:bg-[#ffffff] cursor-pointer w-12 h-12 flex justify-center items-center`}
          onClick={handleOpenMaps}
          title='Expand'
        >
          <FontAwesomeIcon icon={faExpand} size='2xl' />
        </button>
      </div>
    </div>
  )
}
