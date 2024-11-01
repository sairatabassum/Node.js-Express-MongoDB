const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(cookieParser());

const adminRoute = express.Router();

adminRoute.get("/dashboard", (req, res) => {
  //   console.log(req.baseUrl);
  //   console.log(req.originalUrl);
  //   console.log(req.url);
  console.log(req.ip);

  res.send("We are in admin dashboard");
});

app.use("/admin", adminRoute);

app.get("/user/:id", (req, res) => {
  //   console.log(req.baseUrl);
  //   console.log(req.originalUrl);
  //   console.log(req.url);
  //   console.log(req.hostname);
  //   console.log(req.params);
  //   console.log(req.query);
  //   console.log(req.cookies);
  console.log(req.accepts("html"));

  res.send("hello");
});

app.post("/user/:id", (req, res) => {
  console.log(req.body);
  res.send("Hello world");
});

app.listen(8000, () => {
  console.log("listening on port 8000");
});
