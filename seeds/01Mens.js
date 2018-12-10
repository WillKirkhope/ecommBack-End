exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('mens').del()
    .then(function () {
      // Inserts seed entries
      return knex('mens').insert([
        {name: 'Plain T-Shirt',
        description: 'It is a plain t-shirt',
        price: 12.99,
        image: 'https://rebuild-catalog.rushordertees.com/modelImages/3600_00_fr.jpg'
      },{name: 'Black T-Shirt',
          description: 'It is a plain t-shirt, but in black',
          price: 12.99,
          image: 'https://www.bigw.com.au/medias/sys_master/images/images/h5b/h7d/11436621234206.jpg'
        },{name: 'Graphic T-Shirt',
          description: 'Probably should not wear this to the office',
          price: 19.99,
          image: 'https://ae01.alicdn.com/kf/HTB12W7YSpXXXXX3XpXXq6xXFXXXd/pornhub-TShirt-men-boy-Summer-O-Neck-white-youth-t-shirt-casual-white-print-anime-t.jpg_640x640.jpg'
        },{name: 'Black Graphic T-Shirt',
          description: 'It is a graphic t-shirt, but in black',
          price: 19.99,
          image: 'https://www.affordable.pk/uploads/products/thumbs/large_15202579930_133.JPG'
        },{name: 'Long Sleeve Knit',
          description: 'It is a nice comfy long sleeve',
          price: 24.99,
          image: 'https://images-na.ssl-images-amazon.com/images/I/51gwOBmLxeL._UX385_.jpg'
        },{name: 'Jersey Long Sleeve',
          description: 'Its a Jersey Long Sleeve',
          price: 24.99,
          image: 'https://m.media-amazon.com/images/S/aplus-media/sota/f2661d94-ca5b-4946-b6b1-9232c5a21e0c.jpg'
        },{name: 'Denim',
          description: 'Denim Pants',
          price: 49.99,
          image: 'https://s7d2.scene7.com/is/image/aeo/0112_4190_896_v?$cat-video-poster$'
        },{name: 'Khakis',
          description: 'Khaki Pants',
          price: 49.99,
          image: 'https://s7d2.scene7.com/is/image/aeo/1121_3855_260_of?$PDP_78_Main$'
        },{name: 'SnapBack',
          description: 'Its a hat, for you know, hat things',
          price: 24.99,
          image: 'http://www.headswear.com/wp-content/uploads/2015/01/snapback-double-color-s.jpg'
        },{name: 'Belt',
          description: 'Hold up your pants with this crazy new belt!',
          price: 15.99,
          image: 'https://images.express.com/is/image/expressfashion/0028_04543004_0486?cache=on&wid=361&fmt=jpeg&qlt=75,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon'
        }
      ]);
    });
};
