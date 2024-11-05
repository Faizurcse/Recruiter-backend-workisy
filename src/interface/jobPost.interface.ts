import { timeStamp } from './shared/timestamp.interface';

export interface JobPosting extends timeStamp {
  jobTitle: string;
  companyName:string;
  jobDescription: string;
  jobCategories: []; 
  departments: [];
  skills:[]; 
  locations: []; 
  interviewRounds: []; 
  startDate: Date; 
  endDate: Date;
  totalOpenings: number;
  status:JobStatus []; 
  recruiterName: string;
  jobTypes: [];
  workExperience: string; 
  currencies:[]; 
  showPayByOptions:[]; 
  remoteJob: boolean;
  discloseSalaryOnCareerSite: boolean;
  photo: boolean;
  resume: boolean;
  dateOfBirth: boolean;
  gender: boolean;
}

// Enumerated Types using string literals
// export type JobCategory =
//   | "software_development"
//   | "marketing"
//   | "sales"
//   | "human_resources"
//   | "design"
//   | "finance"
//   | "customer_service"
//   | "product_management"
//   | "engineering"
//   | "data_science"
//   | "legal"
//   | "administration"
//   | "education"
//   | "healthcare"
//   | "research"
//   | "consulting"
//   | "operations"
//   | "project_management"
//   | "quality_assurance"
//   | "logistics";

// export type Department =
//   | "human_resources"
//   | "finance"
//   | "engineering"
//   | "marketing"
//   | "sales"
//   | "customer_service"
//   | "product_management"
//   | "design"
//   | "research_and_development"
//   | "operations"
//   | "legal"
//   | "information_technology"
//   | "administration"
//   | "quality_assurance"
//   | "procurement"
//   | "logistics"
//   | "business_development"
//   | "data_science"
//   | "communications"
//   | "training_and_development";

// export type Skill =
//   | "javascript"
//   | "python"
//   | "java"
//   | "html_css"
//   | "react"
//   | "angular"
//   | "vue"
//   | "nodejs"
//   | "express"
//   | "mongodb"
//   | "sql"
//   | "git"
//   | "docker"
//   | "kubernetes"
//   | "aws"
//   | "azure"
//   | "devops"
//   | "data_analysis"
//   | "machine_learning"
//   | "ui_ux_design"
//   | "project_management"
//   | "scrum"
//   | "agile"
//   | "marketing"
//   | "seo"
//   | "content_creation"
//   | "public_speaking"
//   | "negotiation"
//   | "customer_support"
//   | "sales";

// export type Location =
//   | "hyderabad"
//   | "mumbai"
//   | "bangalore"
//   | "chennai"
//   | "pune"
//   | "noida"
//   | "kolkata"
//   | "delhi"
//   | "ahmedabad"
//   | "canada"
//   | "usa";

// export type InterviewRound = "Technical Round" | "HR Round";

 export type JobStatus = "open" | "close";

// export type JobType =
//   | "Full Time"
//   | "Part Time"
//   | "On contract"
//   | "Internship"
//   | "Trainee"
//   | "Full Time/Permanent"
//   | "Temporary / Contractual"
//   | "Permanent"
//   | "Contractual"
//   | "Freelance";

// export type Currency = "USD($)" | "GBP(£)" | "EUR(€)" | "INR(Lacs)";

// export type ShowPayBy =
//   | "Range"
//   | "Starting Salary Amount"
//   | "Maximum Salary Amount"
//   | "Exact Salary Amount";
