const { Router } = require("express") // Getting the router from express.
const movieRouter = Router() // Assigning the Router to movieRouter.

// These functions are in the controllers, so we need to bring them in here.
const { getAllMovies, addMovie, updateMovie, deleteMovie } = require("./controllers")

// Directs the request to the appropriate function.
// EXPRESS.REQUEST_TYPE.("ROUTE"),FUNCTION_IN_CONTROLLERS
movieRouter.get("/movies/getallmovies", getAllMovies)
movieRouter.post("/movies/addmovie", addMovie)
movieRouter.put("/movies/updatemovie", updateMovie)
movieRouter.delete("/movies/deletemovie", deleteMovie)

// Exports MovieRouter (function) so it can be used elsewhere (in other pages).
module.exports = movieRouter

