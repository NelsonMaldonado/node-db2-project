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
      res.status(500).json({ message: err.message })
    })
})

router.get("/:id", (req, res) => {
  Cars.getById(req.params.id)
    .then((car) => {
      if (car) {
        res.json(car)
      } else {
        res.status(404).json({ message: "faild to find car by id" })
      }
    })
    .catch((err) => {
      res.status(500).json({ message: err.message })
    })
})

router.post("/", (req, res) => {
  Cars.create(req.body)
    .then((car) => {
      res.status(201).json(car)
    })
    .catch((err) => {
      res.status(500).json({ message: err.message })
    })
})
module.exports = router
