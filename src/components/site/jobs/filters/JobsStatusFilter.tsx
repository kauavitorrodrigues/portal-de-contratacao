import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue
} from "@/components/ui/select"
import { useFilter } from "@/contexts/filterContext"

export const JobsStatusFilter = () => {

    const { filterByStatus } = useFilter()

    const handleSelectChange = (status: "All" | "Active" | "Inactive") => {
        filterByStatus(status)
    }

    return (

        <div className="flex flex-col gap-2">

            <h2 className="text-sm font-semibold">Status</h2>

            <Select onValueChange={handleSelectChange}>
                
                <SelectTrigger className="min-w-[180px]">
                    <SelectValue placeholder="Status da Vaga" />
                </SelectTrigger>

                <SelectContent>

                    <SelectGroup>

                        <SelectLabel>Status</SelectLabel>
                        <SelectItem value="All">Todas</SelectItem>
                        <SelectItem value="Active">Ativas</SelectItem>
                        <SelectItem value="Inactive">Inativas</SelectItem>

                    </SelectGroup>

                </SelectContent>

            </Select>

        </div>

    )

}