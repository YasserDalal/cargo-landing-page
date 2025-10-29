import { useContext } from 'react'
import { UserDetailsContext } from './providers/UserDetailsProvider'
import { HeaderContext } from './providers/HeaderProvider'

// UserDetailsProvider.jsx
export const useUserDetails = () => useContext(UserDetailsContext)
// HeaderProvider.jsx
export const useHeaderProvider = () => useContext(HeaderContext)