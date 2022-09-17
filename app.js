const express = require("express");
const path = require("path");
const indexRouter = require("./routes/index");

const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`server is active on http://localhost:${port}`)
);

module.exports = app;
