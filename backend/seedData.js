const mongoose = require('mongoose');
const Destination = require('./models/Destination');

const sampleData = [
  {
    name: "Delhi",
    description: "The capital city of India, rich in history and culture",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.1&auto=format&fit=crop&w=1950&q=80",
    rating: 4.5,
    categories: [
      {
        name: "Historical Monuments",
        description: "Ancient architectural marvels",
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.1&auto=format&fit=crop&w=1950&q=80",
        locations: [
          {
            name: "Red Fort",
            latitude: 28.6562,
            longitude: 77.2410,
            description: "A historical fort in the city of Delhi in India",
            image: "https://images.unsplash.com/photo-1596383527923-262efe3d0b0a?ixlib=rb-4.0.1&auto=format&fit=crop&w=1950&q=80"
          },
          {
            name: "Qutub Minar",
            latitude: 28.5245,
            longitude: 77.1855,
            description: "A minaret and victory tower in Delhi",
            image: "https://images.unsplash.com/photo-1557237339-db1d6b9d6c5a?ixlib=rb-4.0.1&auto=format&fit=crop&w=1950&q=80"
          }
        ],
        posts: [
          {
            title: "Exploring the Red Fort",
            content: "The Red Fort is a magnificent piece of architecture...",
            author: "Travel Expert",
            images: ["https://images.unsplash.com/photo-1596383527923-262efe3d0b0a?ixlib=rb-4.0.1&auto=format&fit=crop&w=1950&q=80"]
          }
        ]
      }
    ]
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/travel-agency');
    await Destination.deleteMany({});
    await Destination.insertMany(sampleData);
    console.log('Database seeded successfully');
    process.exit();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();