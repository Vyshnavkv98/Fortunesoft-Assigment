import { IMovies } from '../../domain/interface/IMovies';
import Movie from '../../domain/models/movies';
import {IMovieRepository} from '../../domain/repositories/movieRepository'


export class MovieRepositoryImpl implements IMovieRepository {
    constructor() {
        
    }
    async getAllMovies(): Promise<IMovies[]> {
        try {
            const movies = await Movie.find();
            
            return movies; 
        } catch (error:any) {
            console.log(error.message);
            
            throw new Error('Error fetching movies from database'); 
        }
    }
}