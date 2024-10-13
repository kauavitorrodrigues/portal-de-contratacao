import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger,
} from "@/components/ui/sheet"
import { AuthButtons } from "./AuthButtons"
import { Menu } from "lucide-react"

export const MobileSideMenu = () => {

    return (

        <Sheet >
            <SheetTrigger asChild>
                <Button className="rounded-full flex md:hidden" size={"icon"}><Menu size={20}/></Button>
            </SheetTrigger>
        
            <SheetContent className="md:hidden">
                <div className="pt-7">
                    <AuthButtons orientation="horizontal"/>
                </div>
            </SheetContent>
        </Sheet>

    )

}