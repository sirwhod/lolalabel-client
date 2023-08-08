'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { useState } from 'react'
import { TabItem } from './TabItem'
import { TabContent } from './TabContent'
import { BR, ES, FR, US } from 'country-flag-icons/react/3x2'

export function LanguageTabs() {
  const [currentTab, setCurrentTab] = useState('Português')

  return (
    <>
      <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
        <Tabs.List className="flex w-full bg-lola-yellow-500">
          <TabItem
            flag={<BR className="z-20 h-10" />}
            title="Português"
            isSelected={currentTab === 'Português'}
          />
          <TabItem
            flag={<US className="z-20 h-10" />}
            title="Inglês"
            isSelected={currentTab === 'Inglês'}
          />
          <TabItem
            flag={<ES className="z-20 h-10" />}
            title="Espanhol"
            isSelected={currentTab === 'Espanhol'}
          />
          <TabItem
            flag={<FR className="z-20 h-10" />}
            title="Francês"
            isSelected={currentTab === 'Francês'}
          />
        </Tabs.List>
        <TabContent language="Português" value="" />
        <TabContent language="Inglês" value="" />
        <TabContent language="Espanhol" value="" />
        <TabContent language="Francês" value="" />
      </Tabs.Root>
    </>
  )
}
