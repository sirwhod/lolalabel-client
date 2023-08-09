import { useProduct } from '@/context/ProductContext/useProduct'
import { CertifiedVegan } from '../Assets/stamps/CertifiedVegan'
import { ProtectionColor } from '../Assets/stamps/ProtectionColor'
import { ThermalProtection } from '../Assets/stamps/ThermalProtection'
import { CosmeCert } from '../Assets/stamps/CosmeCert'
import { Glitter } from '../Assets/stamps/Glitter'
import { Pea } from '../Assets/stamps/Pea'
import { Recycle } from '../Assets/stamps/Recycle'
import { ReuseMe } from '../Assets/stamps/ReuseMe'
import { Vegan } from '../Assets/stamps/Vegan'
import { CrueltyFree } from '../Assets/stamps/CrueltyFree'

export default function StampsContent() {
  const { stamps } = useProduct()

  if (stamps !== undefined) {
    return (
      <>
        <div className="bg-lola flex w-full flex-wrap justify-end gap-2 p-8 lg:max-w-3xl">
          {stamps.map((stamp) => {
            if (
              stamp.nameStamp === 'CertifiedVeganStamp' &&
              stamp.active === true
            ) {
              return <CertifiedVegan key={stamp.nameStamp} size={72} />
            } else if (
              stamp.nameStamp === 'CosmosStamp' &&
              stamp.active === true
            ) {
              return <CosmeCert key={stamp.nameStamp} size={72} />
            } else if (
              stamp.nameStamp === 'GlitterStamp' &&
              stamp.active === true
            ) {
              return <Glitter key={stamp.nameStamp} size={72} />
            } else if (
              stamp.nameStamp === 'PeaStamp' &&
              stamp.active === true
            ) {
              return <Pea key={stamp.nameStamp} size={72} />
            } else if (
              stamp.nameStamp === 'ProtectionOfColorStamp' &&
              stamp.active === true
            ) {
              return <ProtectionColor key={stamp.nameStamp} size={72} />
            } else if (
              stamp.nameStamp === 'RecycleStamp' &&
              stamp.active === true
            ) {
              return <Recycle key={stamp.nameStamp} size={72} />
            } else if (
              stamp.nameStamp === 'ReuseStamp' &&
              stamp.active === true
            ) {
              return <ReuseMe key={stamp.nameStamp} size={72} />
            } else if (
              stamp.nameStamp === 'ThermalStamp' &&
              stamp.active === true
            ) {
              return <ThermalProtection key={stamp.nameStamp} size={72} />
            } else if (
              stamp.nameStamp === 'VeganStamp' &&
              stamp.active === true
            ) {
              return <Vegan key={stamp.nameStamp} size={72} />
            } else if (
              stamp.nameStamp === 'CrueltyFreeStamp' &&
              stamp.active === true
            ) {
              return <CrueltyFree key={stamp.nameStamp} size={72} />
            } else {
              return <></>
            }
          })}
        </div>
        <p className="w-full text-right font-inter text-[8px] lg:text-sm">
          *A imagem deste produto babadeiro é meramente ilustrativa, tá bom
          Lolete?
        </p>
      </>
    )
  } else {
    return (
      <div className="flex w-full flex-col items-end justify-end">
        <div className="flex w-full animate-pulse flex-wrap items-end justify-end gap-2 rounded-md p-8 lg:max-w-3xl">
          <div className="h-[72px] w-[72px] rounded-md bg-orange-200" />
          <div className="h-[72px] w-[72px] rounded-md bg-orange-200" />
          <div className="h-[72px] w-[72px] rounded-md bg-orange-200" />
        </div>
        <div className="h-2 w-3/4 animate-pulse rounded-md bg-orange-200 lg:h-4" />
      </div>
    )
  }
}
