"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movieController = void 0;
const movieApiUsecase_1 = require("../../application/movieUsecases/movieApiUsecase");
let movieApiUsecase = new movieApiUsecase_1.MovieApiUsecase();
class movieController {
    constructor() {
    }
    async getAllMovies(req, res) {
        try {
            const response = await movieApiUsecase.getMovies();
            if (response) {
                res.status(200).send(response);
            }
        }
        catch (error) {
            console.log(error.message);
        }
    }
}
exports.movieController = movieController;
//# sourceMappingURL=movieController.js.map