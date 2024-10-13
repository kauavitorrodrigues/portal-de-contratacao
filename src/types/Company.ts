import { Employee } from "./User";

export type Company = {
    name: string;
    photo: string;
    address: string;
    phone: string;
    employees: Employee[];
    id: string;
};