import { createContext, useCallback, useEffect, useState } from 'react'

export const DarkModalContext = createContext()

export function DarkModalProvider({ children }) {
  // Dark Modal
  const [showModal, setShowModal] = useState(false)
    /* -------------------------------------------------- */
   /*              States for Buttons                    */
  /* -------------------------------------------------- */
  // Expand Maps Button
  const [openMaps, setOpenMaps] = useState(false)
  // Submit Button
  const [didClickSubmit, setDidClickSubmit] = useState(false)
    /* -------------------------------------------------- */
   /*                   Handlers                         */
  /* -------------------------------------------------- */
  // Remove Modal when closing
  const handleCloseModal = useCallback(() => {
    setShowModal(false)
    setOpenMaps(false)
    setDidClickSubmit(false)
  }, [])

  // Expand Maps Click Handler
  const handleOpenMaps = useCallback(() => {
    setShowModal(true)
    setOpenMaps(true)

    // close unrelated states
    setDidClickSubmit(false)
  }, [])

  // Submit Click Handler
  const handleDidClickSubmit = useCallback(() => {
    setShowModal(true)
    setDidClickSubmit(true)

    // close unrelated states
    setOpenMaps(false)
  }, [])

  useEffect(() => {
    if(openMaps) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [openMaps])

  const value = {
    showModal,
    setShowModal,
    openMaps,
    setOpenMaps,
    didClickSubmit,
    setDidClickSubmit,
    handleCloseModal,
    handleOpenMaps,
    handleDidClickSubmit
  }
  return <DarkModalContext.Provider value={value}>{children}</DarkModalContext.Provider>
}
