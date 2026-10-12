import { useApp } from '../context/AppContext'
import { translations } from '../translations'

export default function HowItWorks() {
  const { lang } = useApp()
  const tr = translations[lang].how

  return (
    <section id="how" className="section">
      <div className="container">
        <div className="how__inner">
          <div>
            <p className="section-label">{tr.label}</p>
            <h2 className="section-title">
              {tr.title1}<br />
              <span className="grad-text">{tr.title2}</span>
            </h2>
            <div className="how__steps">
              {tr.steps.map((s, i) => (
                <div key={s.title} className="how__step">
                  <div className="how__step-num">{i + 1}</div>
                  <div>
                    <div className="how__step-title">{s.title}</div>
                    <div className="how__step-desc">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="how__mockup">
            <div>
              <div className="mockup__label">{tr.before}</div>
              <div className="mockup__url">
                https://www.ejemplo.com/blog/articulos/2024/como-hacer-algo-muy-largo-aqui
              </div>
            </div>
            <div className="mockup__arrow">↓</div>
            <div>
              <div className="mockup__label">{tr.after}</div>
              <div className="mockup__url short">cuteurl.io/k9x2p</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
