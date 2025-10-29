import { createContext, useCallback, useMemo } from 'react'
import { faHouse } from '@fortawesome/free-regular-svg-icons'
import ServiceIconWhite from '../../assets/regular-icons/ServiceIcon.png'
import ServiceIconBlue from '../../assets/regular-icons/BoxIcon.png'
import PhoneIconWhite from '../../assets/regular-icons/PhoneIconWhite.png'
import PhoneIconBlue from '../../assets/regular-icons/PhoneIcon.png'
import useDefaultRoute from '../../hooks/useDefaultRoute'
import useScrollDown from '../../hooks/useScrollDown'

export const HeaderContext = createContext()

export function HeaderProvider({ children }) {
  const defaultRoute = useDefaultRoute()
  const isScrollDown = useScrollDown(0.1)

  const openGmail = useCallback(() => {
    const subject = 'Inquiry'
    const body = 'Hello! I want to ask about...'

    const mailtoLink = `mailto:${import.meta.env.VITE_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    window.location.href = mailtoLink
  }, [])

  const navigateToWhatsapp = useCallback(() => {
    const message = 'Hello! I want to inquire'

    const appLink = `whatsapp://send?phone=${import.meta.env.VITE_WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`

    window.location.href = appLink
  }, [])

  const handleFocus = useCallback(() => {
    document.activeElement.blur()
  }, [])

  const handleActive = useCallback(({ isActive }) => {
    return isActive
      ? 'text-[#80ACFA] p-2 min-[418px]:px-4 flex items-center gap-x-2'
      : 'text-white p-2 min-[418px]:px-4 hover:text-[#b5d0ff] transition-all duration-100 flex items-center gap-x-2'
  }, [])

  const navLinks = useMemo(() => {
    return [
      {
        icon: faHouse,
        alt: 'Home Icon',
        title: 'Home',
        to: 'home',
      },
      {
        imgSrcWhite: ServiceIconWhite,
        imgSrcBlue: ServiceIconBlue,
        alt: 'Services Icon',
        title: 'Services',
        to: 'services',
      },
      {
        imgSrcWhite: PhoneIconWhite,
        imgSrcBlue: PhoneIconBlue,
        alt: 'Phone Icon',
        title: 'Contacts',
        to: 'contacts',
      },
    ]
  }, [])

  const handleLogoClick = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])

  const value = {
    defaultRoute,
    isScrollDown,
    openGmail,
    navigateToWhatsapp,
    handleFocus,
    handleActive,
    navLinks,
    handleLogoClick
  }
  return <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>
}
