import { Schema, model, Document } from 'mongoose';
import { JobPosting } from '../interface/jobPost.interface';

const jobPostSchema: Schema = new Schema(
  {
    jobTitle: {
      type: String,
      required: true,
      trim: true,
    },
    // companyName:{
    //   type:String,
    //   required:true,
    //   trim:true
    // },
    jobDescription: {
      type: String,
      required: true,
      trim: true,
    },
    jobCategories: {
      type: [String],
      // enum: [
      //   'software_development',
      //   'marketing',
      //   'sales',
      //   'human_resources',
      //   'design',
      //   'finance',
      //   'customer_service',
      //   'product_management',
      //   'engineering',
      //   'data_science',
      //   'legal',
      //   'administration',
      //   'education',
      //   'healthcare',
      //   'research',
      //   'consulting',
      //   'operations',
      //   'project_management',
      //   'quality_assurance',
      //   'logistics',
      // ],
      required: true,
    },
    departments: {
      type: [String],
      // enum: [
      //   'human_resources',
      //   'finance',
      //   'engineering',
      //   'marketing',
      //   'sales',
      //   'customer_service',
      //   'product_management',
      //   'design',
      //   'research_and_development',
      //   'operations',
      //   'legal',
      //   'information_technology',
      //   'administration',
      //   'quality_assurance',
      //   'procurement',
      //   'logistics',
      //   'business_development',
      //   'data_science',
      //   'communications',
      //   'training_and_development',
      // ],
      required: true,
    },
    skills: {
      type: [String],
      // enum: [
      //   'javascript',
      //   'python',
      //   'java',
      //   'html_css',
      //   'react',
      //   'angular',
      //   'vue',
      //   'nodejs',
      //   'express',
      //   'mongodb',
      //   'sql',
      //   'git',
      //   'docker',
      //   'kubernetes',
      //   'aws',
      //   'azure',
      //   'devops',
      //   'data_analysis',
      //   'machine_learning',
      //   'ui_ux_design',
      //   'project_management',
      //   'scrum',
      //   'agile',
      //   'marketing',
      //   'seo',
      //   'content_creation',
      //   'public_speaking',
      //   'negotiation',
      //   'customer_support',
      //   'sales',
      // ],
      required: true,
    },
    locations: {
      type: [String],
      // enum: [
      //   'hyderabad',
      //   'mumbai',
      //   'bangalore',
      //   'chennai',
      //   'pune',
      //   'noida',
      //   'kolkata',
      //   'delhi',
      //   'ahmedabad',
      //   'canada',
      //   'usa',
      // ],
      required: true,
    },
    interviewRounds: {
      type: [String],
      // enum: ['Technical Round', 'HR Round'],
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    totalOpenings: {
      type: Number,
      required: true,
    },
    status: {
      type: [String],
      enum: ['open', 'close'],
      required: true,
    },
    recruiterName: {
      type: String,
      required: true,
    },
    jobTypes: {
      type: [String],
      // enum: [
      //   'Full Time',
      //   'Part Time',
      //   'On contract',
      //   'Internship',
      //   'Trainee',
      //   'Full Time/Permanent',
      //   'Temporary / Contractual',
      //   'Permanent',
      //   'Contractual',
      //   'Freelance',
      // ],
      required: true,
    },
    workExperience: {
      type: String,
      required: true,
    },
    currencies: {
      type: [String],
      // enum: ['USD($)', 'GBP(£)', 'EUR(€)', 'INR(Lacs)'],
      required: true,
    },
    showPayByOptions: {
      type: [String],
      // enum: ['Range', 'Starting Salary Amount', 'Maximum Salary Amount', 'Exact Salary Amount'],
      required: true,
    },
    remoteJob: {
      type: Boolean,
      required: true,
    },
    discloseSalaryOnCareerSite: {
      type: Boolean,
      required: true,
    },
    photo: {
      type: Boolean,
      required: true,
    },
    resume: {
      type: Boolean,
      required: true,
    },
    dateOfBirth: {
      type: Boolean,
      required: true,
    },
    gender: {
      type: Boolean,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "admin"
    }
  },
  { timestamps: true },
);

const JobPost = model<JobPosting & Document>('JobPosting', jobPostSchema);

export default JobPost;
