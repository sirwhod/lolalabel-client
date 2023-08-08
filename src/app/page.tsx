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
          <div className="flex w-full flex-col items-center justify-center gap-8 bg-lola-white-500 p-8">
            <CardProduct />
            <StampsContent />
          </div>
        </div>

        <div className="w-full scroll-smooth bg-lola-pink-500 lg:h-full lg:overflow-auto">
          <div className="flex w-full flex-col items-center gap-3 bg-lola-orange-500 p-8">
            <h1 className="font-anton text-4xl text-lola-white-500">
              Saiba Mais
            </h1>
            <p className="text-center font-inter text-base text-lola-white-500">
              Veja abaixo todas as informações do produto, em sua respectiva
              linguagem!
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
