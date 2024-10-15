import { JobsCompanyFilter } from "./JobsCompanyFilter"
import * as React from "react"
import { JobsDistrictFilter } from "./JobsDistrictFilter"
import { JobsStatusFilter } from "./JobsStatusFilter"
import { JobsHiringRegimeFilter } from "./JobsHiringRegimeFilter"
import { JobsTypeFilter } from "./JobsTypeFilter"

export const JobsFilters = () => {

    return (

        <div className="flex flex-col gap-6">
            <h1 className="text-2xl font-semibold">Filtros</h1>
            <div className="flex flex-col lg:flex-row gap-3">
                <JobsHiringRegimeFilter />
                <JobsTypeFilter/>
                <JobsStatusFilter />
                <JobsDistrictFilter/>
                <JobsCompanyFilter/>
            </div>
        </div>

    )

}