import Image from "next/image"

export default function Hero(props) {
  const { title, image } = props
  return(
    <div className="relative w-full h-80 flex items-center justify-center">
      <h1 className="text-6xl font-black z-10 text-white">{title}</h1>
      <Image
        src={image}
        fill={true}
        alt="hero"
        className="absolute object-cover opacity-75"
      />
    </div>
  )
}