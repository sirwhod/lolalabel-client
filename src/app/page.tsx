'use client'

import { LanguageTabs } from '@/components/LanguageTabs'
import Footer from '@/components/Footer'
import Composition from '@/components/Composition'
import ModalAlert from '@/components/ModalAlert'
import CardProduct from '@/components/CardProduct'
import StampsContent from '@/components/StampsContent/inde'

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col overflow-x-hidden lg:grid  lg:grid-cols-2">
        <div className="lg:flex lg:max-h-full lg:w-full lg:justify-center">
          <ModalAlert />
          <div className="flex w-full flex-col items-center justify-center bg-lola-white-500 p-8">
            <CardProduct />
            <StampsContent />
          </div>
        </div>

        <div className="w-full scroll-smooth bg-lola-pink-500 lg:h-full lg:overflow-auto">
          <div className="flex w-full flex-col items-center gap-1 bg-lola-orange-500 p-6 lg:p-7">
            <h1 className="font-anton text-xl text-lola-white-500 lg:text-2xl">
              CONHEÇA ESTE PRODUTO LOLÍSTICO!
            </h1>
            <p className="text-center font-inter text-xs text-lola-white-500 lg:text-sm">
              Selecione seu idioma abaixo e confira todas as as informações do
              produto!
            </p>
          </div>

          <LanguageTabs />

          <Composition />

          <Footer />
        </div>
      </div>
    </>
  )
}
