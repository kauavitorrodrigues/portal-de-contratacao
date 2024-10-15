import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger,
} from "@/components/ui/sheet"
import { AuthButtons } from "./AuthButtons"
import { ToggleTheme } from "../ToggleTheme"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { Briefcase, Building, Menu } from "lucide-react"

export const MobileSideMenu = () => {

    return (

        <Sheet >
            <SheetTrigger asChild>
                <Button className="rounded-full flex md:hidden" size={"icon"}><Menu size={20}/></Button>
            </SheetTrigger>
        
            <SheetContent className="md:hidden flex flex-col">

                <div className="justify-center items-center flex flex-col gap-3 pt-8">


                    <Button variant={"outline"} asChild>
                        <Link href="/jobs" className="text-center w-full flex items-center gap-2">
                            <Briefcase size={16}/> 
                            Encontrar Vagas
                        </Link>
                    </Button>

                    <Separator/>

                    <Button variant={"outline"} asChild>
                        <Link href="/companies" className="text-center w-full flex items-center gap-2">
                            <Building size={16}/> 
                            Buscar Empresas
                        </Link>
                    </Button>

                    <div className="flex w-full justify-center items-center gap-3">
                        <p>Alterar Tema</p>
                        <ToggleTheme/>
                    </div>

                    </div>

                <Separator/>

                <div className="pt-7">
                    <AuthButtons orientation="horizontal"/>
                </div>

            </SheetContent>

        </Sheet>

    )

}