const express = require("express");
const path = require("path");

const app = express();

const hostname = "127.0.0.1";

const port = "3000";

app.use("/public", express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
