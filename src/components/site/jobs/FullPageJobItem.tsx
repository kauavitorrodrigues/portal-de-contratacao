"use client"

import { Job } from "@/types/Job";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Dot, Locate, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

type Props = {
    job: Job
    isLoading: boolean
}

export const FullPageJobItem = ({ job, isLoading }: Props) => {

    return (

        <Card className={`w-full max-w-5xl p-4 md:p-6 flex-1 gap-6 flex flex-col`}>

            <CardHeader className="gap-3">
                <Link href="/jobs">
                    <div className="flex hover:underline items-center font-semibold">
                        <ArrowLeft className="mr-3" size={20} strokeWidth={1.5}/>
                        Todas as vagas
                    </div>
                </Link>
            </CardHeader>

            <CardContent className="flex flex-col items-center md:items-stretch md:flex-row justify-between gap-12 flex-1">

                <div className="flex-1 flex flex-col gap-3">

                    <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">{job.position}</h1>
                    <p className="text-sm md:text-sm">{job.description}</p>

                    <div>
                        <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">Competências</h4>
                        <p className="text-sm md:text-sm">{job.requirements}</p>
                    </div>

                    <div>
                        <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">Outras Informações</h4>
                        <p className="text-sm md:text-sm">{job.additionalInformation}</p>
                    </div>

                    <div>
                        <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">Qualificações</h4>
                        <p className="text-sm md:text-sm">{job.qualifications}</p>
                    </div>

                    <div className="flex flex-col gap-1">
                        <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">Detalhes</h4>
                        <div className="flex gap-2">
                            <p className="text-sm md:text-sm">Tipo de Contratação: </p>
                            <Badge variant={job.hiringRegime === "PF" ? "destructive" : "default"}  className="px-2 h-fit">{job.hiringRegime}</Badge>
                        </div>
                        <div className="flex gap-2">
                            <p className="text-sm md:text-sm">Regime de Trabalho: </p>
                            <Badge variant={job.jobType === "Remoto" ? "destructive" : "default"}  className="px-2 h-fit">{job.jobType}</Badge>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <Separator/>
                        <Link href={`/company/${job.company.id}`} className="w-full">
                            <Button className="w-full">Candidatar-se</Button>
                        </Link>
                    </div>

                </div>

                <div>
                    <Separator orientation="vertical"/>
                </div>

                <div className="w-full max-w-72 p-6 flex flex-col gap-3 items-center justify-center dark:bg-zinc-900 bg-zinc-100">

                    <Link href={`/company/${job.company.id}`}>
                        <img src={job.company.photo} alt={job.company.name} className="h-16 w-16 rounded-full"/>
                    </Link>

                    <div className="flex flex-col gap-6 items-center">

                        <div className="flex flex-col gap-2 items-center pb-6">
                            <p>{job.company.name}</p>
                            <div className="flex gap-1 items-center">
                                <MapPin size={15} />
                                <p className="text-sm text-muted-foreground">{job.company.address}</p>
                            </div>
                        </div>
                        
                        <Button className="w-full">
                            <Link href={`/company/${job.company.id}`} className="w-full">
                                Candidatar-se
                            </Link>
                        </Button>

                        <Separator/>

                        <Link href={`/company/${job.company.id}`}>
                            <div className="flex gap-1 items-center">
                                <p className="text-sm text-muted-foreground">Consultar Perfil da Empresa</p>
                                <ArrowRight size={15}/>
                            </div>
                        </Link>

                    </div>

                </div>

            </CardContent>
            
        </Card>

    );

}