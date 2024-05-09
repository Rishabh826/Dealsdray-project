import  express  from "express";
import connectDB from "./db/db.connect.js";
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express();  


app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())



dotenv.config({
    path: './.env'
})

//routes
import authroutes from "./route/Routes.js";

app.use("/api/v1", authroutes);



connectDB()
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})
