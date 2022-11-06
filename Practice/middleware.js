const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

/////////Third party middleware
app.use(cookieParser());

////////Built in middleware
// app.use(express.json())

const adminRouter = express.Router();

const loggerWrapper = (options) => {
  return function (req, res, next) {
    if (options.log) {
      console.log(
        `${new Date(Date.now()).toLocaleString()} - ${req.method} - ${
          req.originalUrl
        } ${req.protocol} ${req.ip}`
      );
      next();
    } else {
      throw new Error("Failed to log");
    }
  };
};

adminRouter.use(loggerWrapper({ log: true }));

// const myMiddleware1 = (req, res, next) => {
//   console.log(
//     `${new Date(Date.now()).toLocaleString()} - ${req.method} - ${
//       req.originalUrl
//     } ${req.protocol} ${req.ip}`
//   );
//   //   res.end();
//   //   next();
//   throw new Error("This is an error");
// };

//////////Router level middleware
// adminRouter.use(myMiddleware1);

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

const errorMiddleware = (err, req, res, next) => {
  console.log(err.message);
  res.status(500).send("There was a server side error");
};

/////////Error middleware
adminRouter.use(errorMiddleware);

app.listen(8000, () => {
  console.log("Listening on port 8000");
});
