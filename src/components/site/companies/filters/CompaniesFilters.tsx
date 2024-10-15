import * as React from "react"
import { CompaniesDistrictFilter } from "./CompaniesDistrictFilter"
import { CompanyFilter } from "./CompanyFilter"

export const CompaniesFilters = () => {

    return (

        <div className="flex flex-col gap-6">
            <h1 className="text-2xl font-semibold">Filtros</h1>
            <div className="flex flex-col md:flex-row gap-3">
                <CompanyFilter/>
                <CompaniesDistrictFilter/>
            </div>
        </div>

    )

}