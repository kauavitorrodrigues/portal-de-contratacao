"use client"

import { FilterProvider } from "@/contexts/filterContext";
import { JobsProvider } from "@/contexts/jobsContext";
import { ReactNode } from "react";

type Props = { children: ReactNode }

const Layout = ({ children } : Props ) => { 
    return (
        <FilterProvider>
            <JobsProvider>
                {children}
            </JobsProvider>
        </FilterProvider>
    )
}

export default Layout;