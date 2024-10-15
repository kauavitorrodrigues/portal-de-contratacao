import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export const JobItemSkeleton = () => {

    return (
        
        <Card className="w-full max-w-3xl">

            <CardHeader className="gap-3 pb-3">

                <div className="flex justify-between">
                    <Skeleton className="h-10 w-10 rounded-full" />
                    <Skeleton className="h-5 w-16" />
                </div>

                <div className="flex flex-col gap-2">
                    <Skeleton className="h-6 w-3/4" />
                    <div className="flex items-center gap-2">
                    <Skeleton className="h-4 w-1/4" />
                    <Skeleton className="h-4 w-4 rounded-full" />
                    <Skeleton className="h-4 w-1/4" />
                    </div>
                </div>

            </CardHeader>

            <CardContent className="flex flex-col justify-between gap-3">

                <Skeleton className="h-4 w-full" />
                <div className="flex items-center gap-2">
                    <Skeleton className="h-5 w-16" />
                    <Skeleton className="h-5 w-16" />
                </div>

            </CardContent>

        </Card>

    )

}