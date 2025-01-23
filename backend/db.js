const mongoose = require("mongoose");
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI;

const connectDB = async(req, res) => {
    try{
        await mongoose.connect(MONGO_URI);
    } catch (error){
        console.error("Error connecting to DB:", error)
        process.exit(0);
    }
}

module.exports = connectDB;