import createHttpError from "http-errors";
// import ProfileSchema from "../../models/profile.model";
import { ApiMessage } from "../../utils/messages";
import JobPostSchema from "../../models/jobPost.model";


class JobPostingServices{
    public async JobPostingForRecruitements(body:any):Promise<any>{
        return new Promise(async(resolve,reject)=>{
            try{
                if(Object.keys(body).length==0) throw createHttpError.NotAcceptable(ApiMessage.emptybody);
                await JobPostSchema.validate(body);
                const result = await JobPostSchema.create(body);
                const data = {data:result}
                resolve(data);
            }
            catch(error){
                reject(error);
            }
        })
    }

    public async getAllPostedJobs():Promise<any>{
        return new Promise(async(resolve,reject)=>{
            try{
                const result = await JobPostSchema.find();
                const data = {data:result};
                resolve(data);
            }catch(error){
                reject(error)
            }
        })
    }
}

export default JobPostingServices;