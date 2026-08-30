import express from "express";
import authRoutes from './routes/auth.routes.js'


const app = express();

app.use(express.json());

app.use("/auth", authRoutes)

app.get("/", (req, res) => {
  res.send("Hello World from Muzmamil ali");
});

app.listen(4000, () => {
  console.log("http://localhost:4000");
});
