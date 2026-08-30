import express from "express";

const app = express();

app.use(express.json());

app.post("/login", (req, res) => {
  const data = req.body;
  const id = req.params;
  const query = req.query;
  console.log(query);
  console.log(data);

  res.json({
    message: data,
    // ID: id,
    QueryData: query,
    success: true,
  });
});

app.listen(3000, () => {
  console.log("The server is running on: http://localhost:3000");
});
