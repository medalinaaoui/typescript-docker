"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { PrismaClient } from "@prisma/client";
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/test", (req, res) => {
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
