import React, { createContext, useContext, ReactNode, useEffect, useState } from 'react';
import * as api from '@/api/site';
import { Company } from "@/types/Company";
import { Job } from '@/types/Job';
import { useCompanyFilter } from './companyFilterContext';

type CompaniesContextType = {
    loading: boolean,
    filteredCompanies: Company[],
    companies: Company[]
}

const CompaniesContext = createContext<CompaniesContextType | undefined>(undefined)

type Props = { children: ReactNode }

export const CompaniesProvider = ({ children }: Props) => {

    const { filter } = useCompanyFilter();
    const [ jobs, setJobs ] = useState<Job[]>([]);
    const [ loading, setLoading ] = useState<boolean>(true);

    const fetchJobsCompanies = async () => {
        const response = await api.getAllJobs()
        setJobs(response);
        setLoading(false);
    }

    useEffect(() => {
        fetchJobsCompanies();
    }, [])
    
    const companies = jobs.map(job => job.company)

    const filteredCompanies = companies.filter(company => {
        const companyMatch = filter.companyId === "All" || company.id === filter.companyId
        const districtMatch = filter.district === "All" || company.address === filter.district
        return companyMatch && districtMatch
    })

    return (
        <CompaniesContext.Provider 
            value={{ companies, loading, filteredCompanies }}
            >{children}
        </CompaniesContext.Provider>
    )
}

export const useCompanies = () => {
    const context = useContext(CompaniesContext);
    if (context === undefined) {
        throw new Error('useCompanies deve ser usado dentro de um CompaniesProvider');
    }
    return context;
}