exports.up = async function (knex) {
  // DO YOUR MAGIC
  await knex.schema.createTable('cars', (table)=>{
    table.increments()
    table.text('vin',128).unique().notNullable()
    table.text('make',128).unique().notNullable()
    table.text('model',128).unique().notNullable()
    table.text('mileage',128).unique().notNullable()
    table.text('title',128).unique().notNullable()
    table.text('transmission',128).unique().notNullable()
  })
};

exports.down = async function (knex) {
  // DO YOUR MAGIC
  await 
};
