'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export interface TabItemProps {
  flag: ReactNode
  title: string
  isSelected?: boolean
}

export function TabItem({ flag, title, isSelected = false }: TabItemProps) {
  return (
    <Tabs.Trigger
      value={title}
      className="relative flex items-center justify-center p-2 hover:bg-lola-orange-500 "
    >
      {isSelected && (
        <>
          <motion.div
            layoutId="activeTab"
            className="absolute left-0 right-0 h-full w-full bg-lola-green-500"
          />
        </>
      )}
      {flag}
    </Tabs.Trigger>
  )
}
