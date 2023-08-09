'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { useState } from 'react'
import { TabItem } from './TabItem'
import { TabContent } from './TabContent'
import { BR, ES, FR, US, DE, RU } from 'country-flag-icons/react/3x2'
import { useProduct } from '@/context/ProductContext/useProduct'
import { ArrowFatRight, CircleNotch } from 'phosphor-react'

export function LanguageTabs() {
  const { instructions } = useProduct()
  const [currentTab, setCurrentTab] = useState(() => {
    if (instructions !== undefined && instructions !== null) {
      return instructions[0].language
    } else {
      return 'Português'
    }
  })

  if (instructions !== undefined && instructions !== null) {
    return (
      <>
        <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
          <Tabs.List
            key={'Languages'}
            className="flex w-full snap-x snap-mandatory items-center overflow-auto bg-lola-yellow-500"
          >
            {instructions.map((instruction) => {
              if (instruction.language === 'Português') {
                return (
                  <>
                    <TabItem
                      flag={<BR className="z-20 h-9 lg:h-10" />}
                      title={instruction.language}
                      isSelected={currentTab === instruction.language}
                    />
                  </>
                )
              } else if (instruction.language === 'Inglês') {
                return (
                  <>
                    <TabItem
                      flag={<US className="z-20 h-9 lg:h-10" />}
                      title={instruction.language}
                      isSelected={currentTab === instruction.language}
                    />
                  </>
                )
              } else if (instruction.language === 'Espanhol') {
                return (
                  <>
                    <TabItem
                      flag={<ES className="z-20 h-9 lg:h-10" />}
                      title={instruction.language}
                      isSelected={currentTab === instruction.language}
                    />
                  </>
                )
              } else if (instruction.language === 'Francês') {
                return (
                  <>
                    <TabItem
                      flag={<FR className="z-20 h-9 lg:h-10" />}
                      title={instruction.language}
                      isSelected={currentTab === instruction.language}
                    />
                  </>
                )
              } else if (instruction.language === 'Alemão') {
                return (
                  <>
                    <TabItem
                      flag={<DE className="z-20 h-9 lg:h-10" />}
                      title={instruction.language}
                      isSelected={currentTab === instruction.language}
                    />
                  </>
                )
              } else if (instruction.language === 'Russo') {
                return (
                  <>
                    <TabItem
                      flag={<RU className="z-20 h-9 lg:h-10" />}
                      title={instruction.language}
                      isSelected={currentTab === instruction.language}
                    />
                  </>
                )
              } else {
                return <></>
              }
            })}
          </Tabs.List>
          {instructions.map((instruction) => {
            return (
              <TabContent
                key={instruction.id}
                language={instruction.language}
                value={instruction}
              />
            )
          })}
        </Tabs.Root>
      </>
    )
  } else {
    return (
      <div className="flex w-full flex-col">
        <div className="flex h-14 w-full bg-lola-yellow-500">
          <div className="flex h-14 w-[70px] items-center justify-center bg-lola-green-500">
            <div className="h-9 w-12 animate-pulse bg-green-400 lg:h-10 lg:w-14" />
          </div>
          <div className="flex h-14 w-[70px] items-center justify-center bg-lola-yellow-500">
            <div className="h-9 w-12 animate-pulse bg-yellow-200 lg:h-10 lg:w-14" />
          </div>
          <div className="flex h-14 w-[70px] items-center justify-center bg-lola-yellow-500">
            <div className="h-9 w-12 animate-pulse bg-yellow-200 lg:h-10 lg:w-14" />
          </div>
          <div className="flex h-14 w-[70px] items-center justify-center bg-lola-yellow-500">
            <div className="h-9 w-12 animate-pulse bg-yellow-200 lg:h-10 lg:w-14" />
          </div>
        </div>
        <div className="relative flex w-full flex-col items-center justify-center gap-4 bg-lola-green-500 p-8">
          <div className="relative z-10 flex w-full animate-pulse flex-col items-center justify-center gap-2 overflow-hidden">
            <div className="h-8 w-full rounded-md bg-green-400" />
            <div className="h-3 w-full rounded-sm bg-green-400" />
            <div className="h-3 w-full rounded-sm bg-green-400" />
            <div className="h-3 w-full rounded-sm bg-green-400" />
            <div className="h-3 w-full rounded-sm bg-green-400" />
            <div className="h-3 w-full rounded-sm bg-green-400" />
            <div className="h-3 w-full rounded-sm bg-green-400" />
            <div className="h-3 w-full rounded-sm bg-green-400" />
            <div className="h-3 w-full rounded-sm bg-green-400" />
          </div>
          <CircleNotch
            size={48}
            weight="bold"
            className="absolute z-20 animate-spin text-lola-white-500"
          />
        </div>
      </div>
    )
  }
}
