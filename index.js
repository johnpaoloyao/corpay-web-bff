import express from "express";
import bodyParser from "body-parser";
import cashout from "./routes/cashout.js";
import cors from "cors";
import dotenv from "dotenv";
import vesta from "./routes/vesta.js";

const app = express();
const PORT = 5000;
app.use(bodyParser.json());
app.use(cors());
dotenv.config({path: './.env'});

app.use("/cashout", cashout);
app.use("/vesta", vesta);

app.listen(PORT, () => console.log(`Server running on PORT: http://localhost:${PORT}`));