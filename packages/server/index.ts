import express from "express";

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

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Successfully started");
});

// show "Server is Running at >>> localhost:4000" on your terminal.
app.listen(PORT, () =>
  console.log(`Server is Running at >>> localhost:${PORT}`)
);
