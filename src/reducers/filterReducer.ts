import { JobsFilter } from "@/types/JobsFilter";

type FilterByCompany = { type: 'company', payload: "All" |  string }
type FilterByDistrict = { type: 'district', payload: "All" | string }
type FilterByHiringRegime = { type: 'regime', payload: "All" | "PF" | "PJ" }
type FilterByStatus = { type: 'status', payload: "All" | "Active" | "Inactive" }
type FilterByJobType = {type: 'type', payload: "All" | "Presencial" | "Remoto" }
type FilterByLatestActivesFeaturedJobs = { type: 'latestActiveFeatured', payload: number }
type FilterByLatestActivesJobs = { type: 'latestActiveJobs', payload: number}

export type FilterActions = 
| FilterByStatus 
| FilterByCompany 
| FilterByJobType 
| FilterByHiringRegime 
| FilterByDistrict
| FilterByLatestActivesFeaturedJobs
| FilterByLatestActivesJobs

export const initialFilter : JobsFilter = {
    status: "All",
    jobType: "All",
    district: "All",
    companyId: "All",
    hiringRegime: "All",
    latestActiveFeatured: 8,
    latestActiveJobs: 8,
}

export const filterReducer = ( filter: JobsFilter, action:FilterActions ) : JobsFilter => {

    switch ( action.type ) {
        case "status":
            return {
                ...filter,
                status: action.payload
            }
        case "company":
            return {
                ...filter,
                companyId: action.payload,
            }
        case "regime":
            return {
                ...filter,
                hiringRegime: action.payload,
            }
        case "type":
            return {
                ...filter,
                jobType: action.payload,
            }
        case "district":
            return {
                ...filter,
                district: action.payload,
            }
        case "latestActiveFeatured":
            return {
                ...filter,
                latestActiveFeatured: action.payload,
            }
        case "latestActiveJobs":
            return {
                ...filter,
                latestActiveJobs: action.payload,
            }
        default:
            return filter;
    }

}