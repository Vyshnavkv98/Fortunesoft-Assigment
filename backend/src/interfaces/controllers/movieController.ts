import { Request, Response } from "express";
import { MovieApiUsecase } from "../../application/movieUsecases/movieApiUsecase";
import { MovieRepositoryImpl } from "../../infrastructure/dataAccess/movieRepositoryImpl";
import Movie from "../../domain/models/movies";

let movieApiUsecase= new MovieApiUsecase()
export class movieController{
       constructor(){
  }
    public async getAllMovies(req:Request,res:Response):Promise<void>{
      try {
        
        const response=await movieApiUsecase.getMovies()

      if(response){
        res.status(200).send(response)
      }
      } catch (error:any) {
        console.log(error.message);
        
      }
    }
}