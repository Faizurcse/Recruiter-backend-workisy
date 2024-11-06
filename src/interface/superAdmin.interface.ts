import { timeStamp } from './shared/timestamp.interface';

export interface SuperAdmin extends timeStamp {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  isActive: boolean;
  isValidPassword: Function;
}
