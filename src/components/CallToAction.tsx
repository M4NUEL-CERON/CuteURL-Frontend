import { useApp } from '../context/AppContext'
import { translations } from '../translations'

export default function CallToAction() {
  const { lang } = useApp()
  const tr = translations[lang].cta

  return (
    <section className="cta">
      <div className="container">
        <h2 className="cta__title">
          {tr.title1}<br />
          <span className="grad-text">{tr.title2}</span>
        </h2>
        <p className="cta__sub">{tr.sub}</p>
        <a href="#shorten" className="btn btn-primary btn-lg">{tr.btn}</a>
        <div className="cta__pills">
          <span className="cta__pill">cuteurl.io/abc123</span>
          <span className="cta__pill">cuteurl.io/x9k2</span>
          <span className="cta__pill">cuteurl.io/zp8r</span>
          <span className="cta__pill">cuteurl.io/mn4q</span>
        </div>
      </div>
    </section>
  )
}
