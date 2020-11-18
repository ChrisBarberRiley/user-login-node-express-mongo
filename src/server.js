import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import logger from './middleware/logger.js'
import routes from './routes/index.js'
import dotenv from 'dotenv'
import connectDb from './config/db.js'

const app = express()

dotenv.config()

connectDb()

if (process.env.NODE_ENV == 'development') {
    app.use(morgan('dev'))
    app.use(logger)
}
app.use(express.json())
app.use(cors())

app.use('/api/v1', routes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
