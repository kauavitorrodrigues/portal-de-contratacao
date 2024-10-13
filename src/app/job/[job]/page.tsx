"use client"

import { getJobById } from "@/api/jobs";
import { JobItem } from "@/components/site/JobItem";

type Props = {
	params: {
		id: string
	}
}

export default async function Page({ params }: Props) {

	const job = await getJobById(params.id);

	return (
		
		<div className="flex items-center flex-col p-6 gap-8 bg-red-400 h-full">

			{ job && <JobItem cardOrientation="vertical" job={job}/>}
			
		</div>

	);

}