import { Company } from "./Company";

export type Job = {
    hiringRegime: "PJ" | "PF";
    profile: string;
    location: string;
    company: Company;
    jobType: "Presencial" | "Remoto";
    personalSkills: string[];
    description: string;
    requirements: string;
    qualifications: string;
    additionalInformation: string;
    salary: number;
    status: "Active" | "Inactive";
    benefits: string;
    position: string;
    id: string;
    creationDate: Date;
    isFeatured: boolean;
}