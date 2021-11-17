import 'reflect-metadata'
import './../typeorm'
import createConnection from "./../typeorm";
import './../../container'
import 'express-async-errors'

import express, { NextFunction, Request, Response } from 'express'
import { routes } from './routes'

import cors from 'cors'
import socketio from 'socket.io'
import http from 'http'

import { AppError } from '../../errors/AppError';

createConnection()
const app = express()

const httpServer = http.createServer(app)

const io = new socketio.Server(httpServer , {
    cors: {
        origin: "*",
    },
})

app.use(cors())
app.use(express.json())
app.use(routes)

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
