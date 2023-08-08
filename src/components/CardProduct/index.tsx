import Image from 'next/image'

export default function CardProduct() {
  return (
    <div className="flex w-full flex-col items-center lg:max-w-3xl">
      <h1 className="w-full font-anton text-5xl font-normal lg:text-7xl">
        Morte Súbita
      </h1>
      <h3 className="w-full font-anton text-sm font-normal lg:text-lg">
        Máscara Hidratante
      </h3>

      <Image
        src="https://lolacosmetics.cdn.plataformaneo.com.br/produto/20201123175717_8088991912_D.png"
        width={600}
        height={600}
        className="h-80 w-80 lg:h-[500px] lg:w-[500px]"
        alt=""
      />
      <h4 className="w-full font-inter text-sm font-bold">v.AA/CD</h4>
    </div>
  )
}
