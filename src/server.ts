import app from './app'
import { NextFunction, Request, Response } from 'express'

const port = process.env.API_PORT || 3000

app.use((req: Request, res: Response, next: NextFunction) => {
  if (req.url === '/') {
    return res.redirect('/v1')
  }
  next()
})

app.get('/', (_req: Request, res: Response) => {
  res.send()
})

app.listen(port, () =>
  console.log('REST API server ready at: http://localhost:3000/v1'),
)
