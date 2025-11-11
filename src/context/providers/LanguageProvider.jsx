import { createContext, useCallback, useState } from 'react'

export const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState({
    english: true,
    arabic: false,
  })

  const handleLanguage = useCallback(() => {
    if (language.arabic) {
      setLanguage({
        english: true,
        arabic: false,
      })
    } else {
      setLanguage({
        english: false,
        arabic: true,
      })
    }
  }, [language])

  const value = {
    language,
    handleLanguage,
  }
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
