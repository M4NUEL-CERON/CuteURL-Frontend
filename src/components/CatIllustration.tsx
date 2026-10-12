import catSvg from '../assets/illustrations/cat-with-link.svg'

export default function CatIllustration() {
  return (
    <div className="relative flex justify-center">
      <img
        src={catSvg}
        className="w-full max-w-[560px]"
        alt="CuteURL cat"
      />
    </div>
  )
}
