exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('womens').del()
    .then(function () {
      // Inserts seed entries
      return knex('womens').insert([
        {name: 'Plain T-Shirt',
        description: 'It is a plain t-shirt',
        price: 12.99,
        image: 'https://cdn8.bigcommerce.com/s-003c4/images/stencil/1280x1280/products/2261/10116/womens_navy_triblend_dolman-1__75096.1506017583.jpg?c=2&imbypass=on'
      },{name: 'Black T-Shirt',
          description: 'It is a plain t-shirt, but in black',
          price: 12.99,
          image: 'https://cdn8.bigcommerce.com/s-003c4/images/stencil/1280x1280/products/2247/10009/womens_charcoal_triblend_tshirt-1__99022.1506016133.jpg?c=2&imbypass=on'
        },{name: 'Graphic T-Shirt',
          description: 'Probably should not wear this to the office',
          price: 19.99,
          image: 'https://scene7.zumiez.com/is/image/zumiez/pdp_hero/Kill-Brand-Slay-Michelle-Boyfriend-T-Shirt-_280310-front-US.jpg'
        },{name: ' Black Graphic T-Shirt',
          description: 'It is a graphic t-shirt, but in black',
          price: 19.99,
          image: 'https://s7d9.scene7.com/is/image/zumiez/cat_max/Thrasher-Flame-Logo-Black-Boyfriend-Fit-T-Shirt-_273175.jpg'
        },{name: 'Long Sleeve Knit',
          description: 'It is a nice comfy long sleeve',
          price: 24.99,
          image: 'https://s7d9.scene7.com/is/image/zumiez/cat_max/Champion-Script-Sleeves-Black-Long-Sleeve-T-Shirt-_290770.jpg'
        },{name: 'Jersey Long Sleeve',
          description: 'Its a Jersey Long Sleeve',
          price: 24.99,
          image: 'https://cdn11.bigcommerce.com/s-42xpyu/images/stencil/500x659/products/5134/6994/414411__25673.1532531830.jpg?c=2'
        },{name: 'Denim',
          description: 'Denim Pants',
          price: 49.99,
          image: 'https://images.express.com/is/image/expressfashion/0091_07198105_0019?cache=on&wid=361&fmt=jpeg&qlt=75,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon'
        },{name: 'Khakis',
          description: 'Khaki Pants',
          price: 49.99,
          image: 'https://s7d2.scene7.com/is/image/aeo/0327_3023_207_v?$cat-video-poster$'
        },{name: 'SnapBack',
          description: 'Its a hat, for you know, hat things',
          price: 24.99,
          image: 'http://www.headswear.com/wp-content/uploads/2015/01/snapback-double-color-s.jpg'
        },{name: 'Belt',
          description: 'Hold up your pants with this crazy new belt!',
          price: 15.99,
          image: 'https://www.jcrew.com/s7-img-facade/F9579_BK0001?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&wid=636&hei=636'
        }
      ]);
    });
};
