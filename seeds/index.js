const mongoose = require('mongoose');
const Campground = require('../models/campground');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection: error:"));
db.once("open", () => {
    console.log('Database connected');
})

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; ++i) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 30) + 10;
        const camp = new Campground({
            author: '60b4736ede39f605ccacb9e8',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos minus eum, temporibus ducimus, ipsum veniam eaque quaerat necessitatibus voluptates numquam sint doloremque doloribus optio consectetur. Laudantium odit tempore delectus ea.',
            price,
            geometry: {
                type: 'Point',
                coordinates: [77.2, 28.7]
            },
            images: [
                {
                    url: 'https://res.cloudinary.com/mysterica/image/upload/v1622519183/HotelReviewApp/sdlyq2xizzpxkgag9y6d.jpg',
                    filename: 'HotelReviewApp/sdlyq2xizzpxkgag9y6d'
                },
                {
                    url: 'https://res.cloudinary.com/mysterica/image/upload/v1622519183/HotelReviewApp/orpewl9pej7bakkcz6oa.jpg',
                    filename: 'HotelReviewApp/orpewl9pej7bakkcz6oa'
                }
            ]
        });
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
});