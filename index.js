const express = require("express");
const res = require("express/lib/response");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello from Node JS Server!");
});

app.get("/data", (req, res) => {
  res.send("Data will be send from here!! ok?");
});
app.get("/nodemon", (req, res) => {
  res.send("Nodemon added!! ok?");
});

app.listen(port, () => {
  console.log(`wow! my first server, running on: ${port}`);
});
