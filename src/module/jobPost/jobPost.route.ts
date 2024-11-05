import { Router } from 'express';
import { Routes } from '../../interface/shared/routes.interface';
import { ApiV1 } from '../../utils/variable';
import JobPostingController from './jobPost.controller';

class AuthRoute implements Routes {
  public router = Router();
  public jobs = new JobPostingController();
  
  constructor() {
    this.initializeRoutes();
  }
 
  private initializeRoutes() {
    this.router.post(
      `${ApiV1}/jobposting`,
      this.jobs.jobposting,
    );
    this.router.get(`${ApiV1}/getpostedjobs`, this.jobs.getallpostedjobs);

   
  }
}
export default AuthRoute;
