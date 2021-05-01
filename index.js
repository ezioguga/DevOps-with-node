const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("<h2> Hello World from Docker from prod!!! </h2>");
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`listening on port ${port}`));
