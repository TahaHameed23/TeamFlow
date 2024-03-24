import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";

const app: express.Application = express();

app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));

app.get("/", (req: express.Request, res: express.Response) => {
    res.status(200).json({ message: "Hello from the server" });
});

export default app;
