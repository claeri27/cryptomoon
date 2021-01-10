// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'
import cors from 'cors'
import initMiddleware from '@/lib/initMiddleware'
import type { NextApiRequest as Req, NextApiResponse as Res } from 'next'

const useCors = initMiddleware(cors({ methods: ['GET', 'POST', 'OPTIONS'] }))

export default async function (req: Req, res: Res) {
  await useCors(req, res)
  const { data } = await axios('https://api.coincap.io/v2/assets')
  res.status(200).json(data.data)
}
