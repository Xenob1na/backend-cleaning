import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import Router from "./routes/routes.js"

import "dotenv/config";

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', Router);

app.listen(process.env.APP_PORT, () => {
    console.log("Server running on port " + process.env.APP_PORT);
  });