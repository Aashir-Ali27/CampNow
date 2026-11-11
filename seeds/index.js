
const mongoose = require('mongoose');
const Campground = require('../models/campground')
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');

mongoose.connect('mongodb://127.0.0.1:27017/campground-maptiler');

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"))
db.once("open", () => {
    console.log("Database Connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];


const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {

        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            author: '6af4ae7cc48707e62f9b915d',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            geometry: {
                type: "Point",
                coordinates: [
                    cities[random1000].longitude,
                    cities[random1000].latitude,
                ]
            },
            title: `${sample(descriptors)} ${sample(places)}`,
            description:' ',
            price,
            images: [
                {
                    url: 'https://res.cloudinary.com/pqqfyqbw/image/upload/v1794151663/Campground/gbfc0hcmrjd1a7dk9fo1.jpg',
                    filename: 'Campground/gbfc0hcmrjd1a7dk9fo1',
                    
                },
                {
                    url: 'https://res.cloudinary.com/pqqfyqbw/image/upload/v1794151663/Campground/okgiqzhhqtje8unlixxr.jpg',
                    filename: 'Campground/okgiqzhhqtje8unlixxr',
                    
                }
            ]

        })
        await camp.save();
    }
}

seedDB();