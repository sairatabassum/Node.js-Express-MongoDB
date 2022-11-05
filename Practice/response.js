const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/about", (req, res) => {
  //   console.log(res.headersSent);

  //   res.render("pages/about", {
  //     name: "Bangladesh",
  //   });
  //   console.log(res.headersSent);

  //   res.send("about");
  //   res.end();

  //   res.json({
  //     name: "Bangladesh",
  //   });

  //   res.status(200);
  //   res.end();

  res.sendStatus(400);
});

app.listen(8000, () => {
  console.log("Listening on port 8000");
});
