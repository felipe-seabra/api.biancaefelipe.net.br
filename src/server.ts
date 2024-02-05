import app from "./app";
import { Request, Response } from "express";

const port = process.env.PORT || 3000;

app.get("/", (_req: Request, res: Response) => {
  res.send();
});

app.listen(port, () => console.log("REST API server ready at: http://localhost:3000"));
