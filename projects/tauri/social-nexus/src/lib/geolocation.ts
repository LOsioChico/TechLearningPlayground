import axios from 'axios'
import { type IpdataResponse } from '@/types/ipdata.interface'

const IPDATA_API_KEY = process.env.IPDATA_API_KEY
const IPDATA_API_URL = 'https://api.ipdata.co'

export const getGeolocation = async () => {
  const { data } = await axios.get<IpdataResponse>(
    `${IPDATA_API_URL}?api-key=${IPDATA_API_KEY}`,
  )
  return data
}
