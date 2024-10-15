"use client"

import { Home } from "@/components/site/home/Home";
import { FilterProvider } from "@/contexts/filterContext";
import { JobsProvider } from "@/contexts/jobsContext";

export default function Page() {

	return (
		<FilterProvider>
			<JobsProvider>
				<Home/>
			</JobsProvider>
		</FilterProvider>
	);

}