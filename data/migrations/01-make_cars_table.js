exports.up = async function (knex) {
  // DO YOUR MAGIC
  await knex.schema.createTable("cars", (table) => {
    table.increments()
    table.text("vin", 128).unique().notNullable()
    table.text("make", 128).notNullable()
    table.text("model", 128).notNullable()
    table.integer("mileage", 128).notNullable()
    table.text("title", 128)
    table.text("transmission", 128)
  })
}

exports.down = async function (knex) {
  // DO YOUR MAGIC
  await knex.schema.dropTableIfExists("fruits")
}
