import { useApp } from '../context/AppContext'
import { translations } from '../translations'

export default function Navbar() {
  const { theme, lang, toggleTheme, toggleLang } = useApp()
  const tr = translations[lang].nav

  return (
    <nav className="navbar">
      <div className="navbar__inner">

        <button className="navbar__icon-btn" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'dark' ? '🌙' : '☀️'}
        </button>

        <a href="#" className="navbar__logo">
          🔗 cute<span className="navbar__logo-dot">url</span>
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
          <a href="#shorten" className="btn btn-primary">{tr.cta}</a>
        </div>

      </div>
    </nav>
  )
}
