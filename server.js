const Todo = require("./routes/todo.js");
const express = require("express");
const app = express();

let PORT = 5000;

const cors = require("cors"); // library to help with cors issues
app.use(cors());
app.use(express.urlencoded({ extended: false })); // parse incoming data within the body
app.use(express.json());

// Logs that the server is working in the server terminal
app.listen(PORT, () => {
  console.log("Hello World, the basic server is running again");
});

// Route for creating, deleting, updating, and getting TODOs
app.use("/v1/todo", Todo);

// Route to check if server is working in the broswer
app.get("/", (req, res) => {
  res.send("Hello World");
});
