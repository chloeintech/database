const mongoose = require("mongoose")

// Movie:
// id: String
// title: String
// director: String
// genre: String

const movieSchema = new mongoose.Schema ({
    title: {
        type: String, 
        required: true,
        unique: true
    },
    director: {
        type: String, 
        required: true,
    },
    genre: {
        type: String, 
        required: true,
    }
})

const Movie = mongoose.model("Movie", movieSchema)

module.exports = Movie