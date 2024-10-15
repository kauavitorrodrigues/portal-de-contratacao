import { Job } from "@/types/Job";
import React, { createContext, useContext, ReactNode, useEffect, useState } from 'react';
import * as api from '@/api/site';
import { useFilter } from "./filterContext";

type JobsContextType = {
    fetchJobs: () => void,
    loading: boolean,
    jobs: Job[],
    filteredJobs: Job[],
    latestActivesFeaturedJobs: Job[],
    latestActivesJobs: Job[],
}

const JobsContext = createContext<JobsContextType | undefined>(undefined)

type Props = { children: ReactNode }

export const JobsProvider = ({ children }: Props) => {

    const { filter } = useFilter();
    const [ jobs, setJobs ] = useState<Job[]>([]);
    const [ loading, setLoading ] = useState<boolean>(true);

    const fetchJobs = async () => {
        const response = await api.getAllJobs()
        setJobs(response);
        setLoading(false);
    }

    useEffect(() => {
        fetchJobs();
    }, [])

    const latestActivesFeaturedJobs = jobs
        .filter(job => job.status === "active" && job.isFeatured === true)
        .sort((a, b) => b.creationDate.getTime() - a.creationDate.getTime())
        .slice(0, filter.latestActiveFeatured)

    const latestActivesJobs = jobs
        .filter(job => job.status === "active")
        .sort((a, b) => b.creationDate.getTime() - a.creationDate.getTime())
        .slice(0, filter.latestActiveJobs)

    const filteredJobs = jobs.filter(job => {

        const companyMatch = filter.companyId === "All" 
        || job.company.id === filter.companyId

        const districtMatch = filter.district === "All" 
        || job.company.address === filter.district

        const jobTypeMatch = filter.jobType === "All" || (
            filter.jobType === "Presencial" 
            ? job.jobType === "Presencial" 
            : job.jobType === "Remoto"
        )

        const statusMatch = filter.status === "All" || (
            filter.status === "Active" 
            ? job.status === "active" 
            : job.status === "inactive"
        )

        const hiringRegimeMatch = filter.hiringRegime === "All" || (
            filter.hiringRegime === "PF" 
            ? job.hiringRegime === "PF" 
            : job.hiringRegime === "PJ"
        )
            
        return statusMatch 
        && companyMatch 
        && hiringRegimeMatch 
        && jobTypeMatch 
        && districtMatch

    })

    return (
        <JobsContext.Provider 
            value={{ 
                jobs, 
                loading, 
                fetchJobs, 
                filteredJobs,
                latestActivesFeaturedJobs,
                latestActivesJobs
            }}
            >{children}
        </JobsContext.Provider>
    )
}

export const useJobs = () => {
    const context = useContext(JobsContext);
    if (context === undefined) {
        throw new Error('useJobs deve ser usado dentro de um JobsProvider');
    }
    return context;
}