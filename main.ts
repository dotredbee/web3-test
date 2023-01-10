import express, { Express, NextFunction, Request, Response } from "express"
import { createServer } from "http"
import dotenv from "dotenv"
import connectWeb3 from "./modules/web3.module"


dotenv.config()

const app : Express = express()

const port : string = String(process.env.PORT)
const ethHost : string = String(process.env.TEST_ETH_NET_HOST)

const web3 = connectWeb3(ethHost)

app.use("/", (req : Request, res : Response, next : NextFunction) => {
    next()
})

const server = createServer(app)

server.listen(port, () => {
    console.log(`start server...${port}`)
})