import express from "express";
import dotenv from 'dotenv';
import mongoose from 'mongoose'
import cors from 'cors';
import bookRoute from "./route/book_route.js";
import userRouter from './route/user_route.js';

const app = express();


//middle ware
app.use(cors());
app.use(express.json());
dotenv.config()
const PORT = process.env.PORT || 4000
const URI = process.env.MONGODBURI
//connect to mongodb
mongoose.connect(URI, {
    //no longer need to specify useNewUrlParser and useUnifiedTopology
    })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error(err);
    })


//defining routes
app.use("/book", bookRoute);

app.use("/user", userRouter);

app.listen(PORT, () => {
    console.log(`The Server is Running on port ${PORT}`);
})