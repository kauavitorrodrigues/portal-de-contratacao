"use client"

import { FullPageCompanyItem } from "@/components/site/companies/FullPageCompanyItem"
import { NotFound } from "@/components/site/NotFound"
import { useCompanies } from "@/contexts/companiesContext"
import { Building } from "lucide-react"

type Props = {
	params: {
		company: string
	}
}

export default function Page({ params }: Props) {

	const { companies, loading } = useCompanies();
	const pageCompany = companies.find(Company => Company.id === params.company);

	return (
		<div className="flex items-center flex-col p-6 gap-8 min-h-[calc(100vh-80px)] justify-center">
			{ pageCompany && <FullPageCompanyItem isLoading={loading} company={pageCompany} />}
			{ !pageCompany && !loading && <NotFound icon={<Building/>} label="Empresa não encontrada" />}
		</div>
	);
}