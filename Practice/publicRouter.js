const express = require("express");

const publicRouter = express.Router();

// const log = (req, res, next) => {
//   console.log("I am logging something");
//   next();
// };

// publicRouter.all("*", log);

// publicRouter.param("user", (req, res, next, id) => {
//   req.user = id === "1" ? "Admin" : "Anonymous";
//   next();
// });

publicRouter.param((param, option) => {
  return (req, res, next, val) => {
    if (val === option) {
      next();
    } else {
      res.sendStatus(403);
    }
  };
});

publicRouter.param("user", "12");

publicRouter.get("/:user", (req, res) => {
  res.send(`Hello admin`);
  //   res.send(`Hello ${req.user}`);
});

publicRouter.get("/about", (req, res) => {
  res.send("About");
});

module.exports = publicRouter;
