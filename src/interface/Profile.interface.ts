import { timeStamp } from './shared/timestamp.interface';

export interface Profile extends timeStamp{
firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  currentLoaction: string;
  currentCompanyName: string;
  currentDesignation: string;
  startDate: string;
    endtDate: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  stateProvinceRegion: string;
  zipCode: string;
  isActive: boolean;
}

