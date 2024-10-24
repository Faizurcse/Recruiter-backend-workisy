import { timeStamp } from './shared/timestamp.interface';

export interface Profile extends timeStamp{
firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  currentLoaction: string;
  description: string;
  from: Date;
  currentCompanyName: string;
  currentDesignation: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  stateProvinceRegion: string;
  zipCode: string;
  totalExperienceInHiring: number;
  levelIHireFor: string;
  referralCode?: string;
  industry: string[];
  function: string[];
  skillsIHireFor: string[];
  isActive: boolean;
}