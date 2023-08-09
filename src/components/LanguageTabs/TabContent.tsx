'use client'

import { InstructionProps } from '@/context/ProductContext/types'
import * as Tabs from '@radix-ui/react-tabs'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export interface TabItemProps {
  language: string
  value: InstructionProps
}

export function TabContent({ language, value }: TabItemProps) {
  return (
    <Tabs.Content value={language}>
      <div className="flex w-full flex-col gap-8 bg-lola-green-500 p-8 text-lola-white-500">
        {language === 'Português' ? (
          <>
            <h1 className="w-full text-center font-inter text-3xl font-bold">
              O que sou?
            </h1>
          </>
        ) : language === 'Inglês' ? (
          <>
            <h1 className="w-full text-center font-inter text-3xl font-bold">
              What i am?
            </h1>
          </>
        ) : language === 'Espanhol' ? (
          <>
            <h1 className="w-full text-center font-inter text-3xl font-bold">
              ¿Lo que soy?
            </h1>
          </>
        ) : language === 'Francês' ? (
          <>
            <h1 className="w-full text-center font-inter text-3xl font-bold">
              Ce que je suis?
            </h1>
          </>
        ) : language === 'Alemão' ? (
          <>
            <h1 className="w-full text-center font-inter text-3xl font-bold">
              {`Was ich bin?`}
            </h1>
          </>
        ) : (
          language === 'Russo' && (
            <>
              <h1 className="w-full text-center font-inter text-3xl font-bold">
                {`То, что я?`}
              </h1>
            </>
          )
        )}

        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          className="font-inter text-base font-normal"
        >
          {value.whatIAm}
        </ReactMarkdown>

        {language === 'Português' ? (
          <>
            <h1 className="w-full text-center font-inter text-3xl font-bold">
              Como devo ser usado?
            </h1>
          </>
        ) : language === 'Inglês' ? (
          <>
            <h1 className="w-full text-center font-inter text-3xl font-bold">
              How should I be used?
            </h1>
          </>
        ) : language === 'Espanhol' ? (
          <>
            <h1 className="w-full text-center font-inter text-3xl font-bold">
              ¿Cómo debo ser utilizado?
            </h1>
          </>
        ) : language === 'Francês' ? (
          <>
            <h1 className="w-full text-center font-inter text-3xl font-bold">
              {`
Comment dois-je être utilisé ?`}
            </h1>
          </>
        ) : language === 'Alemão' ? (
          <>
            <h1 className="w-full text-center font-inter text-3xl font-bold">
              {`Wie soll ich angewendet werden?`}
            </h1>
          </>
        ) : (
          language === 'Russo' && (
            <>
              <h1 className="w-full text-center font-inter text-3xl font-bold">
                {`Как меня следует использовать?`}
              </h1>
            </>
          )
        )}

        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          className="font-inter text-base font-normal"
        >
          {value.modeOfUse}
        </ReactMarkdown>

        {language === 'Português' ? (
          <>
            <h1 className="w-full text-center font-inter text-3xl font-bold">
              Precauções
            </h1>
          </>
        ) : language === 'Inglês' ? (
          <>
            <h1 className="w-full text-center font-inter text-3xl font-bold">
              Precautions
            </h1>
          </>
        ) : language === 'Espanhol' ? (
          <>
            <h1 className="w-full text-center font-inter text-3xl font-bold">
              Precauciones
            </h1>
          </>
        ) : language === 'Francês' ? (
          <>
            <h1 className="w-full text-center font-inter text-3xl font-bold">
              {`Précautions`}
            </h1>
          </>
        ) : language === 'Alemão' ? (
          <>
            <h1 className="w-full text-center font-inter text-3xl font-bold">
              {`Vorsicht`}
            </h1>
          </>
        ) : (
          language === 'Russo' && (
            <>
              <h1 className="w-full text-center font-inter text-3xl font-bold">
                {`Меры предосторожности`}
              </h1>
            </>
          )
        )}

        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          className="font-inter text-base font-normal"
        >
          {value.Precaution}
        </ReactMarkdown>
      </div>
    </Tabs.Content>
  )
}
