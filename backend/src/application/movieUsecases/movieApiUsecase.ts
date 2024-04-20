import {IMovieRepository} from '../../domain/repositories/movieRepository'
import { MovieRepositoryImpl } from '../../infrastructure/dataAccess/movieRepositoryImpl';
import { groupMoviesByCategory } from '../../infrastructure/utils/groupMoviesByCategory';

let movieRepository=new MovieRepositoryImpl()
export class MovieApiUsecase {
    constructor() {}

    public async getMovies() {
        try {
            const result = await movieRepository.getAllMovies();
            
            const groupedMovies = await groupMoviesByCategory(result);
            return groupedMovies;
        } catch (error) {
            console.error('Error fetching movies:', error);
            throw error; 
        }
    }
}