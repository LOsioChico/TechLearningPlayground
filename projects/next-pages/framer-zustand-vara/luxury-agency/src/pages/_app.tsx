import '@/styles/globals.css'
import { type AppType } from 'next/app'
import Head from 'next/head'

import { Layout } from '@/components/Layout'

import { Poppins } from 'next/font/google'
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={`${poppins.className} text-primary`}>
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
