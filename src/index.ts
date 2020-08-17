import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";

const cors = require("cors");
dotenv.config();

const app = express();
const port = 8080;

const connectString = process.env.MONGO_URI;

mongoose
    .connect(connectString, {
        useCreateIndex: true,
        useFindAndModify: false,
    })
    .then((con) => {
        console.log("DB connection successful");
    })
    .catch((error) => {
        console.log(error);
        console.log("Unable to connect to DB");
    });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

// start the express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
