import { useApp } from '../context/AppContext'
import { translations } from '../translations'
import iconInstant   from '../assets/features/icon-instant.svg'
import iconClean     from '../assets/features/icon-clean.svg'
import iconReliable  from '../assets/features/icon-reliable.svg'
import iconApi       from '../assets/features/icon-api.svg'

const icons = [iconInstant, iconClean, iconReliable, iconApi]

export default function Features() {
  const { lang } = useApp()
  const tr = translations[lang].features

  return (
    <section id="features" className="pt-8 pb-12 md:pb-24">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-2 sm:gap-5">
          {tr.items.map((f, i) => (
            <div
              key={f.title}
              className="bg-white/85 rounded-2xl p-3 sm:p-7 transition-all duration-200 hover:-translate-y-1 cursor-default"
              style={{ boxShadow: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 12px 40px rgba(79,70,229,0.12)')}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
            >
              <img src={icons[i]} alt="" aria-hidden="true" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4" />
              <h3 className="font-[Patrick_Hand] text-[1.3rem] leading-tight mb-2 text-[#1e1b4b]">{f.title}</h3>
              <p className="text-[0.85rem] leading-relaxed" style={{ color: '#66729B' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
