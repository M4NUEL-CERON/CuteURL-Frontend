import { useApp } from '../context/AppContext'
import { translations } from '../translations'
import logoSvg from '../Aseets/Logo Cute URL.svg'

export default function Navbar() {
  const { lang, toggleLang } = useApp()
  const tr = translations[lang].nav

  return (
    <nav className="navbar">
      <div className="navbar__inner">

        <a href="#" className="navbar__logo">
          <img src={logoSvg} alt="CuteURL" className="navbar__logo-img" />
        </a>

        <ul className="navbar__links">
          <li><a href="#how">{tr.how}</a></li>
          <li><a href="#features">{tr.features}</a></li>
          <li><a href="#shorten">{tr.shorten}</a></li>
        </ul>

        <div className="navbar__right">
          <button className="lang-switch" onClick={toggleLang} aria-label="Toggle language">
            <span className={`lang-switch__opt${lang === 'es' ? ' active' : ''}`}>ES</span>
            <span className="lang-switch__divider">|</span>
            <span className={`lang-switch__opt${lang === 'en' ? ' active' : ''}`}>EN</span>
          </button>
        </div>

      </div>
    </nav>
  )
}
