const express = require("express");
const cors = require("cors");
const contactsRouter = require("./app/routes/contact.route");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to contactbook application." });
});

// Routes
app.use("/api/contacts", contactsRouter);

module.exports = app;
