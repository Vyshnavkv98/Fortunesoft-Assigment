import { IMovies } from "../../domain/interface/IMovies";



export async function groupMoviesByCategory(movies: IMovies[]): Promise<{ [category: string]: IMovies[] }> {
    const groupedMovies: { [category: string]: IMovies[] } = {};

    movies.forEach((movie: IMovies) => {
       movie.genres.forEach((movieCategory:string)=>{
        console.log(movieCategory);
        
        if (!groupedMovies[movieCategory]) {
            groupedMovies[movieCategory] = [];
        }
        groupedMovies[movieCategory].push(movie);
       })
    });

    return groupedMovies;
}