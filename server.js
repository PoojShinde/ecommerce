import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoute.js'


//configer env
dotenv.config();

//database connect
connectDB();
//rest object
const app = express()
//middleware
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use("/api/v1/auth",authRoutes)

//rest api
app.get('/',(req, res) => {
    res.send(
        "<h1>welcome to ecommerce app</h1>"
    );
})
//port=-0987654321Q \][POIUYFDSA';lkjhgfcxz/.,mnbvcx]
const PORT = process.env.PORT || 8080

//run listen
app.listen(PORT,() =>{
    console.log(`server is running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
})
