import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";

const cors = require("cors");
dotenv.config();

const app = express();
const port = 8080;

const connectString = process.env.MONGO_URI;
mongoose.Promise = global.Promise;
mongoose
    .connect(connectString, {
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
    .then((connection) => {
        console.log("DB connection successful");
        app.use(cors());
        app.use(express.json());
        app.use(express.urlencoded());

        const indexRouter = require("./routes/index");
        const courierRouter = require("./routes/courier");

        app.use("/", indexRouter);
        app.use("/courier", courierRouter);

        // start the express server
        app.listen(port, () => {
            // tslint:disable-next-line:no-console
            console.log(`server started at http://localhost:${port}`);
        });
    })
    .catch((error) => {
        console.log(error);
        console.log("Unable to connect to DB");
    });
