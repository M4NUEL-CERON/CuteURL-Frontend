import { useApp } from '../context/AppContext'
import { translations } from '../translations'

export default function HowItWorks() {
  const { lang } = useApp()
  const tr = translations[lang].how

  return (
    <section id="how" className="py-24">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-2 gap-20 items-center">

          <div>
            <p className="text-[0.8rem] font-semibold tracking-[0.1em] uppercase text-primary-light mb-3">{tr.label}</p>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-extrabold tracking-[-0.02em] text-[#1e1b4b]">
              {tr.title1}<br />
              <span className="grad-text">{tr.title2}</span>
            </h2>

            <div className="flex flex-col gap-8 mt-8">
              {tr.steps.map((s, i) => (
                <div key={s.title} className="flex gap-5 items-start">
                  <div
                    className="shrink-0 w-10 h-10 rounded-xl bg-grad flex items-center justify-center font-extrabold text-[0.95rem] text-white"
                    style={{ boxShadow: '0 4px 14px rgba(79,70,229,0.35)' }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <div className="font-bold text-[1rem] mb-1 text-[#1e1b4b]">{s.title}</div>
                    <div className="text-[0.88rem]" style={{ color: 'rgba(79,70,229,0.5)' }}>{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="bg-white/85 border border-[rgba(79,70,229,0.12)] rounded-[20px] p-7 flex flex-col gap-4"
            style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.08)' }}
          >
            <div>
              <div className="text-[0.72rem] font-semibold tracking-[0.08em] uppercase mb-1" style={{ color: 'rgba(79,70,229,0.5)' }}>{tr.before}</div>
              <div className="bg-[#f5f5ff] border border-[rgba(79,70,229,0.12)] rounded-[10px] px-4 py-3 font-mono text-[0.8rem] overflow-hidden text-ellipsis whitespace-nowrap" style={{ color: 'rgba(79,70,229,0.5)' }}>
                https://www.ejemplo.com/blog/articulos/2024/como-hacer-algo-muy-largo-aqui
              </div>
            </div>
            <div className="text-center text-primary-light text-xl">↓</div>
            <div>
              <div className="text-[0.72rem] font-semibold tracking-[0.08em] uppercase mb-1" style={{ color: 'rgba(79,70,229,0.5)' }}>{tr.after}</div>
              <div className="bg-[#f5f5ff] border border-primary/30 rounded-[10px] px-4 py-3 font-mono text-[0.8rem] text-primary">
                cuteurl.io/k9x2p
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
