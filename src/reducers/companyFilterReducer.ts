import { CompaniesFilter } from "@/types/CompaniesFilter";

type FilterCompany = { type: 'company', payload: "All" |  string }
type FilterByDistrict = { type: 'district', payload: "All" | string }

export type CompanyFilterActions = FilterCompany | FilterByDistrict

export const initialFilter : CompaniesFilter = {
    district: "All",
    companyId: "All",
}

export const companyFilterReducer = ( filter: CompaniesFilter, action:CompanyFilterActions ) : CompaniesFilter => {
    console.log('Dispatched Action:', action);
    switch ( action.type ) {
        case "company":
            return {
                ...filter,
                companyId: action.payload,
            }
        case "district":
            return {
                ...filter,
                district: action.payload,
            }
        default:
            return filter;
    }

}