import { NextFunction, Request, Response } from 'express';
import { CheckErrors, ErrorValidations, DataResponse, consoleLog } from '../../utils/common';
import { ApiMessage } from '../../utils/messages';
import ProfileService from './profile.service';

class ProfileController {
  private profileServices = new ProfileService();

  public employerProfile = async (req:Request, res: Response, next: NextFunction) => {
    try {
      let checkErrorExist = CheckErrors(req);
      if (checkErrorExist) return ErrorValidations(res, req, 422);
      const data = await this.profileServices.EmployerProfile(req.body);

      DataResponse(req, res, 200, ApiMessage.success, data);
    } catch (error) {
      next(error);
    }
  };
}

export default ProfileController;
