import { Router } from 'express';
import { Routes } from '../../interface/shared/routes.interface';
import { ApiV1 } from '../../utils/variable';
import TokenService from '../../services/token.service';
import ProfileController from './profile.controller';

class ProfileRoute implements Routes {
  public path = '/profile';
  public employer = '/employer';
  public router = Router();
  public employerProfileController = new ProfileController();
  public tokenservices = new TokenService();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(
      `${ApiV1}${this.employer}${this.path}/employerprofile`,
      this.tokenservices.verifyAccessToken,
      this.employerProfileController.employerProfile,
    );
  }
}

export default ProfileRoute;
