require('dotenv').config();
const mongoose = require("mongoose");

const URL = `mongodb+srv://bibekkumarmeher621:Bibek%40123%23@cluster0.ejtjods.mongodb.net/mern_admin?retryWrites=true&w=majority&appName=Cluster0`;

const connectDb = async () => {
    try {
        await mongoose.connect(URL);
        console.log("Database connection successful");
    } catch (err) {
        console.error("Database connection failed:", err);
        process.exit(1);
    }
}

module.exports = connectDb;
