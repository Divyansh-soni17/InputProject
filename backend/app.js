import express from "express";
import bodyParser from "body-parser";
import connectToMongo from "./db.js";
import data from "./route/dataRoute.js";
import cors from 'cors';
connectToMongo();

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/getdata", data);
const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`server is working on https://localhost:${port}`)
);