const Cars = require("./cars-model")
const vinValidator = require("vin-validator")

const checkCarId = (req, res, next) => {
  const { id } = req.params
  Cars.getById(id).then((car) => {
    if (car) {
      req.carFromDb = car
      next()
    } else {
      next({ status: 404, message: `car with id ${id} is not found` })
    }
  })
}

const checkCarPayload = (req, res, next) => {
  const { vin, make, model, mileage } = req.body
  if (vin === undefined) {
    next({
      status: 400,
    })
  }
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

module.export = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
}
