const express = require("express");
const app = require("express")();
const axios = require("axios");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const events = [];

app.post("/events", (req, res) => {
  const event = req.body;

  events.push(event);

  axios.post("http://posts:4000/events", event);
  axios.post("http://comments:4001/events", event);
  axios.post("http://query:4002/events", event);
  axios.post("http://moderation:4003/events", event);

  res.send({ status: "ok" });
});

app.get("/events", (req, res) => {
  res.send(events);
});

app.listen(4005, () => console.log(`Server is running on port 4005`));
