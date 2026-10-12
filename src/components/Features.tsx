import { useApp } from '../context/AppContext'
import { translations } from '../translations'

export default function Features() {
  const { lang } = useApp()
  const tr = translations[lang].features

  return (
    <section id="features" className="py-24">
      <div className="max-w-[1100px] mx-auto px-6">
        <p className="text-[0.8rem] font-semibold tracking-[0.1em] uppercase text-primary-light mb-3">{tr.label}</p>
        <h2 className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-extrabold tracking-[-0.02em] text-[#1e1b4b]">
          {tr.title1}<br />
          <span className="grad-text">{tr.title2}</span>
        </h2>
        <p className="mt-3 max-w-[500px] text-[0.95rem]" style={{ color: 'rgba(79,70,229,0.5)' }}>{tr.sub}</p>

        <div className="grid grid-cols-4 gap-5 mt-12">
          {tr.items.map(f => (
            <div
              key={f.title}
              className="bg-white/85 border border-[rgba(79,70,229,0.12)] rounded-2xl p-7 transition-all duration-200 hover:-translate-y-1 cursor-default"
              style={{ boxShadow: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 12px 40px rgba(79,70,229,0.12)')}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-[1.4rem] mb-4">
                {f.icon}
              </div>
              <h3 className="text-[1rem] font-bold mb-2 text-[#1e1b4b]">{f.title}</h3>
              <p className="text-[0.85rem] leading-relaxed" style={{ color: 'rgba(79,70,229,0.5)' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
