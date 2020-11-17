import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import logger from './middleware/logger.js'
import routes from './routes/index.js'
import dotenv from 'dotenv'
const app = express()

dotenv.config()

if (process.env.NODE_ENV == 'development') {
    app.use(morgan('dev'))
    app.use(logger)
}
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.status(200).send('Hello world')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

app.use('/api/v1', routes)
