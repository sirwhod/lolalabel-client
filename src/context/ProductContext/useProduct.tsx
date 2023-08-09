import { useContext } from 'react'
import { ProductContext } from './index'

export const useProduct = () => {
  const context = useContext(ProductContext)

  return context
}
