import express from 'express'
import cors from 'cors'
import { user } from './routes/user'
import { gift } from './routes/gifts'
import { login } from './routes/login'

const app = express()

// Middleware para habilitar o CORS
app.use(
  cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
  }),
)

app.use(express.json())

app.use('/v1/login', login)
app.use('/v1/user', user)
app.use('/v1/gift', gift)

export default app
