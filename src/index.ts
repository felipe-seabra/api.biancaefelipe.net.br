import { PrismaClient } from "../prisma/generated/client";
import express from "express";

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

async function main() {
  // const newUser = await prisma.user.create({
  //   data: {
  //     name: 'Alice',
  //     email: 'alice@prisma.io',
  //     shopping: {
  //       create: {
  //         available: false,
  //         amount: 3,
  //         name: "Coffee Machine",
  //         price: 135,
  //         description: "lorem ipsum dolor sit amet",
  //         imageUrl: "https://imgs.ponto.com.br/55050368/1g.jpg"
  //       },
  //     },
  //   },
  // })
  // console.log('Created new user: ', newUser)
  // const allUsers = await prisma.user.findMany({
  //   include: { shopping: true },
  // })
  // console.log('All users: ')
  // console.dir(allUsers, { depth: null })
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());

app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.post("/user", async (req, res) => {
  const result = await prisma.user.create({
    data: { ...req.body },
  })
  res.json(result)
});

app.get("/gifts", async (req, res) => {
  const gifts = await prisma.gifts.findMany();
  res.json(gifts);
});

app.get("/gift/:id", async (req, res) => {
  const {id} = req.params;
  const result = await prisma.gifts.findUnique({
    where: { id: parseInt(id) },
  });
  res.json(result);
});

app.post("/gift", async (req, res) => {
  const result = await prisma.gifts.create({
    data: { ...req.body },
  });
  res.json(result);
});


app.listen(3000, () => console.log("REST API server ready at: http://localhost:3000"));
