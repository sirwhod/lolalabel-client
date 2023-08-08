import { LogoLolaFromRio } from '../Assets/ImagesComponents/LogoLolaFromRio'
import { WavesRio } from '../Assets/ImagesComponents/WavesRio'

export function Header() {
  return (
    <div className="relative flex w-full items-center justify-center bg-lola-pink-500 lg:mt-0">
      <div className="absolute z-20 ">
        <LogoLolaFromRio size={72} />
      </div>
      <div className="max-w-screen relative z-10 max-h-20 overflow-hidden lg:w-full">
        <WavesRio color="#FDCE01" />
      </div>
    </div>
  )
}
