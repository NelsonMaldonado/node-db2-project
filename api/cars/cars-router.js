// DO YOUR MAGIC
const express = require("express")
const Cars = require("../cars/cars-model")
const router = express.Router()

// router.get("/", (req, res) => {
//   res.send("The / endpoint is working")
// })

router.get("/", (req, res) => {
  Cars.getAll()
    .then((car) => {
      res.json(car)
    })
    .catch((err) => {
      res.status(500).json({ message: "could not get cars" })
    })
})

router.get("/:id", (req, res) => {
  res.send("getting buy id working well")
})

module.exports = router
