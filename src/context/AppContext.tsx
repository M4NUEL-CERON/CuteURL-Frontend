import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Lang = 'es' | 'en'

interface AppContextType {
  lang:       Lang
  toggleLang: () => void
}

const AppContext = createContext<AppContextType>({} as AppContextType)

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light')
  }, [])

  useEffect(() => { document.documentElement.lang = lang }, [lang])

  const toggleLang = () => setLang(l => l === 'es' ? 'en' : 'es')

  return (
    <AppContext.Provider value={{ lang, toggleLang }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)
