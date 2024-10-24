import { Schema, model, Document } from 'mongoose';
import { Profile } from '../interface/Profile.interface';

const profileSchema: Schema = new Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    mobileNumber: { type: String, required: true, trim: true },
    currentLoaction: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    from: { type: Date, required: true },
    currentCompanyName: { type: String, required: true, trim: true },
    currentDesignation: { type: String, required: true, trim: true },
    addressLine1: { type: String, required: true, trim: true },
    addressLine2: { type: String, trim: true },
    city: { type: String, required: true, trim: true },
    stateProvinceRegion: { type: String, required: true, trim: true },
    zipCode: { type: String, required: true, trim: true },
    totalExperienceInHiring: { type: Number, required: true },
    levelIHireFor: { type: String, required: true, trim: true },
    referralCode: { type: String, trim: true },
    industry: {
      type: [String],
      required: true,
      validate: {
        validator: (v: string[]) => Array.isArray(v) && v.length <= 4,
        message: 'Industry array can have a maximum of 4 items',
      },
    },
    function: {
      type: [String],
      required: true,
      validate: {
        validator: (v: string[]) => Array.isArray(v) && v.length <= 4,
        message: 'Function array can have a maximum of 4 items',
      },
    },
    skillsIHireFor: { type: [String], required: true },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true },
);

const ProfileSchema = model<Profile & Document>('EmployerProfile', profileSchema);

export default ProfileSchema;
