import { useApp } from '../context/AppContext'
import { translations } from '../translations'
import logoSvg from '../Aseets/Logo Cute URL.svg'

export default function Footer() {
  const { lang } = useApp()
  const tr = translations[lang].footer

  return (
    <footer>
      <div className="footer">
        <img src={logoSvg} alt="CuteURL" className="footer__logo-img" />
        <div className="footer__links">
          <a href="#how">{tr.how}</a>
          <a href="#features">{tr.features}</a>
          <a href="https://github.com/M4NUEL-CERON/CuteURL" target="_blank" rel="noreferrer">
            {tr.backend}
          </a>
        </div>
        <span className="footer__copy">© 2026 CuteURL</span>
      </div>
    </footer>
  )
}
