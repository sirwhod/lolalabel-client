'use client'

import Image from 'next/image'
import {
  CaretDown,
  FacebookLogo,
  InstagramLogo,
  Stamp,
  TwitterLogo,
  Warning,
  YoutubeLogo,
} from 'phosphor-react'

import * as Accordion from '@radix-ui/react-accordion'
import * as Dialog from '@radix-ui/react-dialog'
import { CrueltyFree } from '@/components/stamps/CrueltyFree'
import { Recycle } from '@/components/stamps/Recycle'
import { Vegan } from '@/components/stamps/Vegan'
import { BR, US } from 'country-flag-icons/react/3x2'

export default function Home() {
  return (
    <div className="flex w-full flex-col">
      <Dialog.Root defaultOpen>
        <Dialog.Trigger />
        <Dialog.Portal>
          <Dialog.Overlay className="fixed left-0 top-0 h-screen w-screen bg-white bg-opacity-30 backdrop-blur-sm" />
          <Dialog.Content className="fixed inset-0 left-9 top-4 flex max-h-64 max-w-xs flex-col items-center justify-center gap-5 bg-violet-lola-pink p-8">
            <Dialog.Title className="flex items-center justify-center gap-2">
              <Warning
                size={64}
                weight="fill"
                className="text-violet-lola-yellow"
              />
              <h1 className="font-anton text-4xl text-violet-lola-yellow">
                Atenção
              </h1>
            </Dialog.Title>
            <Dialog.Description className="flex flex-col items-center justify-center gap-5">
              <span className="text-base text-violet-lola-yellow">
                As imagens contidas neste site são meramente ilustrativas!
              </span>

              <Dialog.Close className="bg-violet-lola-yellow px-8 py-0.5">
                OK!
              </Dialog.Close>
            </Dialog.Description>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
      <div className="flex w-full flex-col items-center justify-center p-8">
        <div className="flex w-full flex-col items-center">
          <h1 className="w-full text-4xl">Morte Súbita</h1>
          <h3 className="w-full text-sm">Máscara Hidratante</h3>

          <Image
            src="https://lolacosmetics.cdn.plataformaneo.com.br/produto/20201123175717_8088991912_D.png"
            width={300}
            height={300}
            alt=""
          />
          <h4 className="w-full font-inter text-sm font-bold">v.AA/CD</h4>
        </div>
        <div className="flex w-full justify-end gap-2">
          <CrueltyFree />
          <Recycle />
          <Vegan />
        </div>
      </div>
      <div className="flex w-full flex-col items-center gap-4 bg-violet-lola-red p-8">
        <h2 className="w-full text-2xl text-violet-lola-white">Composição</h2>
        <p className="w-full text-base text-violet-lola-white">
          Aqua/Eau/Water, Cetearyl Alcohol, Behentrimonium Methosulfate,
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
          Linalool, Limonene.
        </p>
      </div>
      <div className="flex w-full flex-col items-center gap-3 bg-violet-lola-orange p-8">
        <h1 className="text-4xl text-violet-lola-white">Saiba Mais</h1>
        <p className="text-center text-xs text-violet-lola-white">
          Veja abaixo todas as informações do produto, em sua respectiva
          linguagem!
        </p>
      </div>
      <Accordion.Root type="single">
        <Accordion.Item value="Português">
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between bg-violet-lola-yellow p-4">
              <BR className="h-10" />
              <span className="text-4xl">Português</span>
              <CaretDown
                size={32}
                className="group-data-[state=open]:translate-y transition-all group-data-[state=open]:rotate-180"
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="transition-all">
            <div className="flex w-full flex-col gap-8 bg-violet-lola-green p-8 text-violet-lola-white">
              <h1 className="w-full text-center text-3xl">O que Sou?</h1>
              <p className="text-base">
                A Máscara Morte Súbita da Lola é de cuidado intensivo semanal
                para cabelos sedentos de vida. Também é excelente para usos pós
                e processos de coloração ou outra química. Sua fórmula super
                saturada de ingredientes ativos restaura a barreira de
                hidratação natural dos cabelos para dar suavidade, força e
                desembaraçar sublime. Ativos: Blend Hidratante Reposição da
                umidade, hidratação, fortalecimento, maciez, suavidade, brilho e
                resistência. Aminoácidos Proteção da cor e reparo dos danos da
                superfície da fibra capilar. Proteínas vegetais Protegem os fios
                do calor e flyaways.
              </p>
              <h1 className="w-full text-center text-3xl">Modo de uso</h1>
              <p className="text-base">
                Aplicar uma vez por semana após o uso do Shampoo Morte Súbita ou
                após fazer a coloração ou químicas. Distribua uniformemente
                sobre todo o comprimento dos fios. Deixe em pausa por 10
                minutos. Enxágue e finalize como de costume.
              </p>
              <h1 className="w-full text-center text-3xl">Precauções</h1>
              <p className="text-base">
                Para cabelos danificados. Com Extrato de Aloe Vera e Óleo de
                Coco. Uso Semanal. Hipoalergênico. Dermatologicamente testado.
                Produto vegano. Não testado em animais.
              </p>
            </div>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="Inglês">
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between bg-violet-lola-yellow p-4">
              <US className="h-10" />
              <span className="text-4xl">Inglês</span>
              <CaretDown
                size={32}
                className="group-data-[state=open]:translate-y transition-all group-data-[state=open]:rotate-180"
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>
            <div className="flex w-full flex-col gap-8 bg-violet-lola-green p-8 text-violet-lola-white">
              <h1 className="w-full text-center text-3xl">O que Sou?</h1>
              <p className="text-base">
                A Máscara Morte Súbita da Lola é de cuidado intensivo semanal
                para cabelos sedentos de vida. Também é excelente para usos pós
                e processos de coloração ou outra química. Sua fórmula super
                saturada de ingredientes ativos restaura a barreira de
                hidratação natural dos cabelos para dar suavidade, força e
                desembaraçar sublime. Ativos: Blend Hidratante Reposição da
                umidade, hidratação, fortalecimento, maciez, suavidade, brilho e
                resistência. Aminoácidos Proteção da cor e reparo dos danos da
                superfície da fibra capilar. Proteínas vegetais Protegem os fios
                do calor e flyaways.
              </p>
              <h1 className="w-full text-center text-3xl">Modo de uso</h1>
              <p className="text-base">
                Aplicar uma vez por semana após o uso do Shampoo Morte Súbita ou
                após fazer a coloração ou químicas. Distribua uniformemente
                sobre todo o comprimento dos fios. Deixe em pausa por 10
                minutos. Enxágue e finalize como de costume.
              </p>
              <h1 className="w-full text-center text-3xl">Precauções</h1>
              <p className="text-base">
                Para cabelos danificados. Com Extrato de Aloe Vera e Óleo de
                Coco. Uso Semanal. Hipoalergênico. Dermatologicamente testado.
                Produto vegano. Não testado em animais.
              </p>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
      <footer className="flex w-full flex-col items-center gap-4 bg-violet-lola-pink p-8 text-violet-lola-white">
        <div className="flex w-full flex-col gap-2 ">
          <h4 className="w-full text-2xl text-violet-lola-yellow">Contato</h4>
          <p className="w-full">LOLAMAIL@LOLACOSMETICS.COM.BR</p>
          <p className="w-full">SAC:SEG À SEX DAS 9H ÀS 18H</p>
        </div>
        <div className="flex w-full flex-col gap-2 ">
          <h4 className="w-full text-2xl text-violet-lola-yellow">#SIGALOLA</h4>
          <div className="flex w-full items-end gap-2">
            <a
              href=""
              className="flex flex-col items-center justify-center rounded-full bg-violet-lola-white p-1 text-violet-lola-pink"
            >
              <FacebookLogo size={32} weight="fill" />
            </a>
            <a
              href=""
              className="flex flex-col items-center justify-center rounded-full bg-violet-lola-white p-1 text-violet-lola-pink"
            >
              <InstagramLogo size={32} weight="fill" />
            </a>
            <a
              href=""
              className="flex flex-col items-center justify-center rounded-full bg-violet-lola-white p-1 text-violet-lola-pink"
            >
              <TwitterLogo size={32} weight="fill" />
            </a>
            <a
              href=""
              className="flex flex-col items-center justify-center rounded-full bg-violet-lola-white p-1 text-violet-lola-pink"
            >
              <YoutubeLogo size={32} weight="fill" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
