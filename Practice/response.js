const { json } = require("express");
const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/test", (req, res) => {
  res.send("hello");
});
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
  //   res.sendStatus(400);

  //   res.format({
  //     "text/plain": () => {
  //       res.send("hi");
  //     },
  //     "text/html": () => {
  //       res.render("pages/about", {
  //         name: "Bangladesh",
  //       });
  //     },
  //     "application/json": () => {
  //       res.json({
  //         message: "about",
  //       });
  //     },
  //     default: () => {
  //       res.status(406).send("not acceptable");
  //     },
  //   });

  //   res.cookie("name", "saira", {});
  //   res.location("/test");

  res.redirect("/test");
  res.end();
});

app.listen(8000, () => {
  console.log("Listening on port 8000");
});
