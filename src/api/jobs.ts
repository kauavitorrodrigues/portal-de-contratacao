import { generateJobList } from "@/data/JobList";
import { Job } from "@/types/Job";

export const getAllJobs = async () : Promise<Job[]> => {
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            const jobs = generateJobList()
            resolve(jobs)
        }, 1000)
    })
}

export const getJobById = async (id: string): Promise<Job | undefined> => {
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            const jobs = generateJobList();
            const job = jobs.find(job => job.id === id);
            resolve(job);
        }, 1000);
    });
};