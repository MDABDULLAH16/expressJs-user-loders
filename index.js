const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.port || 5000;
app.use(cors());
app.use(express.json());

const users = [
  { id: 1, name: "sabana", email: "sabana@gmail.com" },
  { id: 2, name: "Rakib", email: "rakib@gmail.com" },
  { id: 3, name: "saab", email: "saba@gmail.com" },
  { id: 4, name: "sabanur", email: "anurana@gmail.com" },
];

app.get("/", (req, res) => {
  res.send("hello from user server");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log("server side hitting");
  console.log(req.body);
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(newUser);
});
app.listen(port, () => {
  console.log(`server is running from: ${port}`);
});
