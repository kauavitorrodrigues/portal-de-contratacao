import { Separator } from "@/components/ui/separator"
import { Logo } from "./Logo"
import Link from "next/link"
import { CompanyLogo } from "./CompanyLogo"

export const Footer = () => {

    const companyLogos = [
        { url: "/branding/InstagramBrand.svg", link: "https://www.instagram.com/kauavferraz/" },
        { url: "/branding/LinkedInBrand.svg", link: "https://www.linkedin.com/in/kauavitor" },
        { url: "/branding/TwitterBrand.svg", link: "https://x.com/kvtrfz" },
    ]
    
    return (

        <footer className="flex flex-col p-10 justify-center gap-6 border-t">

            <div className="flex flex-col md:grid md:grid-cols-3 gap-6">

                <div className="flex flex-col gap-6">
                    <Logo displayLogoName size={40} url="/logoWorkNest.png"/>
                    <p className="text-sm text-muted-foreground md:max-w-72">Ótima plataforma para quem busca emprego e é apaixonado por startups. Encontre seu emprego dos sonhos mais facilmente.</p>
                </div>

                <div className="col-span-2 justify-between flex gap-6">

                    <div className="flex flex-1 flex-col items-center">
                        <div className="flex flex-col gap-3">
                            <h1 className="font-semibold">Sobre</h1>
                            <div className="flex flex-col gap-2">
                                <Link href="/companies" className="text-sm text-muted-foreground hover:underline">Empresas</Link>
                                <Link href="/prices" className="text-sm text-muted-foreground hover:underline">Preços</Link>
                                <Link href="/terms" className="text-sm text-muted-foreground hover:underline">Termos de Uso</Link>
                                <Link href="/privacy" className="text-sm text-muted-foreground hover:underline">Política de Privacidade</Link>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-1 flex-col items-center">
                        <div className="flex flex-col gap-3">
                            <h1 className="font-semibold">Recursos</h1>
                            <div className="flex flex-col gap-2">
                                <Link href="/docs" className="text-sm text-muted-foreground hover:underline">Manual de Uso</Link>
                                <Link href="/guide" className="text-sm text-muted-foreground hover:underline">Guia</Link>
                                <Link href="/updates" className="text-sm text-muted-foreground hover:underline">Atualizações</Link>
                                <Link href="/contact" className="text-sm text-muted-foreground hover:underline">Contate-nos</Link>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <Separator/>

            <div className="w-full justify-between flex flex-col md:flex-row items-center gap-6">

                <p className="text-sm text-center md:text-base">2024 © WorkNest. Todos os direitos reservados.</p>

                <div className="flex gap-5">

                    { companyLogos.map((logo, index) => (
                        <CompanyLogo key={index} url={logo.url} path={logo.link}/>
                    ))}

                </div>

            </div>

        </footer>

    )

}