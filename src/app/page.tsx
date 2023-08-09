import { LogoLolaFromRio } from '@/components/Assets/ImagesComponents/LogoLolaFromRio'
import { WavesRio } from '@/components/Assets/ImagesComponents/WavesRio'

export default function Home() {
  return (
    <div className="relative flex w-full items-center justify-center bg-lola-pink-500 lg:mt-0">
      <div className="absolute z-20 ">
        <LogoLolaFromRio size={300} />
      </div>
      <div className="max-w-screen relative z-10 h-screen overflow-hidden lg:w-full">
        <WavesRio color="#FDCE01" />
      </div>
    </div>
  )
}
