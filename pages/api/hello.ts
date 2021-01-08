// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest as Req, NextApiResponse as Res } from 'next'

export default (req: Req, res: Res) => {
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}
