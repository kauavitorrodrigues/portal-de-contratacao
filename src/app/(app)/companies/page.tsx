"use client"

import { CompanyList } from "@/components/site/companies/CompanyList";
import { Footer } from "@/components/site/layout/Footer";
import { NotFound } from "@/components/site/NotFound";
import { useCompanies } from "@/contexts/companiesContext";
import { Building } from "lucide-react";

export default function Page() {

	const { filteredCompanies, loading } = useCompanies()
	console.log(filteredCompanies)

	return (
		
		<div className="flex flex-col w-full md:p-6">

			<section className="w-ful flex items-center flex-col gap-8 md:py-12">
			
				<div className="max-w-5xl w-full items-center flex flex-col justify-center gap-6">

					<CompanyList
						label="Todas as Empresas"
						cardInitialOrientation="vertical"
						companies={filteredCompanies}
						isLoading={loading}
						showFilters
					/>

				</div>
				
			</section>

			<Footer/>

		</div>

	);

}