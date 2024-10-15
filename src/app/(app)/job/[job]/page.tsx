"use client"

import { FullPageJobItem } from "@/components/site/jobs/FullPageJobItem";
import { NotFound } from "@/components/site/NotFound";
import { useJobs } from "@/contexts/jobsContext";
import { Briefcase } from "lucide-react";

type Props = {
	params: {
		job: string
	}
}

export default function Page({ params }: Props) {

	const { jobs, loading } = useJobs()
	const pageJob = jobs.find(job => job.id === params.job);

	return (
		
		<div className="flex items-center flex-col p-6 gap-8 min-h-[calc(100vh-80px)] justify-center">

			{ pageJob && <FullPageJobItem isLoading={loading} job={pageJob} />}
			{ !pageJob && !loading && <NotFound icon={<Briefcase/>} label="Vaga não encontrada" />}
			
		</div>

	);

}