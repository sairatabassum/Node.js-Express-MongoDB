const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

const adminRouter = express.Router();

const myMiddleware1 = (req, res, next) => {
  console.log(
    `${new Date(Date.now()).toLocaleString()} - ${req.method} - ${
      req.originalUrl
    } ${req.protocol} ${req.ip}`
  );
  //   res.end();
  next();
};

//////////Router level middleware
adminRouter.use(myMiddleware1);

adminRouter.get("/dashboard", (req, res) => {
  res.send("Dashboard");
});

// const myMiddleware2 = (req, res, next) => {
//   console.log(" i am logging 2");
//   next();
// };

////////Application level middleware
// app.use(myMiddleware1);

app.use("/admin", adminRouter);
// app.use(myMiddleware2);

app.get("/about", (req, res) => {
  res.send("About");
});

app.listen(8000, () => {
  console.log("Listening on port 8000");
});
