exports.up = function(knex, Promise) {
  return knex.schema.createTable('gear', gear => {
    mens.increments()
    mens.string('name')
    mens.string('description')
    mens.float('price')
    mens.text('image')
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('gear')
};
