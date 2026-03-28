"use client"

import { Vehicle } from "@/data/vehicles"
import { VehicleCard } from "./vehicle-card"
import { VehicleCardSkeleton } from "./vehicle-card-skeleton"

interface VehicleGridProps {
  vehicles: Vehicle[]
  isLoading?: boolean
}

export function VehicleGrid({ vehicles, isLoading }: VehicleGridProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <VehicleCardSkeleton key={i} />
        ))}
      </div>
    )
  }

  if (vehicles.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl text-muted-foreground">?</span>
        </div>
        <h3 className="text-lg font-medium text-foreground mb-2">
          Nenhum veículo encontrado
        </h3>
        <p className="text-muted-foreground">
          Tente ajustar os filtros para encontrar mais resultados.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {vehicles.map((vehicle) => (
        <VehicleCard key={vehicle.id} vehicle={vehicle} />
      ))}
    </div>
  )
}
