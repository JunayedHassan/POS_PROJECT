const mongoose = require('mongoose')
const dotenv = require('dotenv');
const connectDB = require('./config/config.js');
const ItemModel = require('./models/itemModel');
const items = require('./utils/data.js');
require('colors')
//config
dotenv.config()
connectDB()

//function seeder
const importData = async () => {
    try {
        await ItemModel.deleteMany()
        const itemsData = await ItemModel.insertMany(items);
        console.log("All items Adeded".bgGreen);
        process.exit();
    } catch (error) {
        console.log(`${error.message}`.bgRed.inverse);
        process.exit(1);
    }
};

importData();