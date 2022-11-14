import express from "express"
import postRoutes from "./routes/posts.js"
import authRoutes from "./routes/auth.js"
import usersRoutes from "./routes/users.js"


const app = express()

app.use(express.json())
app.use("/server/auth", authRoutes)
app.use("/server/users", usersRoutes)
app.use("/server/posts", postRoutes)

app.listen(8800, ()=>{
    "Olá"
})