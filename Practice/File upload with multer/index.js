const express = require("express");
const multer = require("multer");

// File upload folder
const UPLOADS_FOLDER = "/uploads/";

// prepare the final multer upload object
var upload = multer({
  dest: UPLOADS_FOLDER,
});

const app = express();

// application route
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("App listening at port 3000");
});
