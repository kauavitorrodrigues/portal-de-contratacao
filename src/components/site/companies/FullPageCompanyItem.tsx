"use client"

import { Company } from "@/types/Company";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Dot, Locate, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { useFilter } from "@/contexts/filterContext";
import { useJobs } from "@/contexts/jobsContext";
import { useEffect } from "react";
import { FullPageCompanyItemSkeleton } from "./FullPageCompanyItemSkeleton";

type Props = {
    company: Company
    isLoading: boolean
}

export const FullPageCompanyItem = ({ company, isLoading }: Props) => {

    const { filterByCompany } = useFilter();
    const { filteredJobs } = useJobs()

    useEffect(() => {
        filterByCompany(company.id)
    }, [])

    return (

        <>

            { !isLoading &&
                <Card className={`w-full max-w-5xl p-6 flex-1 gap-6 flex flex-col`}>

                    <CardHeader className="gap-3">
                        <Link href="/companies">
                            <div className="flex hover:underline items-center font-semibold">
                                <ArrowLeft className="mr-3" size={20} strokeWidth={1.5}/>
                                Todas as Empresas
                            </div>
                        </Link>
                    </CardHeader>

                    <CardContent className="flex justify-between flex-1">

                        <div className="w-full p-6 flex flex-col gap-3 items-center justify-center">

                            <Link href={`/company/${company.id}`}>
                                <img src={company.photo} alt={company.name} className="h-28 w-28 rounded-full"/>
                            </Link>

                            <div className="flex flex-col gap-6 items-center">

                                <div className="flex flex-col gap-2 items-center pb-6">
                                    <p className="text-xl">{company.name}</p>
                                    <div className="flex gap-1 items-center">
                                        <MapPin size={20} />
                                        <p className="text-muted-foreground">{company.address}</p>
                                    </div>
                                </div>

                                <Separator/>

                                <div>
                                    <p>Vagas da Empresa: <Badge className="ml-3">{filteredJobs.length}</Badge> </p>
                                </div>

                            </div>

                        </div>

                    </CardContent>
                    
                </Card>
            }
            
            { isLoading && <FullPageCompanyItemSkeleton /> }
        
        </>

    );

}