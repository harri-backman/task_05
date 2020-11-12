import express from "express"
import morgan from "morgan"
import helmet from "helmet"
import dotenv from "dotenv"

dotenv.config()
const app = express()
app.use(morgan("common"))
app.use(helmet())

app.get("/hello", (req, res) => {
    res.send("Hallo!")
})

const port = process.env.PORT

app.listen( port, () => {
    console.log("Server is running on port " + port)
})
