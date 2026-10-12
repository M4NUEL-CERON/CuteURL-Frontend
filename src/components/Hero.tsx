import CatIllustration from './CatIllustration'
import { useApp } from '../context/AppContext'
import { translations } from '../translations'
import arrowSvg   from '../Aseets/Flecha dibujada.svg'
import notaSvg    from '../Aseets/Nota manuscrita.svg'
import rayoSvg    from '../Aseets/rayo_hero.svg'
import escudoSvg  from '../Aseets/escudo_hero.svg'
import corazonSvg from '../Aseets/corazon_hero.svg'

export default function Hero() {
  const { lang } = useApp()
  const tr = translations[lang].hero

  const stats = [
    { icon: rayoSvg,    value: '100%',  label: tr.stat1 },
    { icon: escudoSvg,  value: '0',     label: tr.stat2 },
    { icon: corazonSvg, value: '<1s',   label: tr.stat3 },
  ]

  return (
    <section className="pt-28 pb-20 relative overflow-hidden">
      <div
        className="absolute -top-[300px] -left-[250px] w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(79,70,229,0.15) 0%, transparent 70%)' }}
      />
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-2 gap-16 items-center">

          <div>
            <div className="flex items-end gap-3 mb-3">
              <img src={notaSvg}  className="h-7 w-auto"    alt="" aria-hidden="true" />
              <img src={arrowSvg} className="h-[38px] w-auto" alt="" aria-hidden="true" />
            </div>

            <h1 className="text-[clamp(2.4rem,5vw,3.5rem)] font-extrabold leading-[1.12] tracking-[-0.03em] mb-5 text-[#1e1b4b]">
              {tr.title1}<br />
              <span className="grad-text">{tr.title2}</span>
            </h1>

            <p className="text-[1.05rem] max-w-[440px] mb-8 leading-relaxed"
               style={{ color: 'rgba(79,70,229,0.5)' }}>
              {tr.subtitle}
            </p>

            <div className="flex gap-8 mb-9">
              {stats.map(s => (
                <div key={s.label} className="flex flex-col gap-1">
                  <img src={s.icon} className="w-[23px] h-[23px]" alt="" aria-hidden="true" />
                  <div className="text-[1.4rem] font-bold text-primary">{s.value}</div>
                  <div className="text-[0.78rem]" style={{ color: 'rgba(79,70,229,0.5)' }}>{s.label}</div>
                </div>
              ))}
            </div>

            <a
              href="#shorten"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-[14px] bg-grad text-white font-bold text-base no-underline transition-all hover:opacity-90 hover:-translate-y-0.5"
              style={{ boxShadow: '0 4px 20px rgba(79,70,229,0.35)' }}
            >
              {tr.cta}
            </a>
          </div>

          <CatIllustration />
        </div>
      </div>
    </section>
  )
}
