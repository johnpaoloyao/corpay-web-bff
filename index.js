import express from "express";
import bodyParser from "body-parser";
import cashout from "./routes/cashout.js";
import cors from "cors";

const app = express();
const PORT = 5000;
app.use(bodyParser.json());
app.use(cors());

app.use("/cashout", cashout);

app.listen(PORT, () => console.log(`Server running on PORT: http://localhost:${PORT}`));