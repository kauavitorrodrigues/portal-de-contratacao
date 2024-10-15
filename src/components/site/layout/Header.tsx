import Link from "next/link";
import { AuthButtons } from "./AuthButtons";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Logo } from "./Logo";
import { MobileSideMenu } from "./MobileSideMenu";
import { ToggleTheme } from "../ToggleTheme";

export const Header = () => {

    return (

        <header className="sticky top-0 h-20 border-b px-6 flex items-center justify-between bg-card z-50">

            <div className="flex gap-8 items-center">
                
                <Logo displayLogoName size={40} url="/logoWorkNest.png"/>

                <div className="hidden md:flex gap-2 items-center">
                    <Link href="/jobs" className="hover:underline text-sm">
                        Encontrar Vagas
                    </Link>
                    <Separator orientation="vertical" className="h-5"/>
                    <Link href="/companies" className="hover:underline text-sm">
                        Buscar Empresas
                    </Link>
                </div>

                <div className="hidden md:flex"><ToggleTheme/></div>

            </div>

            <AuthButtons orientation="vertical"/>
            <MobileSideMenu/>

        </header>

    );

}