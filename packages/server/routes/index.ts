import express from "express";

const router = express.Router();

router.get("/", (req: express.Request, res: express.Response) => {
  res.send("Successfully started");
});

export default router;
