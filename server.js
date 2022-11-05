const Todo = require('./routes/todo.js');
const express = require("express");
const app = express();

let PORT = 5000;

const cors = require("cors");
app.use(cors());

app.listen(PORT, () => {
  console.log("Hello World, the basic server is running again");
});

app.use("/v1/todo", Todo);

app.get("/", (req, res) => {
  res.send("Hello World");
});
