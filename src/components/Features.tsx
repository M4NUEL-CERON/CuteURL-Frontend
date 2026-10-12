import { useApp } from '../context/AppContext'
import { translations } from '../translations'

export default function Features() {
  const { lang } = useApp()
  const tr = translations[lang].features

  return (
    <section id="features" className="section">
      <div className="container">
        <p className="section-label">{tr.label}</p>
        <h2 className="section-title">
          {tr.title1}<br />
          <span className="grad-text">{tr.title2}</span>
        </h2>
        <p className="section-sub">{tr.sub}</p>

        <div className="features__grid">
          {tr.items.map(f => (
            <div key={f.title} className="feature-card">
              <div className="feature-card__icon">{f.icon}</div>
              <h3 className="feature-card__title">{f.title}</h3>
              <p className="feature-card__desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
