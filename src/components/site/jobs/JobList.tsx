"use client"

import { Job } from "@/types/Job"
import { ArrowRight, Briefcase, Building } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { JobItem } from "./JobItem"
import { JobItemSkeleton } from "./JobItemSkeleton"
import { JobsFilters } from "./filters/JobsFilters"
import { NotFound } from "../NotFound"

type Props = {
    label: string,
    jobs: Job[],
    cardInitialOrientation: "vertical" | "horizontal"
    allJobsLink?: boolean
    isLoading: boolean
    showFilters?: boolean
}

export const JobList = ({ label, jobs, cardInitialOrientation, allJobsLink, isLoading, showFilters} : Props) => {

    const router = useRouter();

    const handleJobClick = (job: Job) => {
        router.push(`/job/${job.id}`);
    }

    return (

        <div className="flex flex-col gap-6 w-full p-6 lg:p-0">

            { showFilters && <JobsFilters/> }

            <div className="flex justify-between items-center gap-2 ">

                <h2 className="scroll-m-20 text-xl md:text-3xl font-semibold tracking-tight first:mt-0">{label}</h2>

                { allJobsLink &&
                    <Link href="/jobs">
                        <div className="flex hover:underline items-center font-semibold">
                            <p className="text-xs md:text-base">Ver Vagas</p> <ArrowRight className="ml-3" size={20} strokeWidth={1.5}/>
                        </div>
                    </Link>
                }

            </div>
            
            { isLoading && 
                <div className={`grid grid-cols-1 gap-6 ${cardInitialOrientation === "vertical" ? "md:grid-cols-4" : "md:grid-cols-2"}`}>
                {   Array.from({ length: 25 }).map((_, index) => (
                        <JobItemSkeleton key={index} />
                    ))}
                </div>
            }

            {!isLoading && jobs.length === 0 && (
                <div className="flex-1 min-h-52 items-center flex justify-center">
                    <NotFound icon={<Briefcase />} label="Nenhuma Vaga Encontrada" />
                </div>
            )}
            
            {jobs.length > 0 && (
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${cardInitialOrientation === "vertical" ? "lg:grid-cols-4" : "lg:grid-cols-2"}`}>
                    { jobs.map((job) => (
                        <JobItem key={job.id} job={job} handleJobClick={handleJobClick} />
                    ))}
                </div>
            )}

        </div>

    )

}