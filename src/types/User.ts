import { Company } from "./Company";

export type User = {
    name: string;
    birthDate: Date;
    cpf: string;
    photo: string;
    id: string;
    email: string;
    password: string;
}

export type Employee = User & {
    company: Company;
}

export type Candidate = User & {
    fullAddress: string;
    desiredJobType: string;
    personalSkills: string[];
    biography: string;
    technicalQualifications: string[];
    academicBackground: string;
    languages: string[];
    currentWorkSituation: string;
    areaOfInterest: string;
    subAreaOfInterest: string;
}