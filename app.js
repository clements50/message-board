const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () =>
  console.log(`server is active on http://localhost${port}`)
);
