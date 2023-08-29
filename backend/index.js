import express from 'express'
import db from './config/mongoose.js'
import { logInController, signUpController } from './controllers/controllers.js'
import cors from 'cors'
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())


// Routes
app.post('/signup',signUpController)
app.post('/login',logInController)

const PORT=8005
app.listen(PORT, ()=>{console.log("Server Running AT Port: ",PORT)})