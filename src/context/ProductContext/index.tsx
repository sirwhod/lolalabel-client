'use client'
import { createContext, useEffect, useState } from 'react'
import {
  ContextProduct,
  InstructionProps,
  ProductProps,
  ProductProviderProps,
  StampProps,
} from './types'
import { fetchDataProduct } from './utils'

export const ProductContext = createContext<ContextProduct>(
  {} as ContextProduct,
)

export function ProductProvider({ children }: ProductProviderProps) {
  const [idProduct, setIdProduct] = useState<string>(
    'e248abda-43db-4c56-839b-6d104fae4868',
  )
  const [product, setProduct] = useState<ProductProps | null>()
  const [stamps, setStamps] = useState<StampProps[]>()
  const [instructions, setInstructions] = useState<InstructionProps[]>()

  async function getDataProduct() {
    await fetchDataProduct(idProduct).then((response) => {
      setProduct(response)

      if (response !== null && response !== undefined) {
        const product: ProductProps = response
        setStamps(product.Stamps)
        setInstructions(product.Instructions)
      }
    })
  }

  useEffect(() => {
    getDataProduct()
  }, [])

  return (
    <ProductContext.Provider
      value={{
        product,
        stamps,
        instructions,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}
