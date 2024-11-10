import { Schema, model, Document } from 'mongoose';
import { Admin } from '../interface/admin.interface';

const adminSchema: Schema = new Schema(
  {
    // also need of email verification brevo
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, unique: true, required: true, trim: true },
    password: { type: String, required: true, trim: true },
    role:{},// employer or student
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true },
);
const AdminSchema = model<Admin & Document>('admin', adminSchema);

export default AdminSchema;
