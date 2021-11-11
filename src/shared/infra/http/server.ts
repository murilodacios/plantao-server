import 'reflect-metadata'
import 'express-async-errors'
import './../../container'

import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import socketio from 'socket.io'
import http from 'http'

import { routes } from './routes'

import './../typeorm'
import createConnection from "./../typeorm";
import { AppError } from '../../errors/AppError';

createConnection()
const app = express()

const httpServer = http.createServer(app)

const io = new socketio.Server(httpServer , {
    cors: {
        origin: "*",
    },
})

io.on("connection", (socket) => {
    socket.on("AlterAvailable", () => {
        socket.broadcast.emit("AlterAvailableResponse", Math.random())
    })

    socket.on("SendNewMeetingUrl", () => {
        socket.broadcast.emit("SendNewMeetingUrl", Math.random())
    })

    socket.on("CreatedNewMeeting", () => {
        socket.broadcast.emit("CreatedNewMeetingResponse", Math.random())
    })
})

app.use(cors())
app.use(express.json())
app.use(routes)

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof AppError) {
        return response.status(err.statusCode).json({
            message: err.message
        })
    }

    return response.status(500).json({
        status: "error",
        message: `Internal server error ${err.message}`
    })
})


httpServer.listen(3005, () => {
    console.log("Server listening at port 3005")
})

export { io }