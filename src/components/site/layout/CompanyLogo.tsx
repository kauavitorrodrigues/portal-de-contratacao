import Link from "next/link"

type Props = {
    url: string,
    path: string
}

export const CompanyLogo = ({ url, path } : Props ) => {

    return (

        <Link href={path} target="_blank">
            <div className="bg-muted p-3 rounded-full hover:opacity-90 duration-200">
                <img src={url} className="h-5 w-5"/>
            </div>
        </Link>

    )

}