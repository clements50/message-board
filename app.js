const express = require("express");
const indexRouter = require("./routes/index");

const app = express();

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);

const port = 3000;

app.listen(port, () =>
  console.log(`server is active on http://localhost:${port}`)
);
