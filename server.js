import express from "express"
import morgan from "morgan"
import helmet from "helmet"
import bodyParser from "body-parser"
import configuration from "./configuration/configuration.js"
import userRoutes from "./src/routes/user.routes.js"


const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(morgan("common"))
app.use(helmet())

app.get("/hello", (req, res) => {
    res.send("Hallo!")
})

userRoutes.routes(app)
configuration.connectToDatabase()
configuration.connectToPort(app)

