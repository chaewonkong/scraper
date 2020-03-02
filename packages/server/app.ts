import express from "express";
import router from "./routes";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string;
      PORT?: string;
    }
  }
}

const app = express();
const PORT = process.env.PORT || 4000;

app.use("", router);

// show "Server is Running at >>> localhost:4000" on your terminal.
app.listen(PORT, () =>
  console.log(`Server is Running at >>> localhost:${PORT}`)
);
