const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.use(express.static("src"));

const { runQuery } = require("./services/bq");

app.post("/profile", async (req, res) => {
  runQuery(req.body.query).then((metadata) => {
    res.send(metadata);
  });
});

app.listen(port, () => {
  console.log(`Webserver started on port ${port}`);
});
