const express = require("express");
const app = express();

app.get("/docker", (req, res) => {
  res.send("wao we have setup one pipeline Shubham our first pipeline with AWS");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});