const express = require("express");

const app = express();

const adminRoute = express.Router();

adminRoute.get("/dashboard", (req, res) => {
  //   console.log(req.baseUrl);
  //   console.log(req.originalUrl);
  console.log(req.url);

  res.send("We are in admin dashboard");
});

app.use("/admin", adminRoute);

app.get("/user/:id", (req, res) => {
  //   console.log(req.baseUrl);
  //   console.log(req.originalUrl);
  console.log(req.url);

  res.send("hello");
});

app.listen(8000, () => {
  console.log("listening on port 8000");
});
