// import { PrismaClient } from "../prisma/generated/client";
import express from "express";
import user from "./routes/user";

// const prisma = new PrismaClient();

const app = express();

app.use(express.json());

app.use("/user", user);

// async function main() {}

// main()
//   .catch((e) => console.error(e))
//   .finally(async () => await prisma.$disconnect());

// app.get("/gifts", async (req, res) => {
//   const gifts = await prisma.gifts.findMany();
//   res.json(gifts);
// });

// app.get("/gift/:id", async (req, res) => {
//   const { id } = req.params;
//   const result = await prisma.gifts.findUnique({
//     where: { id: parseInt(id) },
//   });
//   res.json(result);
// });

// app.post("/gift", async (req, res) => {
//   try {
//     const result = await prisma.gifts.create({
//       data: { ...req.body },
//     });
//     res.json(result);
//   } catch (error) {
//     res.json({ message: "Gift já exist" });
//   }
// });

// app.put("/gift/:id", async (req, res) => {
//   const { id } = req.params;
//   try {
//     const result = await prisma.gifts.update({
//       where: { id: parseInt(id) },
//       data: { ...req.body },
//     });
//     res.json(result);
//   } catch (error) {
//     res.json({ message: "Gift not exist" });
//   }
// });

// app.delete("/gift/:id", async (req, res) => {
//   const { id } = req.params;
//   try {
//     await prisma.gifts.delete({
//       where: { id: parseInt(id) },
//     });
//     res.json({ message: "Gift deleted" });
//   } catch (error) {
//     res.json({ message: "Gift not exist" });
//   }
// });

export default app;
