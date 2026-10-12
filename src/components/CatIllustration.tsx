import catSvg from '../Aseets/Gato con enlace · Vector.svg'

export default function CatIllustration() {
  return (
    <div className="relative flex justify-center">
      <img
        src={catSvg}
        className="w-full max-w-[560px]"
        style={{ filter: 'drop-shadow(0 20px 50px rgba(79,70,229,0.18))' }}
        alt="CuteURL cat"
      />
    </div>
  )
}
