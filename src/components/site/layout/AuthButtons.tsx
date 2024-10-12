import { Button } from "@/components/ui/button";
import Link from "next/link";

export const AuthButtons = () => {
    return (

        <div className="flex gap-3">

            <Link href="/signin">
                <Button>Entrar</Button>
            </Link>

            <Link href="/signup">
                <Button variant={"outline"}>Criar Conta</Button>
            </Link>

        </div>

    );
}