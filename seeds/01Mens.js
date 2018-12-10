exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('mens').del()
    .then(function () {
      // Inserts seed entries
      return knex('mens').insert([
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
