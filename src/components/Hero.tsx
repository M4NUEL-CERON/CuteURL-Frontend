import CatIllustration from './CatIllustration'
import { useApp } from '../context/AppContext'
import { translations } from '../translations'
import arrowSvg  from '../Aseets/Flecha dibujada.svg'
import notaSvg   from '../Aseets/Nota manuscrita.svg'
import rayoSvg   from '../Aseets/rayo_hero.svg'
import escudoSvg from '../Aseets/escudo_hero.svg'
import corazonSvg from '../Aseets/corazon_hero.svg'

export default function Hero() {
  const { lang } = useApp()
  const tr = translations[lang].hero

  return (
    <section className="hero section">
      <div className="container">
        <div className="hero__inner">
          <div className="hero__content">

            <div className="hero__badge-row">
              <img src={notaSvg}  className="hero__nota"  alt="" aria-hidden="true" />
              <img src={arrowSvg} className="hero__arrow" alt="" aria-hidden="true" />
            </div>

            <h1 className="hero__title">
              {tr.title1}<br />
              <span className="grad-text">{tr.title2}</span>
            </h1>

            <p className="hero__subtitle">{tr.subtitle}</p>

            <div className="hero__stats">
              <div className="hero__stat">
                <img src={rayoSvg} className="hero__stat-icon" alt="" aria-hidden="true" />
                <div className="hero__stat-value">100%</div>
                <div className="hero__stat-label">{tr.stat1}</div>
              </div>
              <div className="hero__stat">
                <img src={escudoSvg} className="hero__stat-icon" alt="" aria-hidden="true" />
                <div className="hero__stat-value">0</div>
                <div className="hero__stat-label">{tr.stat2}</div>
              </div>
              <div className="hero__stat">
                <img src={corazonSvg} className="hero__stat-icon" alt="" aria-hidden="true" />
                <div className="hero__stat-value">&lt;1s</div>
                <div className="hero__stat-label">{tr.stat3}</div>
              </div>
            </div>

            <a href="#shorten" className="btn btn-primary btn-lg">{tr.cta}</a>
          </div>
          <CatIllustration />
        </div>
      </div>
    </section>
  )
}
