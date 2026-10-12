import { useApp } from '../context/AppContext'
import { translations } from '../translations'
import logoSvg from '../assets/brand/logo.svg'

export default function Navbar() {
  const { lang, toggleLang } = useApp()
  const tr = translations[lang].nav

  return (
    <nav className="sticky top-0 z-[100] backdrop-blur-xl border-b border-transparent relative">

      <a href="#" className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center">
        <img src={logoSvg} alt="CuteURL" className="h-11 w-auto" />
      </a>

      <div className="flex items-center max-w-[1100px] mx-auto px-6 py-4">

        <div className="w-28 shrink-0" aria-hidden="true" />

        <ul className="flex gap-7 list-none text-[0.88rem] flex-1 justify-center font-[Inter]"
            style={{ color: '#293353' }}>
          <li><a href="#how"      className="no-underline transition-colors hover:text-[#1e1b4b]" style={{ color: 'inherit' }}>{tr.how}</a></li>
          <li><a href="#features" className="no-underline transition-colors hover:text-[#1e1b4b]" style={{ color: 'inherit' }}>{tr.features}</a></li>
          <li><a href="#shorten"  className="no-underline transition-colors hover:text-[#1e1b4b]" style={{ color: 'inherit' }}>{tr.shorten}</a></li>
        </ul>

        <div className="flex items-center shrink-0">
          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className="flex items-center gap-1.5 bg-white/80 border border-[rgba(79,70,229,0.12)] rounded-lg px-2.5 py-1.5 text-[0.78rem] font-semibold cursor-pointer hover:border-primary-light transition-colors"
            style={{ color: 'rgba(79,70,229,0.5)' }}
          >
            <span style={{ color: lang === 'es' ? '#818CF8' : 'inherit' }}>ES</span>
            <span style={{ color: 'rgba(79,70,229,0.2)' }}>|</span>
            <span style={{ color: lang === 'en' ? '#818CF8' : 'inherit' }}>EN</span>
          </button>
        </div>

      </div>
    </nav>
  )
}
