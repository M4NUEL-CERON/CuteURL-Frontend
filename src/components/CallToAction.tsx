import { useApp } from '../context/AppContext'
import { translations } from '../translations'

export default function CallToAction() {
  const { lang } = useApp()
  const tr = translations[lang].cta

  return (
    <section className="bg-grad-subtle border-t border-b border-[rgba(79,70,229,0.12)] py-24 text-center relative overflow-hidden">
      <div
        className="absolute w-[600px] h-[600px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(79,70,229,0.1), transparent 70%)' }}
      />
      <div className="max-w-[1100px] mx-auto px-6 relative">
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.03em] mb-4 text-[#1e1b4b]">
          {tr.title1}<br />
          <span className="grad-text">{tr.title2}</span>
        </h2>
        <p className="mb-8 text-[0.95rem]" style={{ color: 'rgba(79,70,229,0.5)' }}>{tr.sub}</p>
        <a
          href="#shorten"
          className="inline-flex items-center justify-center px-8 py-3.5 rounded-[14px] bg-grad text-white font-bold text-base no-underline transition-all hover:opacity-90 hover:-translate-y-0.5"
          style={{ boxShadow: '0 4px 20px rgba(79,70,229,0.35)' }}
        >
          {tr.btn}
        </a>
        <div className="flex justify-center gap-3 flex-wrap mt-10">
          {['cuteurl.io/abc123', 'cuteurl.io/x9k2', 'cuteurl.io/zp8r', 'cuteurl.io/mn4q'].map(p => (
            <span
              key={p}
              className="bg-white/70 border border-[rgba(79,70,229,0.12)] rounded-full px-4 py-1.5 text-[0.75rem] font-mono"
              style={{ color: 'rgba(79,70,229,0.5)' }}
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
