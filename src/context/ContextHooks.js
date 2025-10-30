import { useContext } from 'react'
import { UserDetailsContext } from './providers/UserDetailsProvider'
import { HeaderContext } from './providers/HeaderProvider'
import { DarkModalContext } from './providers/DarkModalProvider'

// UserDetailsProvider.jsx
export const useUserDetails = () => useContext(UserDetailsContext)
// HeaderProvider.jsx
export const useHeaderProvider = () => useContext(HeaderContext)
// DarkModalProvider.jsx
export const useDarkModal = () => useContext(DarkModalContext)