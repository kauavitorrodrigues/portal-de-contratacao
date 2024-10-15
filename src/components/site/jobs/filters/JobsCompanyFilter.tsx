"use client"

import * as React from "react"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useFilter } from "@/contexts/filterContext"
import { useJobs } from "@/contexts/jobsContext"

export const JobsCompanyFilter = () => {

    const { jobs } = useJobs()
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")
    const { filterByCompany } = useFilter()

    const handleSelect = (currentValue: string) => {
        setValue(currentValue === value ? "" : currentValue)
        filterByCompany(currentValue === value ? "" : currentValue)
        setOpen(false)
    }

    return (
        <div className="flex flex-col gap-2">
            <h2 className="font-semibold text-sm">Empresa</h2>
            <Popover open={open} onOpenChange={setOpen}>

                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="justify-between"
                    >
                        { value ? (value === "All" ? "Todas as Empresas" : jobs.find((job) => job.company.id === value)?.company.name) : "Selecione a Empresa..."}
                        <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                
                <PopoverContent className="w-[200px] p-0">

                    <Command>

                        <CommandInput placeholder="Busque a Empresa..." className="h-9" />

                        <CommandList>

                            <CommandEmpty>Nenhuma empresa encontrada.</CommandEmpty>

                            <CommandGroup>
                                <CommandItem
                                    key="all"
                                    value="Todas as Empresas"
                                    onSelect={() => handleSelect("All")}
                                >
                                    Todas as Empresas
                                    <CheckIcon
                                        className={cn("ml-auto h-4 w-4", value === "all" ? "opacity-100" : "opacity-0")}
                                    />
                                </CommandItem>

                                {jobs.map((job) => (
                                    <CommandItem
                                        key={job.company.id}
                                        value={job.company.name}
                                        onSelect={(currentValue) => handleSelect(job.company.id)}
                                    > {job.company.name}
                                    <CheckIcon
                                        className={cn("ml-auto h-4 w-4", value === job.company.id ? "opacity-100" : "opacity-0")}/>
                                    </CommandItem>
                                ))}

                            </CommandGroup>

                        </CommandList>

                    </Command>

                </PopoverContent>

            </Popover>
        </div>
    )

}