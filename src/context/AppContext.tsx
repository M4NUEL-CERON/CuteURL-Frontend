import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Theme = 'dark' | 'light'
type Lang  = 'es'   | 'en'

interface AppContextType {
  theme:       Theme
  lang:        Lang
  toggleTheme: () => void
  toggleLang:  () => void
}

const AppContext = createContext<AppContextType>({} as AppContextType)

export function AppProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')
  const [lang,  setLang]  = useState<Lang>('es')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')
  const toggleLang  = () => setLang(l  => l  === 'es'   ? 'en'   : 'es')

  return (
    <AppContext.Provider value={{ theme, lang, toggleTheme, toggleLang }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)