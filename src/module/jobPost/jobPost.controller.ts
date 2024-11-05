import { NextFunction, Request, Response } from 'express';
import { CheckErrors, ErrorValidations, DataResponse, consoleLog } from '../../utils/common';
import { ApiMessage } from '../../utils/messages';
import JobPostingServices from './jobPost.service';


class JobPostingController{
    private jobpostingServices = new JobPostingServices();
    
    public jobposting = async (req:Request,res:Response,next:NextFunction)=>{
        try {
            let checkErrorExist = CheckErrors(req);
            if (checkErrorExist) return ErrorValidations(res, req, 422);
            const data = await this.jobpostingServices.JobPostingForRecruitements(req.body);
      
            DataResponse(req, res, 200, ApiMessage.success, data);
          } catch (error) {
            next(error);
          }
    }

    public getallpostedjobs = async (req:Request,res:Response,next:NextFunction)=>{
        try {
            let checkErrorExist = CheckErrors(req);
            if (checkErrorExist) return ErrorValidations(res, req, 422);
            const data = await this.jobpostingServices.getAllPostedJobs();
      
            DataResponse(req, res, 200, ApiMessage.success, data);
          } catch (error) {
            next(error);
          }
    }
}

export  default JobPostingController;