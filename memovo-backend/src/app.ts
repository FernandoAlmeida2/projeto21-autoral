import express, { Express, Request, Response } from "express";
import cors from "cors";
import { connectDB, disconnectDB } from "./config/database";
import { userRouter } from "./routers/user-router";
import { sessionRouter } from "./routers/session-router";
import { cardRouter } from "./routers/card-router";
import { userCardsRouter } from "./routers/userCards-router";

const app = express();

app
  .use(cors())
  .use(express.json())
  .get("/health", (req: Request, res: Response) => res.send("OK!"))
  .use("/users", userRouter)
  .use("/auth", sessionRouter)
  .use("/cards", cardRouter)
  .use("/userCards", userCardsRouter);

export function init(): Promise<Express> {
  connectDB();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;
