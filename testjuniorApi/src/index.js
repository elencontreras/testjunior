import express from 'express'
import users from './routes/users.routes.js'
import {PORT} from './config.js'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()

app.use(cors());

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api',users)


app.listen(PORT)
console.log('Server is running on port ', PORT)