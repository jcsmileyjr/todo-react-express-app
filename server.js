const express = require("express");
const app = express();

let PORT = 5000;

app.listen(PORT, () => {
  console.log("Hello World, the basic server is running");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});
