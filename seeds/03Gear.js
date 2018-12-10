exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('gear').del()
    .then(function () {
      // Inserts seed entries
      return knex('gear').insert([
        {name: 'Stickers!!!!',
        description: 'Stikers!!!',
        price: 2.99,
        image: 'http://blog.jakprints.com/wp-content/uploads/2016/02/Custom-Stickers.jpg'
        },{name: 'Mugs',
          description: 'Mugs',
          price: 15.99,
          image: 'https://www.qualitylogoproducts.com/custom-mugs/white-ceramic-mug-jumboextralarge-458954.jpg'
        },{name: 'Lanyards',
          description: 'Lanyardse',
          price: 9.99,
          image: 'https://cdn11.bigcommerce.com/s-n4y7l3gp/images/stencil/2048x2048/products/243/1313/IMG_4552__41094.1513961613.jpg?c=2'
        },{name: 'Skateboards!',
          description: 'Skateboards!',
          price: 49.99,
          image: 'https://www.nativeskatestore.co.uk/images/santa-cruz-skateboards-minimal-hand-candy-pink-skateboard-deck-8-25-p34356-85383_image.jpg'
        }
      ]);
    });
};
