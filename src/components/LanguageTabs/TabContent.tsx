'use client'

import * as Tabs from '@radix-ui/react-tabs'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export interface TabItemProps {
  language: string
  value: string
}

export function TabContent({ language }: TabItemProps) {
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
        ) : (
          language === 'Francês' && (
            <>
              <h1 className="w-full text-center font-inter text-3xl font-bold">
                Ce que je suis?
              </h1>
            </>
          )
        )}

        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          className="font-inter text-base font-normal"
        >
          {`A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
`}
        </ReactMarkdown>

        {language === 'Português' ? (
          <>
            <h1 className="w-full text-center font-inter text-3xl font-bold">
              Modo de uso
            </h1>
          </>
        ) : language === 'Inglês' ? (
          <>
            <h1 className="w-full text-center font-inter text-3xl font-bold">
              mode of use
            </h1>
          </>
        ) : language === 'Espanhol' ? (
          <>
            <h1 className="w-full text-center font-inter text-3xl font-bold">
              Modo de uso
            </h1>
          </>
        ) : (
          language === 'Francês' && (
            <>
              <h1 className="w-full text-center font-inter text-3xl font-bold">
                {`Mode d'utilisation`}
              </h1>
            </>
          )
        )}

        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          className="font-inter text-base font-normal"
        >
          {`A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
`}
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
        ) : (
          language === 'Francês' && (
            <>
              <h1 className="w-full text-center font-inter text-3xl font-bold">
                {`Précautions`}
              </h1>
            </>
          )
        )}

        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          className="font-inter text-base font-normal"
        >
          {`A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
`}
        </ReactMarkdown>
      </div>
    </Tabs.Content>
  )
}
