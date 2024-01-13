const express = require("express");
const app = express();
const port = 8080;

app.use(express.json());

app.use(express.static("src"));

const { runQuery } = require("./services/bq");

app.post("/profile", (req, res) => {
  runQuery(req.body.query)
    .then((metadata) => {
      res.send(metadata);
    })
    .catch((error) => {
      res.status(500).send({ error: error });
    });
});

app.listen(port, () => {
  console.log(`Webserver started on port ${port}`);
});
