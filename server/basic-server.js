const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.static("public"));

// app.get("/topics/components", (req, res) => {
//   res.send("hello");
// });

const server = app.listen(port);
module.exports = server;
