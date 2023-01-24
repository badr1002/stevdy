import React, { FC } from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'
 
import '@/styles/globals.css'
import '@/styles/react-slick.css'
import { NextPageWithLayout } from '@/interfaces/layout'


type AppPropsWithLayout = AppProps & {
   Component: NextPageWithLayout
}

const App: FC<AppPropsWithLayout> = (props: AppPropsWithLayout) => {
  const { Component , pageProps } = props

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Stevdy</title>
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </React.Fragment>
  )
}

export default App
