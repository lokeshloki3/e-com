const mongoose = require("mongoose");

require("dotenv").config();

const connectWithDb = () => {
    mongoose.connect(process.env.DATABASE_URL,{
        serverSelectionTimeoutMS: 30000,
    })
    .then(console.log("DB connected successfully"))
    .catch((error) => {
        console.log("DB facing connection issues");
        console.log(error);
        process.exit(1);
    })
};

module.exports = connectWithDb;