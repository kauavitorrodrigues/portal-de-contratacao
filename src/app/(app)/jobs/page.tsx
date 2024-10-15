"use client"

import { JobList } from "@/components/site/jobs/JobList";
import { Footer } from "@/components/site/layout/Footer";
import { useJobs } from "@/contexts/jobsContext";

export default function Page() {

	const { filteredJobs, loading } = useJobs()

	return (
		
		<div className="flex flex-col w-full">

			<section className="w-ful flex items-center flex-col gap-8 md:py-12">
			
				<div className="max-w-5xl w-full items-center flex flex-col justify-center gap-6">

					<JobList
						label="Todas as Vagas"
						cardInitialOrientation="vertical"
						jobs={filteredJobs}
						isLoading={loading}
						showFilters
					/>

				</div>
				
			</section>

			<Footer/>

		</div>

	);

}