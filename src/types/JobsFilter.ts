export type JobsFilter = {
    district: string
    companyId: string
    hiringRegime: "All" | "PF" | "PJ"
    status: "All" | "Active" | "Inactive"
    jobType: "All" | "Presencial" | "Remoto"
    latestActiveFeatured: number
    latestActiveJobs: number
}