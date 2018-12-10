exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('gear').del()
    .then(function () {
      // Inserts seed entries
      return knex('gear').insert([
        {name: '',
        description: '',
        price: ,
        image: ''
        },{name: '',
          description: '',
          price: ,
          image: ''
        },{name: '',
          description: '',
          price: ,
          image: ''
        },{name: '',
          description: '',
          price: ,
          image: ''
        },{name: '',
          description: '',
          price: ,
          image: ''
        },{name: '',
          description: '',
          price: ,
          image: ''
        },{name: '',
          description: '',
          price: ,
          image: ''
        },{name: '',
          description: '',
          price: ,
          image: ''
        },{name: '',
          description: '',
          price: ,
          image: ''
        },{name: '',
          description: '',
          price: ,
          image: ''
        }
      ]);
    });
};
