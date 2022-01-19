const knex = require("knex")

const db = require("../../data/db-config")

// DO YOUR MAGIC
const express = require("express")
const Cars = require("../cars/cars-model")
const router = express.Router()

router.get("/", (req, res) => {
  res.send("The / endpoint is working")
})

module.exports = router
