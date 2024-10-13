import Image from "next/image"
import Link from "next/link"

type Props = {
    url: string,
    size: number,
    displayLogoName: boolean
}

export const Logo = ({ url, size, displayLogoName } : Props ) => {

    return (

        <div className="flex gap-3 items-center">
            <Link href="/">
                <Image
                    src={url}
                    alt="Logo"
                    width={size}
                    height={size}
                    className="rounded-full object-cover"
                />
            </Link>

            { displayLogoName && <h1 className="text-lg font-semibold">WorkNest</h1>}
        </div>

    )

}