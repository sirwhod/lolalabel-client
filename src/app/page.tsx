'use client'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import Image from 'next/image'
import {
  CaretDown,
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  Warning,
  YoutubeLogo,
} from 'phosphor-react'

import * as Accordion from '@radix-ui/react-accordion'
import * as Dialog from '@radix-ui/react-dialog'
import { BR, US } from 'country-flag-icons/react/3x2'
import { CertifiedVegan } from '@/components/stamps/CertifiedVegan'
import { ThermalProtection } from '@/components/stamps/ThermalProtection'
import { ProtectionColor } from '@/components/stamps/ProtectionColor'
import { WavesRio } from '@/components/ImagesComponents/WavesRio'
import { LogoLolaFromRio } from '@/components/ImagesComponents/LogoLolaFromRio'

export default function Home() {
  return (
    <>
      <div className="relative flex w-full items-center justify-center bg-lola-pink-500 lg:mt-0">
        <div className="absolute z-20 ">
          <LogoLolaFromRio size={72} />
        </div>
        <div className="max-w-screen relative z-10 max-h-20 overflow-hidden lg:w-full">
          <WavesRio color="#FDCE01" />
        </div>
      </div>
      <div className="flex w-full flex-col overflow-x-hidden lg:grid  lg:grid-cols-2">
        <div className="lg:flex lg:max-h-full lg:w-full lg:justify-center">
          <Dialog.Root defaultOpen>
            <Dialog.Trigger />
            <Dialog.Portal>
              <Dialog.Overlay className="fixed z-30 h-screen w-screen bg-white bg-opacity-30 backdrop-blur-sm" />
              <Dialog.Content className="min-w-xs fixed left-1/2 top-4 z-40 flex max-h-64 -translate-x-1/2 flex-col items-center justify-center gap-5 bg-lola-pink-500 object-center p-8">
                <Dialog.Title className="flex items-center justify-center gap-2">
                  <Warning
                    size={64}
                    weight="fill"
                    className="text-lola-yellow-500"
                  />
                  <h1 className="font-anton text-4xl text-lola-yellow-500">
                    Atenção
                  </h1>
                </Dialog.Title>
                <Dialog.Description className="flex flex-col items-center justify-center gap-5 ">
                  <span className="font-inter text-base text-lola-yellow-500">
                    As imagens contidas neste site são meramente ilustrativas!
                  </span>

                  <Dialog.Close className="bg-lola-yellow-500 px-8 py-0.5 font-anton">
                    OK!
                  </Dialog.Close>
                </Dialog.Description>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
          <div className="flex w-full flex-col items-center justify-center gap-8 bg-lola-white-500 p-8">
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
            <div className="bg-lola flex w-full flex-wrap justify-end gap-2 p-8 lg:max-w-3xl">
              <ThermalProtection size={72} />
              <ProtectionColor size={72} />
              <CertifiedVegan size={72} />
              {/* <CrueltyFree size={64} />
            <CosmeCert size={64} />
            <Recycle size={64} />
            <ReuseMe size={64} />
            <Glitter size={64} />
            <Vegan size={64} />
            <Pea size={64} /> */}
            </div>
          </div>
        </div>
        <div className="w-full bg-lola-pink-500 lg:h-full lg:overflow-auto">
          <div className="flex w-full flex-col items-center gap-3 bg-lola-orange-500 p-8">
            <h1 className="font-anton text-4xl text-lola-white-500">
              Saiba Mais
            </h1>
            <p className="text-center font-inter text-base text-lola-white-500">
              Veja abaixo todas as informações do produto, em sua respectiva
              linguagem!
            </p>
          </div>
          <Accordion.Root type="single" defaultValue="Português" collapsible>
            <Accordion.Item value="Português">
              <Accordion.Header>
                <Accordion.Trigger className="group flex w-full items-center justify-between bg-lola-yellow-500 p-4">
                  <BR className="h-10" />
                  <span className="font-oswald text-4xl font-bold">
                    Português
                  </span>
                  <CaretDown
                    size={32}
                    className="group-data-[state=open]:translate-y transition-all group-data-[state=open]:rotate-180"
                  />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="transition-all">
                <div className="flex w-full flex-col gap-8 bg-lola-green-500 p-8 text-lola-white-500">
                  <h1 className="w-full text-center font-inter text-3xl font-bold">
                    O que Sou?
                  </h1>
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    className="font-inter text-base font-normal"
                  >
                    {`A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
`}
                  </ReactMarkdown>
                  <h1 className="w-full text-center font-inter text-3xl font-bold">
                    Modo de uso
                  </h1>
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    className="font-inter text-base font-normal"
                  >
                    {`A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
`}
                  </ReactMarkdown>
                  <h1 className="w-full text-center font-inter text-3xl font-bold">
                    Precauções
                  </h1>
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    className="font-inter text-base font-normal"
                  >
                    {`A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
`}
                  </ReactMarkdown>
                </div>
              </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="Inglês">
              <Accordion.Header>
                <Accordion.Trigger className="group flex w-full items-center justify-between bg-lola-yellow-500 p-4">
                  <US className="h-10" />
                  <span className="font-oswald text-4xl font-bold">Inglês</span>
                  <CaretDown
                    size={32}
                    className="group-data-[state=open]:translate-y transition-all group-data-[state=open]:rotate-180"
                  />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="transition-all">
                <div className="flex w-full flex-col gap-8 bg-lola-green-500 p-8 text-lola-white-500">
                  <h1 className="w-full text-center font-inter text-3xl font-bold">
                    O que Sou?
                  </h1>
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    className="font-inter text-base font-normal"
                  >
                    {`A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
`}
                  </ReactMarkdown>
                  <h1 className="w-full text-center font-inter text-3xl font-bold">
                    Modo de uso
                  </h1>
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    className="font-inter text-base font-normal"
                  >
                    {`A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
`}
                  </ReactMarkdown>
                  <h1 className="w-full text-center font-inter text-3xl font-bold">
                    Precauções
                  </h1>
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    className="font-inter text-base font-normal"
                  >
                    {`A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
`}
                  </ReactMarkdown>
                </div>
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>
          <div className="flex w-full flex-col items-center gap-4 bg-lola-red-500 p-8">
            <h2 className="w-full font-anton text-2xl text-lola-white-500">
              Composição{' '}
              <span className="font-anton text-lg text-lola-white-500">
                (Composition)
              </span>
            </h2>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              className="w-full font-inter text-base text-lola-white-500"
            >
              {`Aqua/Eau/Water, Cetearyl Alcohol, Behentrimonium Methosulfate,
          Caprylic/Capric Triglyceride, Orbignya Oleifera Seed Oil, Peg-180M,
          Phytosteryl/Behenyl,/Octyldodecyl Lauroyl Glutamate, Aqua (and)
          Hydrolyzed Vegetable Protein PG-Propyl Silanetriol, PPG-3 Benzyl Ether
          Myristrate, Theobroma Cacao (Cocoa), Seed Butter, Hydrogenated
          Farnesene, Aloe Barbadensis Leaf Extract, Cetrimonium Chloride, Sodium
          PCA (and) Sodium Lactate (and) Aginine (and) Aspartic acid (and) PCA
          (and) Glycine (and) Alanine (and) Serine (and) Valine (and) Proline
          (and) Threonine (and) Isoleucine (and) Histidine (and)
          Phenylanine/Propylene Glycol, Hydroxyethyl Urea, Disodium EDTA, BHT,
          Citric Acid, Caprylyl Glycol (and) Phenoxyethanol, Fragrance/Parfum,
          Linalool, Limonene.`}
            </ReactMarkdown>
          </div>
          <footer className="flex w-full flex-col items-center">
            <div className="flex w-full flex-col gap-4 p-8 text-lola-white-500">
              <div className="flex w-full flex-col items-center justify-center gap-2 ">
                <h4 className="text-center font-anton text-2xl font-medium text-lola-white-500">
                  Contato
                </h4>
                <p className="flex gap-1 text-center font-inter">
                  LOLAMAIL@LOLACOSMETICS.COM.BR
                </p>
                <p className="flex gap-1 text-center font-inter">
                  SAC:SEG À SEX DAS 9H ÀS 18H
                </p>
              </div>
              <div className="flex w-full flex-col gap-2">
                <h4 className="w-full text-center font-anton text-2xl font-medium text-lola-white-500">
                  #SIGALOLA
                </h4>
                <div className="flex w-full items-center justify-center gap-2">
                  <a
                    href="https://www.facebook.com/lolacosmetics/"
                    target="_blank"
                    className="flex flex-col items-center justify-center text-lola-white-500"
                  >
                    <FacebookLogo size={32} weight="fill" />
                  </a>
                  <a
                    href="https://www.instagram.com/lolacosmetics/?hl=pt-br"
                    target="_blank"
                    className="flex flex-col items-center justify-center text-lola-white-500"
                  >
                    <InstagramLogo size={32} weight="fill" />
                  </a>
                  <a
                    href="https://twitter.com/lola_cosmetics"
                    target="_blank"
                    className="flex flex-col items-center justify-center text-lola-white-500"
                  >
                    <TwitterLogo size={32} weight="fill" />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UC7lsjCBoDazMtvf_KUcNFcg"
                    target="_blank"
                    className="flex flex-col items-center justify-center text-lola-white-500"
                  >
                    <YoutubeLogo size={32} weight="fill" />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center bg-lola-pink-500 pb-14">
              <h1 className="bg-lola-orange-500 p-1 font-anton text-2xl font-normal text-lola-white-500">
                ESCOLHA LOLA, ESCOLHA SER FELIZ!
              </h1>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}
