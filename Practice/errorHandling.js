const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(a);
});

// 404 error handler
app.use((req, res, next) => {
  next("request url was not found");
});

app.use((err, req, res, next) => {
  // handle error here
  if (res.headerSent) {
    next("There was a problem");
  } else {
    if (err.message) {
      res.status(500).send(err.message);
    } else {
      res.status(500).send("There was an error");
    }
  }
});

app.listen(3000, () => {
  console.log("App listening at port 3000");
});
