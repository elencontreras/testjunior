import {config} from 'dotenv'

config()

export const PORT = process.env.PORT || 3000
export const DB_PORT = process.env.DB_PORT || 3306
export const DB_HOST = process.env.DB_HOST || 'localhost'
export const DB_USER = process.env.DB_USER || 'root'
export const DB_PASSWORD = process.env.DB_PASSWORD || 'root'
export const DB_NAME = process.env.DB_NAME || 'apinodejs'
export const DB_SOCKET = process.env.DB_SOCKET || ''
export const SECRET = process.env.SECRET
export const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID
export const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN
export const TWILIO_APP_SID = process.env.TWILIO_APP_SID