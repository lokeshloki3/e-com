// const { faker } = require('@faker-js/faker');
// const Category = require('../models/Category');

// const loadCategories = async () => {
//     try {
//         await Category.deleteMany({}); // Clear existing entries if required

//         // Create 100 fake categories
//         const categories = Array.from({ length: 100 }, () => ({
//             name: faker.commerce.department(),
//         }));

//         await Category.insertMany(categories);
//         console.log('Loaded with 100 categories');
//     } catch (err) {
//         console.error('Error seeding categories:', err);
//     }
// };

// module.exports = loadCategories;


const { faker } = require('@faker-js/faker');
const Category = require('../models/Category');
const mongoose = require('mongoose');

const loadCategories = async () => {
    try {
        // Wait until Mongoose is fully connected
        if (mongoose.connection.readyState !== 1) {
            console.log("⏳ Waiting for database connection...");
            await new Promise((resolve) => mongoose.connection.once("open", resolve));
        }

        console.log("✅ Database is ready. Seeding categories...");

        await Category.deleteMany({}); // Clear existing entries if required

        // Create 100 fake categories
        const categories = Array.from({ length: 100 }, () => ({
            name: faker.commerce.department(),
        }));

        await Category.insertMany(categories);
        console.log("Loaded with 100 categories");
    } catch (err) {
        console.error("Error seeding categories:", err);
    }
};

module.exports = loadCategories;
