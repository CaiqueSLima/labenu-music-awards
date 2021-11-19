import express from "express"
import { bandRouter } from "./routes/bandRouter"
import { userRouter } from "./routes/userRouter"

export const app = express()

app.use(express.json())

app.use("/user", userRouter)
app.use("/band", bandRouter)