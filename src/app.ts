import express from 'express'
import cors from 'cors'
import user from './routes/user'
import gift from './routes/gifts'
import login from './routes/login'

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

app.use('/login', login)
app.use('/user', user)
app.use('/gift', gift)

export default app
