exports.up = function(knex, Promise) {
  return knex.schema.createTable('womens', womens => {
    mens.increments()
    mens.string('name')
    mens.string('description')
    mens.float('price')
    mens.text('image')
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('womens')
};
