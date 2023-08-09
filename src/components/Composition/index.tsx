import { useProduct } from '@/context/ProductContext/useProduct'
import { CircleNotch } from 'phosphor-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function Composition() {
  const { product } = useProduct()

  if (product !== undefined && product !== null) {
    const { composition } = product
    return (
      <div className="flex w-full flex-col items-center gap-4 bg-lola-red-500 p-8">
        <h2 className="w-full font-anton text-2xl text-lola-white-500">
          Minha composição:
        </h2>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          className="w-full font-inter text-base text-lola-white-500"
        >
          {composition}
        </ReactMarkdown>
      </div>
    )
  } else {
    return (
      <div className="relative flex w-full flex-col items-center justify-center gap-4 bg-lola-red-500 p-8">
        <div className="relative z-10 flex w-full animate-pulse flex-col items-center justify-center gap-2 overflow-hidden">
          <div className="h-8 w-full rounded-md bg-red-400" />
          <div className="h-3 w-full rounded-sm bg-red-400" />
          <div className="h-3 w-full rounded-sm bg-red-400" />
          <div className="h-3 w-full rounded-sm bg-red-400" />
          <div className="h-3 w-full rounded-sm bg-red-400" />
          <div className="h-3 w-full rounded-sm bg-red-400" />
          <div className="h-3 w-full rounded-sm bg-red-400" />
          <div className="h-3 w-full rounded-sm bg-red-400" />
          <div className="h-3 w-full rounded-sm bg-red-400" />
        </div>
        <CircleNotch
          size={48}
          weight="bold"
          className="absolute z-20 animate-spin text-lola-white-500"
        />
      </div>
    )
  }
}
