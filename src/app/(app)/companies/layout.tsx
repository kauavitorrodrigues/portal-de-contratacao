"use client"

import { CompaniesProvider } from "@/contexts/companiesContext";
import { CompaniesFilterProvider } from "@/contexts/companyFilterContext";
import { ReactNode } from "react";

type Props = { children: ReactNode }

const Layout = ({ children } : Props ) => { 
    return (
        <CompaniesFilterProvider>
            <CompaniesProvider>
                {children}
            </CompaniesProvider>
        </CompaniesFilterProvider>
    )
}

export default Layout;