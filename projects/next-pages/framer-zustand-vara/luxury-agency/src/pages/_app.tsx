import '@/styles/globals.css'
import { type AppType } from 'next/app'
import Head from 'next/head'

import { Layout } from '@/components/Layout'

import { Nunito } from 'next/font/google'
const nunito = Nunito({ subsets: ['latin'] })

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={`${nunito.className} text-primary`}>
      <Layout>
        <Head>
          <title>Luxury Agency</title>
          <meta name='description' content='Luxury Agency' />
          <link rel='icon' href='/favicon.png' />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </main>
  )
}

export default MyApp
