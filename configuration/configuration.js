import mongoose from "mongoose"
import dotenv from "dotenv"


dotenv.config()

const connectToDatabase = async () => {
    const DB_URL = process.env.DATABASE_URL

    try {
        await mongoose.connect(DB_URL, { 
            useNewUrlParser:true, 
            useUnifiedTopology: true,
            useFindAndModify: false 
        })
        console.log ("Successfully Connected!!")
    } catch (error) {
        console.log("Connection ERROR", error)
        process.exit()
    }
}

const connectToPort = (app) => {
    const port = process.env.PORT

    app.listen( port, () => {
        console.log("Server is running on port " + port)
    })
}


export default{
    connectToDatabase,
    connectToPort
}