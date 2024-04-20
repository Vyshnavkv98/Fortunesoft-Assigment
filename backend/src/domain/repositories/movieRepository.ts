import { IMovies } from "../interface/IMovies";

export interface IMovieRepository{
    getAllMovies():Promise<IMovies[]>
}