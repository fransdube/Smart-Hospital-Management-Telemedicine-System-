import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send("AfyaConnect API Running");
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});