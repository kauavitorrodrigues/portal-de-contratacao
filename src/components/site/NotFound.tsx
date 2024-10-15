import { ReactNode } from "react"

type Props = {
    label: string,
    icon: ReactNode
}

export const NotFound = ({ label, icon }: Props) => {
    return (
        <div className="flex flex-col items-center justify-center h-full gap-4">
            <div className="w-5 h-5 text-muted-foreground">{icon}</div>
            <div className="text-muted-foreground">{label}</div>
        </div>
    )
}