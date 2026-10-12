import { useApp } from '../context/AppContext'
import { translations } from '../translations'
import logoSvg from '../Aseets/Logo Cute URL.svg'

export default function Footer() {
  const { lang } = useApp()
  const tr = translations[lang].footer

  return (
    <footer>
      <div className="flex items-center justify-between flex-wrap gap-4 max-w-[1100px] mx-auto px-6 py-10 border-t border-[rgba(79,70,229,0.12)]">
        <img src={logoSvg} alt="CuteURL" className="h-6 w-auto" />
        <div className="flex gap-6">
          {[
            { href: '#how',      label: tr.how },
            { href: '#features', label: tr.features },
            { href: 'https://github.com/M4NUEL-CERON/CuteURL', label: tr.backend, external: true },
          ].map(l => (
            <a
              key={l.label}
              href={l.href}
              target={l.external ? '_blank' : undefined}
              rel={l.external ? 'noreferrer' : undefined}
              className="text-[0.82rem] no-underline transition-colors hover:text-[#1e1b4b]"
              style={{ color: 'rgba(79,70,229,0.5)' }}
            >
              {l.label}
            </a>
          ))}
        </div>
        <span className="text-[0.82rem]" style={{ color: 'rgba(79,70,229,0.5)' }}>© 2026 CuteURL</span>
      </div>
    </footer>
  )
}
