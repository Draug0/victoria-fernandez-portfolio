import React from 'react'
import { AppProps } from '../../node_modules/next/app'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import Head from '../../node_modules/next/head'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
