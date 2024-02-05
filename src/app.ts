import express from "express";

import user from "./routes/user";
import gift from "./routes/gifts";
import login from "./routes/login";

const app = express();

app.use(express.json());

app.use("/login", login);
app.use("/user", user);
app.use("/gift", gift);

// main()
//   .catch((e) => console.error(e))
//   .finally(async () => await prisma.$disconnect());

export default app;
