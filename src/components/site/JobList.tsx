"use client"

import { JobItem } from "./JobItem"
import { Job } from "@/types/Job"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

type Props = {
    label: string,
    jobs: Job[],
    cardInitialOrientation: "vertical" | "horizontal"
}

export const JobList = ({ label, jobs, cardInitialOrientation } : Props) => {

    const router = useRouter();

    const handleJobClick = (job: Job) => {
        router.push(`/job/${job.id}`);
    }

    return (

        <div className="flex flex-col gap-6 w-full">
            <div className="flex justify-between items-center">
                <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">{label}</h2>
                <Link href="/jobs">
                    <div className="flex hover:underline items-center font-semibold">
                        Ver Vagas <ArrowRight className="ml-3" size={20} strokeWidth={1.5}/>
                    </div>
                </Link>
            </div>
            <div className={`grid gap-6 ${cardInitialOrientation === "vertical" ? "grid-cols-4" : "grid-cols-2"}`}>
                {jobs.map((job) => (
                    <JobItem key={job.id} job={job} handleJobClick={handleJobClick} />
                ))}
            </div>
        </div>

    )

}