exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('womens').del()
    .then(function () {
      // Inserts seed entries
      return knex('womens').insert([
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
