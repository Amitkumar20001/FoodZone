import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'Amit',
      email: 'admin@gmail.com',
      password: bcrypt.hashSync('1234'),
      isAdmin: true,
    },
    {
      name: 'Sumit',
      email: 'user@gmail.com',
      password: bcrypt.hashSync('123'),
      isAdmin: false,
    },
  ],

    products: [
        {
         
          name: 'Burger',
          slug: 'burger',
          category: 'Fast food',
          image: '/images/p1.jpg', // 679px × 829px
          price: 120,
          countInStock: 10,
          brand: 'Nestle',
          rating: 4.5,
          numReviews: 10,
          description: 'Delicious burger',
        },
        {
         
          name: 'Cake',
          slug: 'delicious-cake',
          category: 'Snacks',
          image: '/images/p2.jpg',
          price: 250,
          countInStock: 20,
          brand: 'Britannia',
          rating: 4.0,
          numReviews: 10,
          description: 'delicious cake',
        },
        {
          //_id : '3',
          name: 'dosa',
          slug: 'plain-dosa',
          category: 'fast food',
          image: '/images/p3.jpg',
          price: 25,
          countInStock: 0,
          brand: 'Nestle',
          rating: 4.5,
          numReviews: 14,
          description: 'Delicious dosa',
        },
        {
          //_id : '4',
          name: 'pizza',
          slug: "dominno's pizza",
          category: 'fast food',
          image: '/images/p4.jpg',
          price: 65,
          countInStock: 5,
          brand: 'Domino\'s',
          rating: 4.5,
          numReviews: 10,
          description: 'Delicious pizza',
        },
        {
          //  _id : '5',
            name: 'pizza2',
            slug: "dominno1's pizza",
            category: 'fast food',
            image: '/images/p4.jpg',
            price: 65,
            countInStock: 5,
            brand: 'Domino\'s',
            rating: 4.5,
            numReviews: 10,
            description: 'Delicious pizza',
          },
          {
          //  _id : '6',
            name: 'Burger2',
            slug: 'burger1',
            category: 'Fast food',
            image: '/images/p1.jpg', // 679px × 829px
            price: 120,
            countInStock: 10,
            brand: 'Nestle',
            rating: 4.5,
            numReviews: 10,
            description: 'Delicious burger',

          },
      ], 
};
export default data;