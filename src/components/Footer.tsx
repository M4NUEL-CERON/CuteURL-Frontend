import { useApp } from '../context/AppContext'
import { translations } from '../translations'

export default function Footer() {
  const { lang } = useApp()
  const tr = translations[lang].footer

  return (
    <footer>
      <div className="footer">
        <span className="footer__logo grad-text">🔗 cuteurl</span>
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
