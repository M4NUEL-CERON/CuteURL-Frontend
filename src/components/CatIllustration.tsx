import catSvg from '../Aseets/Gato con enlace · Vector.svg'

export default function CatIllustration() {
  return (
    <div className="hero__visual">
      <div className="url-pill url-pill-long">
        https://ejemplo.com/pagina/muy/larga?ref=social
      </div>
      <div className="url-pill url-pill-short2">cuteurl.io/x9k2</div>
      <div className="url-pill url-pill-short">cuteurl.io/abc123</div>

      <img src={catSvg} className="cat-svg" alt="CuteURL cat" />
    </div>
  )
}
