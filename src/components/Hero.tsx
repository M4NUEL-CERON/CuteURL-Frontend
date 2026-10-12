import CatIllustration from './CatIllustration'
import { useApp } from '../context/AppContext'
import { translations } from '../translations'
import arrowSvg   from '../assets/hero/arrow-sketch.svg'
import notaSvg    from '../assets/hero/handwritten-note.svg'
import rayoSvg    from '../assets/hero/stat-fast.svg'
import escudoSvg  from '../assets/hero/stat-no-signup.svg'
import corazonSvg from '../assets/hero/stat-simple.svg'

export default function Hero() {
  const { lang } = useApp()
  const tr = translations[lang].hero

  const stats = [
    { icon: rayoSvg,    value: '',  label: tr.stat1 },
    { icon: escudoSvg,  value: '',     label: tr.stat2 },
    { icon: corazonSvg, value: '',   label: tr.stat3 },
  ]

  return (
    <section className="pt-10 pb-20 relative overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-2  items-center">

          <div>
            <div className="flex items-end gap-3 mb-3">
              <img src={notaSvg}  className="h-10 w-auto relative -top-1" alt="" aria-hidden="true" />
              <img src={arrowSvg} className="h-11 w-auto" alt="" aria-hidden="true" />
            </div>

            <h1 className="font-[Nunito] text-[clamp(2.4rem,5vw,3.5rem)] font-extrabold leading-[1.12] tracking-[-0.03em] mb-5 text-[#181E3B]">
              {tr.title1}<br />
              <span className="grad-text">{tr.title2}</span>
            </h1>

            <p className="text-[1.05rem] max-w-[440px] mb-8 leading-relaxed"
               style={{ color: '#293353' }}>
              {tr.subtitle}
            </p>

            <div className="flex gap-6 mb-9 w-full">
              {stats.map(s => (
                <div key={s.label} className="flex items-center gap-2 flex-1 min-w-0">
                  <img src={s.icon} className="w-7 h-7 shrink-0" alt="" aria-hidden="true" />
                  <div className="text-[0.78rem] leading-snug" style={{ color: 'rgba(79,70,229,0.5)' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <CatIllustration />
        </div>
      </div>
    </section>
  )
}
