const express = require("express");
const app = express();

app.get("/docker", (req, res) => {
  res.send("Hello World you deployed your apps what a great job");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});