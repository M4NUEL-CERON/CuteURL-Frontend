import { useApp } from '../context/AppContext'
import { translations } from '../translations'
import linkComparisonSvg  from '../assets/how/link-comparison.svg'
import number1Svg from '../assets/how/number-1.svg'
import number2Svg from '../assets/how/number-2.svg'
import number3Svg from '../assets/how/number-3.svg'

const numbers = [number1Svg, number2Svg, number3Svg]

export default function HowItWorks() {
  const { lang } = useApp()
  const tr = translations[lang].how

  return (
    <section id="how" className="pt-8 pb-24">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="rounded-[32px] pt-8 pb-10 px-10 md:pt-10 md:pb-16 md:px-16" style={{ background: '#F2EDFF' }}>
          <div className="grid grid-cols-2 gap-20 items-center">

            <div>
              <p className="text-[2rem] font-bold" style={{ color: '#181E3B' }}>{tr.label}</p>

              <div className="flex flex-col gap-8 mt-8">
                {tr.steps.map((s, i) => (
                  <div key={s.title} className="flex gap-5 items-start">
                    <img src={numbers[i]} alt={`${i + 1}`} className="shrink-0 w-10 h-10" />
                    <div>
                      <div className="font-[Patrick_Hand] text-[1.2rem] mb-1" style={{ color: '#181E3B' }}>{s.title}</div>
                      <div className="font-[Inter] text-[0.88rem]" style={{ color: '#7580A8' }}>{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <img src={linkComparisonSvg} alt="" aria-hidden="true" className="w-full h-auto scale-110" />

          </div>
        </div>
      </div>
    </section>
  )
}
