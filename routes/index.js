const express = require("express");
const router = express.Router();

const messages = [
  {
    user: "Sauske",
    message: "It's not the future I dream of anymore, only the past.",
    date: new Date(),
  },
  {
    user: "Jiraiya",
    message:
      "When peopel get hurt, they learn to hate... When people hurt others, they become hated and racked with guilt. But Knowing that pain allows people to be kind. Pain allows people to grow... And how you grow is up to you.",
    date: new Date(),
  },
  {
    user: "Naruto",
    message:
      "It's not face that makes someone a monster; Its the choices they make with their lives.",
    date: new Date(),
  },
];

router.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

module.exports = router;
