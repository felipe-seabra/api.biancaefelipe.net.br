import express from "express";

import user from "./routes/user";
import gift from "./routes/gifts";

const app = express();

app.use(express.json());

app.use("/user", user);
app.use("/gift", gift);

// main()
//   .catch((e) => console.error(e))
//   .finally(async () => await prisma.$disconnect());

export default app;
