// import { PrismaClient } from "@prisma/client";
import express, { Request, Response } from "express";

const app = express();

app.use(express.json());

app.get("/test", (req: Request, res: Response) => {
  res.send("working");
});

// const prisma = new PrismaClient();

// async function main(name: string, email: string) {
//   const user = await prisma.user.create({
//     data: {
//       name,
//       email,
//     },
//   });
//   console.log(user);
// }

// app.post("/newuser", (req, res) => {
//   const { name, email } = req.body;
//   main(name, email)
//     .then(async () => {
//       await prisma.$disconnect();
//     })
//     .catch(async (e) => {
//       console.error(e);
//       await prisma.$disconnect();
//       process.exit(1);
//     });
// });

const PORT = 8000;

app.listen(PORT, () => {
  console.log("app running on port: ", PORT);
});
