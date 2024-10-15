import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue
} from "@/components/ui/select"
import { useFilter } from "@/contexts/filterContext"

export const JobsTypeFilter = () => {

    const { filterByJobType } = useFilter()

    const handleSelectChange = (type: "All" | "Presencial" | "Remoto") => {
        filterByJobType(type)
    }

    return (

        <div className="flex flex-col gap-2">

            <h2 className="font-semibold text-sm">Tipo de Emprego</h2>

            <Select onValueChange={handleSelectChange}>
                
                <SelectTrigger className="min-w-[180px]">
                    <SelectValue placeholder="Regime de Emprego" />
                </SelectTrigger>

                <SelectContent>

                    <SelectGroup>
                        <SelectLabel>Tipo</SelectLabel>
                        <SelectItem value="All">Todos</SelectItem>
                        <SelectItem value="Presencial">Presencial</SelectItem>
                        <SelectItem value="Remoto">Remoto</SelectItem>
                    </SelectGroup>

                </SelectContent>

            </Select>

        </div>

    )

}