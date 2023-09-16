import { useRouter } from 'next/router'
import { en, es } from '../../public/locales'

export const useTranslations = () => {
  const router = useRouter()
  const { locale } = router
  const t = locale === 'en' ? en : es

  return { t }
}
