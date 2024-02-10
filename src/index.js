import app from "./server.js";
import * as dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 4123;

app.listen(PORT, () => {
    console.log("Server is running on port 4123");
});
