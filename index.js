import "dotenv/config";
import express from "express";
import cors from "cors";
import db from "./dataBase/connectDB.js";
import router from "./routes/routers.js";


const app = express();

//Connecting DB
db();

app.use(express.json());
app.use(cors());
app.use(router);

app.get("/server", (req, res) => {
    res.status(200).send({ message: "Deployment Server is running" });
})

const PORT = process.env.PORT || 8008;

app.listen(PORT, () => {
    console.log(`Deployment server is running at PORT ${PORT}`);
})