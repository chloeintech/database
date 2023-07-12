require ("dotenv").config();
const mongoose = require("mongoose")

console.log(process.env.MONGO_URI)

const connection = async () => {
    try {

        await mongoose.connect (
            process.env.MONGO_URI
        )
        console.log("DB connection established")
    } catch (error) {
        console.log(error)

    }
}

connection()