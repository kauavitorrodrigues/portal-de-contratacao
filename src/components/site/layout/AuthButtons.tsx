import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

type Props = {
    orientation: "horizontal" | "vertical";
}

export const AuthButtons = ({ orientation } : Props ) => {
    return (

        <div className={`gap-3 items-center justify-center ${orientation === "horizontal" ? "flex-col flex" : "hidden md:flex"}`}>

            <Button className={`${orientation === "horizontal" && "w-full max-w-72"}`}>
                <Link href="/signin">Entrar</Link>
            </Button>

            <Separator 
                orientation={orientation} 
                className={`h-8 ${orientation === "horizontal" && "h-[1px] max-w-72"}`}
            />
            
            <Button variant={"outline"} className={`${orientation === "horizontal" && "w-full max-w-72"}`}>
                <Link href="/signin">Criar Conta</Link>
            </Button>

        </div>

    );
}