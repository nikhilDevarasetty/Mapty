const express = require("express");
const { mapModel } = require("./connector");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/mappoints", (req, res) => {
  // console.log("entered get");
  mapModel
    .find()
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send(err.message);
    });
});

app.post("/mappoints", (req, res) => {
  const newMapPoint = new mapModel({
    ...req.body,
  });
  // console.log(req.body);
  newMapPoint
    .save()
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => res.status(500).send(err.message));
});

app.put("/mappoints/:id", (req, res) => {
  mapModel
    .updateOne({ _id: req.params.id }, req.body)
    .then(() => res.sendStatus(200))
    .catch((err) => res.send(err.message));
});

app.delete("/mappoints/:id", (req, res) => {
  mapModel
    .deleteOne({ _id: req.params.id })
    .then(res.sendStatus(200))
    .catch((err) => res.send(err.message));
});

app.listen(9999, () => console.log("app listening to port 9999"));
