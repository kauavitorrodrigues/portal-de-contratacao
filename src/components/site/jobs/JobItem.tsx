"use client"

import { Job } from "@/types/Job";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Dot } from "lucide-react";

type Props = {
    job: Job,
    handleJobClick?: (job: Job) => void
}


export const JobItem = ({ job, handleJobClick }: Props) => {

    return (

        <Card 
            className={`job-item w-full max-w-3xl ${ handleJobClick && "cursor-pointer"} dark:hover:bg-zinc-900 dark:hover:border-zinc-900 duration-300 hover:bg-zinc-100 hover:border-zinc-100`}
            onClick={() => handleJobClick && handleJobClick(job)}
        >

            <CardHeader className="gap-3 pb-3">

                <div className="flex justify-between">
                    <Link href={`/company/${job.company.id}`}>
                        <img src={job.company.photo} alt={job.company.name} className="h-10 w-10 rounded-full border-2 border-white bg-white"/>
                    </Link>
                    { 
                        (new Date().getTime() - new Date(job.creationDate).getTime()) < 2 * 24 * 60 * 60 * 1000 && 
                        <Badge className="px-2 h-fit">Nova</Badge>
                    }
                </div>

                <div className="flex flex-col gap-2">

                    <CardTitle>{job.position}</CardTitle>

                    <div className="flex">
                        <CardDescription className="max-w-[200px] whitespace-nowrap overflow-hidden text-ellipsis">{job.company.name}</CardDescription>
                        <Dot/>
                        <CardDescription>{job.company.address}</CardDescription>
                    </div>

                </div>

            </CardHeader>

            <CardContent className="flex flex-col justify-between gap-3">

                <p className="whitespace-nowrap overflow-hidden text-ellipsis">
                    {job.description}
                </p>

                <div className="flex items-center gap-2">
                    <Badge variant={job.hiringRegime === "PF" ? "destructive" : "default"}  className="px-2 h-fit">{job.hiringRegime}</Badge>
                    <Badge variant={job.jobType === "Remoto" ? "destructive" : "default"}  className="px-2 h-fit">{job.jobType}</Badge>
                </div>

            </CardContent>
            
        </Card>

    );

}