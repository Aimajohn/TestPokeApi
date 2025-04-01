import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { Skeleton } from "./ui/skeleton"

type Props = { isLoading: boolean }

function SkeletonCard({ isLoading }: Props) {
  if (!isLoading) return
  return (
    <>
      <CardHeader>
        <CardTitle>
          <Skeleton className="mx-auto h-6 w-36 bg-slate-200" />
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2">
        <div className="col-span-2 mx-auto mb-4 size-44 rounded-sm">
          <Skeleton className="my-4 size-40 bg-slate-200" />
        </div>
        <Skeleton className="mx-auto flex h-10 min-w-[115px] items-center rounded-md bg-slate-200 px-3 py-2" />
        <Skeleton className="mx-auto flex min-w-[115px] items-center rounded-md bg-slate-200 px-3 py-2" />
        <div className="col-span-2 px-3">
          <Skeleton className="mt-3 mb-2 h-6 w-16 bg-slate-200 font-semibold" />
          <div className="flex gap-2">
            <Skeleton className="h-[26px] w-16 bg-slate-200" />
            <Skeleton className="h-[26px] w-16 bg-slate-200" />
          </div>
        </div>
      </CardContent>
    </>
  )
}

export default SkeletonCard
