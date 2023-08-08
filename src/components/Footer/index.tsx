import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  WhatsappLogo,
  YoutubeLogo,
} from 'phosphor-react'

export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center">
      <div className="flex w-full flex-col gap-4 p-8 text-lola-white-500">
        <div className="flex w-full flex-col items-center justify-center gap-2 ">
          <h4 className="text-center font-anton text-2xl font-medium text-lola-white-500">
            Contato
          </h4>
          <p className="flex gap-1 text-center font-inter">
            SAC@LOLAFROMRIO.COM.BR
          </p>
          <p className="flex gap-1 text-center font-inter">
            SAC: SEG À SEX DAS 9H ÀS 18H
          </p>
          <a
            href="https://wa.me/5521970059241"
            target="_blank"
            className="flex items-center justify-center gap-1 text-center font-inter hover:text-lola-pink-900"
          >
            <WhatsappLogo weight="fill" size={24} />
            21 97005-9241
          </a>
        </div>
        <div className="flex w-full flex-col gap-2">
          <h4 className="w-full text-center font-anton text-2xl font-medium text-lola-white-500">
            #SIGALOLA
          </h4>
          <div className="flex w-full items-center justify-center gap-2">
            <a
              href="https://www.facebook.com/lolacosmetics/"
              target="_blank"
              className="flex flex-col items-center justify-center text-lola-white-500 hover:text-lola-pink-900"
            >
              <FacebookLogo size={32} weight="fill" />
            </a>
            <a
              href="https://www.instagram.com/lolacosmetics/?hl=pt-br"
              target="_blank"
              className="flex flex-col items-center justify-center text-lola-white-500 hover:text-lola-pink-900"
            >
              <InstagramLogo size={32} weight="fill" />
            </a>
            <a
              href="https://twitter.com/lola_cosmetics"
              target="_blank"
              className="flex flex-col items-center justify-center text-lola-white-500 hover:text-lola-pink-900"
            >
              <TwitterLogo size={32} weight="fill" />
            </a>
            <a
              href="https://www.youtube.com/channel/UC7lsjCBoDazMtvf_KUcNFcg"
              target="_blank"
              className="flex flex-col items-center justify-center text-lola-white-500 hover:text-lola-pink-900"
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
  )
}
