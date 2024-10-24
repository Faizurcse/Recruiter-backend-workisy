import createHttpError from 'http-errors';
import { Profile } from '../../interface/Profile.interface';
import ProfileSchema from '../../models/profile.model';
import TokenService from '../../services/token.service';
import { ApiMessage } from '../../utils/messages';
import AdminSchema from '../../models/admin.model';

class ProfileService {
  tokenService = new TokenService();

  public async EmployerProfile(body: Profile): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        console.log("Body received in service:", body);  // Debugging
        if (Object.keys(body).length === 0) throw new createHttpError.NotAcceptable(ApiMessage.emptybody);
        const { email } = body;
        const userExist = await AdminSchema.findOne({ email: email }).select('-__v');
        console.log("")
        if (!userExist) throw new createHttpError.NotAcceptable(ApiMessage.usernotfound);
        await ProfileSchema.validate(body);
        const result = await ProfileSchema.create(body);
        const data = { data: result };
        resolve(data);
      } catch (error) {
        console.error("Error in service:", error);  // Debugging
        reject(error);
      }
    });
  }
}

export default ProfileService;
