"use client"

import { ArrowRight, Building } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { CompanyItem } from "./CompanyItem"
import { CompanyItemSkeleton } from "./CompanyItemSkeleton"
import { CompaniesFilters } from "./filters/CompaniesFilters"
import { Company } from "@/types/Company"
import { NotFound } from "../NotFound"

type Props = {
    label: string,
    companies: Company[],
    cardInitialOrientation: "vertical" | "horizontal"
    allCompaniesLink?: boolean
    isLoading: boolean
    showFilters?: boolean
}

export const CompanyList = ({ label, companies, cardInitialOrientation, allCompaniesLink, isLoading, showFilters} : Props) => {

    const router = useRouter();

    const handleCompanyClick = (company: Company) => {
        router.push(`/company/${company.id}`);
    }

    return (

        <div className="flex flex-col gap-6 w-full p-6 md:p-0">

            { showFilters && <CompaniesFilters /> }

            <div className="flex justify-between items-center">

                <h2 className="scroll-m-20 text-xl md:text-3xl font-semibold tracking-tight first:mt-0">{label}</h2>

                <Link href="/jobs">
                    <div className="flex hover:underline items-center font-semibold">
                        <p className="text-sm md:text-base">Ver Vagas</p> <ArrowRight className="ml-3" size={20} strokeWidth={1.5}/>
                    </div>
                </Link>

            </div>

            { isLoading && 
                <div className={`grid md:grid-cols-2 gap-6 ${cardInitialOrientation === "vertical" ? "md:grid-cols-4" : "md:grid-cols-2"}`}>
                {   Array.from({ length: 25 }).map((_, index) => (
                        <CompanyItemSkeleton key={index} />
                    ))}
                </div>
            }

            {!isLoading && companies.length === 0 && (
                <div className="flex-1 min-h-52 items-center flex justify-center">
                    <NotFound icon={<Building />} label="Nenhuma Empresa Encontrada" />
                </div>
            )}
            
            {companies.length > 0 && (
                <div className={`grid gap-6 ${cardInitialOrientation === "vertical" ? "md:grid-cols-4" : "md:grid-cols-2"}`}>
                    { companies.map((company) => (
                        <CompanyItem key={company.id} company={company} handleCompanyClick={handleCompanyClick} />
                    ))}
                </div>
            )}

        </div>

    )

}