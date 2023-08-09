import { Warning } from 'phosphor-react'

import * as Dialog from '@radix-ui/react-dialog'

export default function ModalAlert() {
  return (
    <Dialog.Root defaultOpen>
      <Dialog.Trigger />
      <Dialog.Portal>
        <Dialog.Overlay className="fixed z-30 h-screen w-screen bg-white bg-opacity-30 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-4 z-40 flex max-h-64 w-[350px] -translate-x-1/2 flex-col items-center justify-center gap-5 bg-lola-pink-500 object-center p-8">
          <Dialog.Title className="flex flex-col items-center justify-center gap-2">
            <Warning
              size={64}
              weight="duotone"
              className="text-lola-white-500"
            />
            <h1 className="font-anton text-4xl text-lola-white-500">
              ATENÇÃO, LOLETES!
            </h1>
          </Dialog.Title>
          <Dialog.Description className="flex flex-col items-center justify-center gap-5 ">
            <span className="font-inter text-base text-lola-white-500">
              As imagens babadeiras deste site são meramente ilustrativas, tá
              bom?
            </span>

            <Dialog.Close className="bg-lola-green-500 px-8 py-0.5 font-anton text-xl text-lola-white-500 hover:bg-lola-orange-500">
              OK, LOLINHA!
            </Dialog.Close>
          </Dialog.Description>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
