const express = require("express");
const app = express();

app.get("/docker", (req, res) => {
  res.send("lets test last time now AWS");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});