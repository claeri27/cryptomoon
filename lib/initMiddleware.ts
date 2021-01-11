import type { NextApiRequest as Req, NextApiResponse as Res } from 'next'

export default function initMiddleware(middleware) {
  return (req: Req, res: Res) =>
    new Promise((resolve, reject) => {
      middleware(req, res, result => {
        if (result instanceof Error) {
          return reject(result)
        }
        return resolve(result)
      })
    })
}
