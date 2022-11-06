const express = require("express");
const adminRouter = require("./adminrouter");
const publicRouter = require("./publicRouter");

const app = express();

// app.get("/", (req, res) => {
//   res.send("Home");
// });

// app.get("/about", (req, res) => {
//   res.send("About");
// });

app.use("/admin", adminRouter);
app.use("/", publicRouter);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
