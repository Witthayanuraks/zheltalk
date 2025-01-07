import express = require('express')
const express = require("express");
const router = express.Router();

router.get("/hello", (req, res) => {
  res.json({ message: "Tes bekend" });
});

module.exports = router;
