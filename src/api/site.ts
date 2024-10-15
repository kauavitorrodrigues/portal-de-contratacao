import { jobs } from "@/data/JobList";
import { Job } from "@/types/Job";

export const getAllJobs = async () : Promise<Job[]> => {
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            resolve(jobs)
        }, 1000)
    })
}