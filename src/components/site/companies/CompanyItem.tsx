"use client"

import { Card, CardHeader, CardDescription, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Company } from "@/types/Company";
import { MapPin } from "lucide-react";

type Props = {
    company: Company,
    handleCompanyClick?: (company: Company) => void
}


export const CompanyItem = ({ company, handleCompanyClick }: Props) => {

    return (

        <Card 
            className={`job-item w-full max-w-3xl ${ handleCompanyClick && "cursor-pointer"} dark:hover:bg-zinc-900 dark:hover:border-zinc-900 hover:bg-zinc-100 hover:border-zinc-100 duration-300`}
            onClick={() => handleCompanyClick && handleCompanyClick(company)}
        >

            <CardHeader className="gap-3 pb-3">

                <div className="flex justify-center">
                    <Link href={`/company/${company.id}`}>
                        <img src={company.photo} alt={company.name} className="h-14 w-14 rounded-full object-cover border-2 border-white bg-white"/>
                    </Link>
                </div>


            </CardHeader>

            <CardContent>
                <div className="flex flex-col gap-2 items-center">
                    <CardDescription className="max-w-[200px] whitespace-nowrap overflow-hidden text-ellipsis">{company.name}</CardDescription>
                    <div className="flex items-center gap-1">
                        <MapPin size={15}/>
                        <CardDescription>{company.address}</CardDescription>
                    </div>
                </div>
            </CardContent>
            
        </Card>

    );

}