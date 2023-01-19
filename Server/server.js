const express = require("express");
const cors = require("cors");

const bodyParser = require("body-parser");
const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000"],
    method: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// ? listen to port 3008
app.listen(3008, () => {
  console.log("listening on 3008");
});
