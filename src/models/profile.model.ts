import { Schema, model, Document } from 'mongoose';
import { Profile } from '../interface/Profile.interface';

const profileSchema: Schema = new Schema( // professiondetails schema name
  {
    // it will be getting from register
    // firstName: { type: String, required: true, trim: true },
    // lastName: { type: String, required: true, trim: true },
    // email: { type: String, required: true, trim: true },
    // mobileNumber: { type: String, required: true, trim: true },//
    // currentLoaction: { type: String, required: true, trim: true },
    currentCompanyName: { type: String, required: true, trim: true },
    currentDesignation: { type: String, required: true, trim: true },
    startDate: { type: String, required: true, trim: true },
    endtDate: { type: String, required: true, trim: true },
    addressLine1: { type: String, required: true, trim: true },
    // addressLine2: { type: String, trim: true },
    city: { type: String, required: true, trim: true },
    stateProvinceRegion: { type: String, required: true, trim: true },
    country:{},
    zipCode: { type: String, required: true, trim: true },
    user: {
        type: Schema.Types.ObjectId,
        ref: "admin"
      }
  },

  { timestamps: true },
);

const ProfileSchema = model<Profile & Document>('EmployerProfile', profileSchema);

export default ProfileSchema;
