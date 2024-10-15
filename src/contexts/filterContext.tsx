import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { FilterActions, filterReducer, initialFilter } from '@/reducers/filterReducer';
import { JobsFilter } from '@/types/JobsFilter';

type FilterContextType = {
    filter: JobsFilter;
    dispatch: React.Dispatch<FilterActions>;
    filterByDistrict: (district: string) => void;
    filterByCompany: (companyId: string) => void;
    filterByHiringRegime: (regime: "All" | "PF" | "PJ") => void;
    filterByStatus: (value: "All" | "Active" | "Inactive") => void;
    filterByJobType: (jobType: "All" | "Presencial" | "Remoto") => void;
    filterByLatestActivesFeaturedJobs: (range: number) => void;
    filterByLatestActivesJobs: (range: number) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

type Props = { children: ReactNode }

export const FilterProvider = ({ children} : Props ) => {

    const [filter, dispatch] = useReducer(filterReducer, initialFilter);

    const filterByStatus = (value: "All" | "Active" | "Inactive") => {
        dispatch({ type: "status", payload: value })
    }

    const filterByHiringRegime = (regime: "All" | "PF" | "PJ") => {
        dispatch({ type: "regime", payload: regime })
    }

    const filterByJobType = (jobType: "All" | "Presencial" | "Remoto") => { 
        dispatch({ type: "type", payload: jobType })
    }

    const filterByCompany = (companyId: string) => {
        dispatch({ type: "company", payload: companyId })
    }

    const filterByDistrict = (district: string) => {
        dispatch({ type: "district", payload: district })
    }

    const filterByLatestActivesFeaturedJobs = (range : number) => {
        dispatch({ type: "latestActiveFeatured", payload: range })
    }

    const filterByLatestActivesJobs = (range : number) => {
        dispatch({ type: "latestActiveJobs", payload: range })
    }

    return (

        <FilterContext.Provider 
            value={{  
                filter, 
                dispatch, 
                filterByStatus, 
                filterByCompany,
                filterByHiringRegime,
                filterByJobType,
                filterByDistrict,
                filterByLatestActivesFeaturedJobs,
                filterByLatestActivesJobs
            }}>
            {children}
        </FilterContext.Provider>

    );

};

export const useFilter = () : FilterContextType => {
    const context = useContext(FilterContext);
    if (!context) {
        throw new Error('useFilter deve ser usado com um FilterProvider');
    }
    return context;
};