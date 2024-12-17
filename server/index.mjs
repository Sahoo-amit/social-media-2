import dotenv from 'dotenv'
import express from 'express'
import { router } from './routes/authRoutes.mjs'
import connectDb from './config/dbConnect.mjs'

dotenv.config()
const app = express()



const port = 8000

app.use('/api/auth', router)

connectDb()
.then(() => {
   app.listen(port, () => {
      console.log("Server is listening at ===> " , port);
   })
})

