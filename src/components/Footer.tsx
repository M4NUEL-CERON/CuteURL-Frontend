import { useApp } from '../context/AppContext'
import { translations } from '../translations'
import logoLightSvg from '../assets/brand/logo-light.svg'
import waveDividerSvg from '../assets/footer/wave-divider.svg'

const GITHUB_URL = 'https://github.com/M4NUEL-CERON'
const LINKEDIN_URL = 'https://www.linkedin.com/in/manuel-cerón-564b52304'

export default function Footer() {
  const { lang } = useApp()
  const tr = translations[lang].footer

  return (
    <footer>
      <img src={waveDividerSvg} alt="" aria-hidden="true" className="w-full h-auto block" />
      <div style={{ background: '#171D37' }}>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-[1100px] mx-auto px-6 pb-16">
          <img src={logoLightSvg} alt="CuteURL" className="h-14 w-auto mx-auto md:mx-0" />

          <div className="text-center">
            <h2 className="font-[Patrick_Hand] text-[1.8rem] text-white mb-2">{tr.title}</h2>
            <p className="text-[0.95rem] mb-5" style={{ color: 'rgba(255,255,255,0.6)' }}>{tr.sub}</p>
            <a
              href="#shorten"
              className="inline-block bg-grad text-white font-bold text-[0.95rem] no-underline rounded-[14px] px-7 py-3 transition-all hover:opacity-90 hover:-translate-y-0.5"
            >
              {tr.btn}
            </a>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="flex items-center justify-between flex-wrap gap-4 max-w-[1100px] mx-auto px-6 py-6">
            <span className="text-[0.82rem]" style={{ color: 'rgba(255,255,255,0.5)' }}>
              © 2026 Cute URL. Made with ♥ for the internet.
            </span>
            <div className="flex items-center gap-4">
              <a href={GITHUB_URL} target="_blank" rel="noreferrer" aria-label="GitHub" style={{ color: 'rgba(255,255,255,0.5)' }} className="transition-colors hover:text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.755-1.333-1.755-1.089-.744.084-.729.084-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn" style={{ color: 'rgba(255,255,255,0.5)' }} className="transition-colors hover:text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76c-1.17 0-2.11-.95-2.11-2.11 0-1.17.94-2.11 2.11-2.11 1.16 0 2.11.94 2.11 2.11 0 1.16-.95 2.11-2.11 2.11zm15.13 12.34h-3.62v-5.3c0-1.26-.02-2.89-1.76-2.89-1.76 0-2.03 1.38-2.03 2.8v5.39H9.57V9.24h3.48v1.47h.05c.48-.92 1.67-1.9 3.44-1.9 3.68 0 4.36 2.42 4.36 5.57v5.72z" /></svg>
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}
