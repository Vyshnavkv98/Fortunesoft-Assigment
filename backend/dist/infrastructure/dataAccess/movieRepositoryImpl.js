"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieRepositoryImpl = void 0;
const movies_1 = __importDefault(require("../../domain/models/movies"));
class MovieRepositoryImpl {
    constructor() {
    }
    async getAllMovies() {
        try {
            const movies = await movies_1.default.find();
            return movies;
        }
        catch (error) {
            console.log(error.message);
            throw new Error('Error fetching movies from database');
        }
    }
}
exports.MovieRepositoryImpl = MovieRepositoryImpl;
//# sourceMappingURL=movieRepositoryImpl.js.map