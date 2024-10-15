import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { CompaniesFilter } from '@/types/CompaniesFilter';
import { CompanyFilterActions, companyFilterReducer, initialFilter } from '@/reducers/companyFilterReducer';

type CompanyFilterContextType = {
    filter: CompaniesFilter;
    dispatch: React.Dispatch<CompanyFilterActions>;
    filterByDistrict: (district: string) => void;
    filterCompany: (companyId: string) => void;
}

const CompanyFilterContext = createContext<CompanyFilterContextType | undefined>(undefined);

type Props = { children: ReactNode }

export const CompaniesFilterProvider = ({ children} : Props ) => {

    const [filter, dispatch] = useReducer(companyFilterReducer, initialFilter);

    const filterCompany = (companyId: string) => {
        dispatch({ type: "company", payload: companyId })
    }

    const filterByDistrict = (district: string) => {
        dispatch({ type: "district", payload: district })
    }

    return (

        <CompanyFilterContext.Provider 
            value={{  
                filter, 
                dispatch, 
                filterCompany,
                filterByDistrict
            }}>
            {children}
        </CompanyFilterContext.Provider>

    );

};

export const useCompanyFilter = () : CompanyFilterContextType => {
    const context = useContext(CompanyFilterContext);
    if (!context) {
        throw new Error('useCompanyFilter deve ser usado com um useCompanyFilterProvider');
    }
    return context;
};