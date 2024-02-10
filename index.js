const express = require("express");
const app = express();
const port = process.env.port || 5000;

app.get("/", (req, res) => {
  res.send("hello from user server");
});

app.listen(port, () => {
  console.log(`server is running from: ${port}`);
});
