"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar, Gauge, Fuel, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Vehicle, formatPrice, formatMileage } from "@/data/vehicles"
import { cn } from "@/lib/utils"

interface VehicleCardProps {
  vehicle: Vehicle
}

const fuelLabels: Record<string, string> = {
  flex: "Flex",
  gasoline: "Gasolina",
  diesel: "Diesel",
  electric: "Elétrico",
  hybrid: "Híbrido",
}

export function VehicleCard({ vehicle }: VehicleCardProps) {
  const whatsappMessage = encodeURIComponent(
    `Olá! Tenho interesse no ${vehicle.brand} ${vehicle.model} ${vehicle.year}. Gostaria de mais informações.`
  )
  const whatsappLink = `https://wa.me/5511999999999?text=${whatsappMessage}`

  return (
    <div className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
      {/* Imagem */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={vehicle.images[0]}
          alt={`${vehicle.brand} ${vehicle.model}`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Badge de Status */}
        <Badge
          className={cn(
            "absolute top-3 right-3",
            vehicle.status === "available"
              ? "bg-green-500/90 hover:bg-green-500 text-white"
              : "bg-red-500/90 hover:bg-red-500 text-white"
          )}
        >
          {vehicle.status === "available" ? "Disponível" : "Vendido"}
        </Badge>

        {/* Featured Badge */}
        {vehicle.featured && vehicle.status === "available" && (
          <Badge className="absolute top-3 left-3 bg-primary/90 hover:bg-primary text-primary-foreground">
            Destaque
          </Badge>
        )}
      </div>

      {/* Conteúdo */}
      <div className="p-4 space-y-4">
        {/* Título e Preço */}
        <div>
          <h3 className="font-semibold text-lg text-foreground line-clamp-1">
            {vehicle.brand} {vehicle.model}
          </h3>
          <p className="text-2xl font-bold text-primary mt-1">
            {formatPrice(vehicle.price)}
          </p>
        </div>

        {/* Especificações */}
        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            <span>{vehicle.year}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Gauge className="w-4 h-4" />
            <span>{formatMileage(vehicle.mileage)}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Fuel className="w-4 h-4" />
            <span>{fuelLabels[vehicle.fuel]}</span>
          </div>
        </div>

        {/* Botões */}
        <div className="flex gap-2 pt-2">
          <Button
            asChild
            variant="secondary"
            className="flex-1 bg-secondary hover:bg-secondary/80 text-secondary-foreground"
          >
            <Link href={`/veiculo/${vehicle.id}`}>
              Ver Detalhes
            </Link>
          </Button>
          <Button
            asChild
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="Contato via WhatsApp">
              <MessageCircle className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
