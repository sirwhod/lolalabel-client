import { ReactNode } from 'react'

export interface StampProps {
  id: string
  nameStamp: string
  image: string
  active: boolean
}

export interface InstructionProps {
  id: string
  language: string
  whatIAm: string
  modeOfUse: string
  Precaution: string
  productId: string
}

export interface ProductProps {
  id: string
  version: string
  productName: string
  productLine: string
  productImage: string
  composition: string
  Stamps: StampProps[]
  Instructions: InstructionProps[]
}

export interface ContextProduct {
  product: ProductProps | null | undefined
  stamps: StampProps[] | undefined
  instructions: InstructionProps[] | undefined
}

export interface ProductProviderProps {
  children: ReactNode
}
