// STRETCH
exports.seed = function (knex) {
  return knex("cars")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("cars").insert([
        {
          vin: "ljdsfoi",
          make: "Ford",
          model: "Mustang",
          mileage: "4325",
          title: "new",
          transmission: "manual",
        },
        {
          vin: "adfadf",
          make: "ford",
          model: "F150",
          mileage: "2343243",
          title: "new",
          transmission: "manual",
        },
        {
          vin: "grapes",
          make: "chevrolet",
          model: "camaro",
          mileage: "2434323",
          title: "new",
          transmission: "manual",
        },
      ])
    })
}
