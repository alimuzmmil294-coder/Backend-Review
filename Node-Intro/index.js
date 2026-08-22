import http from "http";
import url from "url";

let Name = " Muzammil Ali";
let age = 20;
const server = http.createServer((req, res) => {
  const hell = url.parse(req.url);
  console.log(hell.pathname);

  res.end(`Hello ${Name} how are you? Your age is ${age}!`);
});

server.listen(3500, () => {
  console.log("Server is running on http://localhost:3500");
});
