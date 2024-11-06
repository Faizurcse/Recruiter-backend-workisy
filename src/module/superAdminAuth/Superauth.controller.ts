import { NextFunction, Request, Response } from 'express';
import SuperAuthService from './SuperAuth.service';
// import TokenService from '../../services/token.service';
import { CheckErrors, ErrorValidations, DataResponse } from '../../utils/common';
import { ApiMessage } from '../../utils/messages';

class SuperAuthController {
  private superauthService = new SuperAuthService();
  // private tokenService = new TokenService();
  public SuperadminLogin = async (req: Request, res: Response, next: NextFunction) => {
    try {
      let checkErrorExist = CheckErrors(req);
      if (checkErrorExist) return ErrorValidations(res, req, 422);
      const data = await this.superauthService.SuperadminLogin(req.body);
      DataResponse(req, res, 200, ApiMessage.success, data);
    } catch (error) {
      next(error);
    }
  };
  public SuperadminSignup = async (req: Request, res: Response, next: NextFunction) => {
    try {
      let checkErrorExist = CheckErrors(req);
      if (checkErrorExist) return ErrorValidations(res, req, 422);
      const data = await this.superauthService.SuperadminSignup(req.body);
      DataResponse(req, res, 200, ApiMessage.success, data);
    } catch (error) {
      next(error);
    }
  };
}

export default SuperAuthController;
