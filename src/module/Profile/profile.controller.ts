import { NextFunction, Request, Response } from 'express';
import { CheckErrors, ErrorValidations, DataResponse, consoleLog } from '../../utils/common';
import { ApiMessage } from '../../utils/messages';
import ProfileService from './profile.service';
import { RequestWithPayload } from '../../interface/shared/request.interface';

class ProfileController {
  private profileServices = new ProfileService();

  public employerProfile = async (req:RequestWithPayload, res: Response, next: NextFunction) => {
    try {
      let checkErrorExist = CheckErrors(req);
      if (checkErrorExist) return ErrorValidations(res, req, 422);
      const data = await this.profileServices.EmployerProfile(req.body);

      consoleLog("controllerREQ--",req)
      consoleLog("controllerreq.body--",req.body)

      DataResponse(req, res, 200, ApiMessage.success, data);
    } catch (error) {
      console.error("Error in controller:", error);  // Debugging
      next(error);
    }
  };
}

export default ProfileController;
