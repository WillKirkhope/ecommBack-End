
exports.up = function(knex, Promise) {
  return knex.schema.createTable('mens', mens => {
    mens.increments()
    mens.string('name')
    mens.string('description')
    mens.float('price')
    mens.text('image')
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('mens')
};
