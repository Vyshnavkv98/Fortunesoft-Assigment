import { Router } from 'express';
import { movieController } from '../controllers/movieController';
import authenticateToken from '../middleware/auth';

const movieRouter = Router();

let movie_controller = new movieController();

movieRouter.get('/',authenticateToken, movie_controller.getAllMovies);

export default movieRouter;