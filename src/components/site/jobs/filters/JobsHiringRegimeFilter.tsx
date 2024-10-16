import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue
} from "@/components/ui/select"
import { useFilter } from "@/contexts/filterContext"

export const JobsHiringRegimeFilter = () => {

    const { filterByHiringRegime } = useFilter()

    const handleSelectChange = (status: "All" | "PF" | "PJ") => {
        filterByHiringRegime(status)
    }

    return (

        <div className="flex flex-col gap-2">

            <h2 className="font-semibold text-sm">Regime de Contratação</h2>

            <Select onValueChange={handleSelectChange}>
                
                <SelectTrigger className="min-w-[180px]">
                    <SelectValue placeholder="Regime de Emprego" />
                </SelectTrigger>

                <SelectContent>

                    <SelectGroup>

                        <SelectLabel>Regime</SelectLabel>
                        <SelectItem value="All">Todos</SelectItem>
                        <SelectItem value="PF">PF</SelectItem>
                        <SelectItem value="PJ">PJ</SelectItem>

                    </SelectGroup>

                </SelectContent>

            </Select>

        </div>

    )

}