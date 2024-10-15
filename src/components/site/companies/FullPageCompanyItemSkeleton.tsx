"use client"

import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"

export const FullPageCompanyItemSkeleton = () => {
  return (
    <Card className="w-full max-w-5xl p-6 flex-1 gap-6 flex flex-col">
      <CardHeader className="gap-3">
        <Skeleton className="h-6 w-40" />
      </CardHeader>

      <CardContent className="flex justify-between flex-1">
        <div className="w-full p-6 flex flex-col gap-3 items-center justify-center">
          <Skeleton className="h-28 w-28 rounded-full" />

          <div className="flex flex-col gap-6 items-center">
            <div className="flex flex-col gap-2 items-center pb-6">
              <Skeleton className="h-6 w-40" />
              <Skeleton className="h-4 w-32" />
            </div>

            <Separator />

            <div>
              <Skeleton className="h-6 w-48" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}