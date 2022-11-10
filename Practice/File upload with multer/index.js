const express = require("express");
const multer = require("multer");

// File upload folder
const UPLOADS_FOLDER = "upload/";

// prepare the final multer upload object
var upload = multer({
  dest: UPLOADS_FOLDER,
  limits: {
    fileSize: 1000000, //1MB
  },
  fileFilter: (req, file, cb) => {
    // console.log(file);
    if (file.fieldname === "avatar") {
      if (
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/jpeg"
      ) {
        cb(null, true);
      } else {
        cb(new Error("Only .jpg, .png or .jpeg format allowed"), false);
      }
    } else if (file.fieldname === "doc") {
      if (file.mimetype === "application/pdf") {
        cb(null, true);
      } else {
        cb(new Error("Only .pdf format allowed"));
      }
    } else {
      cb(new Error("There was an unknown error"));
    }
  },
});

const app = express();

// application route
// For single file upload-----------
// app.post("/", upload.single("avatar"), (req, res) => {
//   res.send("Hello World");
// });

// For multiple file upload
// app.post("/", upload.array("avatar", 3), (req, res) => {
//   res.send("Hello World");
// });

// For multipart form-------
app.post(
  "/",
  upload.fields([
    { name: "avatar", maxCount: 3 },
    { name: "doc", maxCount: 2 },
  ]),
  (req, res) => {
    res.send("Hello World");
  }
);

// For none ----------------
// app.post("/", upload.none(), (req, res) => {
//   res.send("Hello World!!");
// });

// default error handler
app.use((err, req, res, next) => {
  if (err) {
    if (err instanceof multer.MulterError) {
      res.status(500).send("There was an upload error");
    } else {
      res.status(500).send(err.message);
    }
  } else {
    res.send("success");
  }
});

app.listen(3000, () => {
  console.log("App listening at port 3000");
});
