const express = require("express");
const app = require("express")();
const axios = require("axios");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/events", (req, res) => {
  const event = req.body;

  axios.post("http://localhost:4000/events", event);
  axios.post("http://localhost:4001/events", event);
  axios.post("http://localhost:4002/events", event);

  res.send({ status: "ok" });
});

app.listen(4005, () => console.log(`Server is running on port 4005`));
