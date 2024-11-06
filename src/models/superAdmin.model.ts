import { Schema, model, Document } from 'mongoose';
import { SuperAdmin } from '../interface/superAdmin.interface';

const SuperadminSchema: Schema = new Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, unique: true, required: true, trim: true },
    password: { type: String, required: true, trim: true },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true },
);
const SuperAdminSchema = model<SuperAdmin & Document>('Superadmin', SuperadminSchema);

export default SuperAdminSchema;
