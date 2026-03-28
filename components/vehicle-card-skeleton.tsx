import { Skeleton } from "@/components/ui/skeleton"

export function VehicleCardSkeleton() {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      {/* Image Skeleton */}
      <Skeleton className="aspect-[16/10]" />

      {/* Content Skeleton */}
      <div className="p-4 space-y-4">
        {/* Title and Price */}
        <div className="space-y-2">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-8 w-1/2" />
        </div>

        {/* Specs */}
        <div className="flex gap-3">
          <Skeleton className="h-5 w-16" />
          <Skeleton className="h-5 w-20" />
          <Skeleton className="h-5 w-16" />
        </div>

        {/* Buttons */}
        <div className="flex gap-2 pt-2">
          <Skeleton className="h-10 flex-1" />
          <Skeleton className="h-10 w-10" />
        </div>
      </div>
    </div>
  )
}
