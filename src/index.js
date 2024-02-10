import { connectDB } from "./db.js";
import app from "./server.js";
import * as dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 4123;

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log("Server is running on port 4123");
        });
    })
    .catch((err) => {
        console.log("Connection failed", err);
    });
