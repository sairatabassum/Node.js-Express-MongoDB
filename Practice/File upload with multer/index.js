const express = require("express");
const multer = require("multer");

// File upload folder
const UPLOADS_FOLDER = "upload/";

// prepare the final multer upload object
var upload = multer({
  dest: UPLOADS_FOLDER,
});

const app = express();

// application route
// For single file upload
// app.post("/", upload.single("avatar"), (req, res) => {
//   res.send("Hello World");
// });

// For multiple file upload
app.post("/", upload.array("avatar"), (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("App listening at port 3000");
});
