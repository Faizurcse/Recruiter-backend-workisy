import { Router } from 'express';
import { Routes } from '../../interface/shared/routes.interface';
import { ApiV1 } from '../../utils/variable';
import TokenService from '../../services/token.service';
import SuperAuthController from './Superauth.controller';


class SuperAuthRoute implements Routes {
  public path = '/superauth';
  public admin = '/superadmin';
  public router = Router();
  public SuperauthController = new SuperAuthController();
  public tokenService = new TokenService();
  constructor() {
    this.initializeRoutes();
  }
  // admin
  private initializeRoutes() {
    this.router.post(
      `${ApiV1}${this.admin}${this.path}/login`,
      this.SuperauthController.SuperadminLogin,
    );
    this.router.post(`${ApiV1}${this.admin}${this.path}/signup`, this.SuperauthController.SuperadminSignup);

  }
}
export default SuperAuthRoute;
