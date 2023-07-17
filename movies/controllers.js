const Movie = require("./model") // Importing the model so we can use it in this file.

// Handling a GET request when a request is made to /movies/getallmovies endpoint. It retrives all books from the database using the Movie.find({}) method. this code fetches all boo from a database and sends a JSON response with the retrieved books as the response body, along with a success message. If any error occurs, it will be logged to the console.
const getAllMovies = async (request, response) => {

// awaiting database connection and uses function Movie.find.
    try {
        const movies = await Movie.find({})

        // returns success if added
        const successResponse = {
            message: "Movies successfully found.",
            movies: movies
        }
        response.send(successResponse)
    
    // Throws error is not
    } catch (error) {
        console.log (error)
    }
};

// // Handling a POST request when a request is made to the /movies/addmovies endpoint. It adds a new movie to the database using the Movies.updateOne({}) method.

const addMovie = async (request, response) => {
    
    try {
        const newMovie = await Movie.create({
            // id: Math.floor(Math.random()*50)
            title: request.body.title,
            director: request.body.director,
            genre: request.body.genre
            })

            const successResponse = {
                message: "Movie successfully added.",
                newMovie: newMovie
            }
            response.send(successResponse)
            
    } catch (error) {
        console.log (error)
    }
};
  
// // Handling a DELETE request when a request is made to the /movies/deletemoive endpoint. It deletes a movie by title.

const deleteMovie = async (request, response) => {
    try {
        const deletedMovie = await Movie.deleteOne({ 
            title: request.body.title});

            const successResponse = {
                message: "Movie successfully deleted.",
                deleteMovie: deletedMovie
            }
            response.send(successResponse)
            
    } catch (error) {
        console.log (error)
    }
};

// // Handling a UPDATE request when a request is made to the /movies/updatebook endpoint.

const updateMovie = async (request, response) => {
    try {
        const updMovie = await Movie.updateOne({ 
            title: request.body.title,
            updTitle: request.body.title,
        
        });

            const successResponse = {
                message: "Movie successfully updated.",
                updMovie: updMovie
            }
            response.send(successResponse)
            
    } catch (error) {
        console.log (error)
    }
}

module.exports = {
    getAllMovies,
    addMovie,
    updateMovie,
    deleteMovie
}
