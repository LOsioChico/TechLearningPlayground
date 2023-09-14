import { type AppType } from 'next/app'
import { Toaster } from 'sonner'

import { api } from '@/utils/api'

import '@/styles/globals.css'
import { Layout } from '@/components/Layout'

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Toaster position='top-center' richColors />
      <Component {...pageProps} />;
    </Layout>
  )
}

export default api.withTRPC(MyApp)
