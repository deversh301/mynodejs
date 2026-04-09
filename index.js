const express = require("express");
const app = express();

app.get("/docker", (req, res) => {
  console.log('testing server hit');
  res.send("hello shubham your AWS server is ruinning successfully");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});