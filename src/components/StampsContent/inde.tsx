import { CertifiedVegan } from '../Assets/stamps/CertifiedVegan'
import { ProtectionColor } from '../Assets/stamps/ProtectionColor'
import { ThermalProtection } from '../Assets/stamps/ThermalProtection'

export default function StampsContent() {
  return (
    <>
      <div className="bg-lola flex w-full flex-wrap justify-end gap-2 p-8 lg:max-w-3xl">
        <ThermalProtection size={72} />
        <ProtectionColor size={72} />
        <CertifiedVegan size={72} />
      </div>
      <p className="w-full text-right font-inter text-[8px] lg:text-sm">
        *A imagem desde produto babadeiro é meramente ilustrativa, tá bom
        Lolete?
      </p>
    </>
  )
}
