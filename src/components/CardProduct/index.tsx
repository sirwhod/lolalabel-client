import { useProduct } from '@/context/ProductContext/useProduct'
import Image from 'next/image'
import { LoadingProduct } from '../Assets/LoadingProduct'
import { CircleNotch } from 'phosphor-react'

export default function CardProduct() {
  const { product } = useProduct()

  if (product !== undefined && product !== null) {
    return (
      <div className="flex w-full flex-col items-center lg:max-w-3xl">
        <h1 className="w-full font-anton text-5xl font-normal lg:text-7xl">
          {product.productLine}
        </h1>
        <h3 className="w-full font-anton text-sm font-normal lg:text-lg">
          {product.productName}
        </h3>

        {product.productImage !== '' ? (
          <Image
            src={product.productImage}
            width={600}
            height={600}
            className="h-80 w-80 lg:h-[500px] lg:w-[500px]"
            alt=""
          />
        ) : (
          <div className="flex items-center justify-center overflow-hidden lg:h-[500px] lg:w-[500px]">
            <LoadingProduct size={320} />
          </div>
        )}
        <h4 className="w-full font-inter text-sm font-bold">
          {product.version}
        </h4>
      </div>
    )
  } else {
    return (
      <div className="flex w-full animate-pulse flex-col items-start gap-1 lg:max-w-3xl">
        <div className="h-12 w-1/2 rounded-md bg-orange-200 lg:h-20" />
        <div className="h-4 w-1/3 rounded-md bg-orange-200 lg:h-7" />
        <div className="relative flex w-full items-center justify-center">
          <div className="relative z-10 flex items-center justify-center overflow-hidden lg:h-[500px] lg:w-[500px]">
            <LoadingProduct size={320} />
          </div>
          <CircleNotch
            size={48}
            weight="bold"
            className="absolute z-20 animate-spin text-lola-white-500"
          />
        </div>
        <div className="h-4 w-1/6 rounded-md bg-orange-200 lg:h-5" />
      </div>
    )
  }
}
