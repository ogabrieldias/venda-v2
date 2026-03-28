"use client"

import { Check, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { formatPrice, calculateDiscount, type AestheticPackage } from "@/data/services"

interface PackageCardProps {
  package_: AestheticPackage
  onSelect?: () => void
}

export function PackageCard({ package_, onSelect }: PackageCardProps) {
  const discount = calculateDiscount(package_.originalPrice, package_.discountPrice)

  return (
    <div
      className={cn(
        "relative p-6 bg-card border rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 flex flex-col h-full",
        package_.popular
          ? "border-primary"
          : "border-border hover:border-primary/50"
      )}
    >
      {/* Popular Badge */}
      {package_.popular && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4">
          <Sparkles className="w-3 h-3 mr-1" />
          Mais Popular
        </Badge>
      )}

      {/* Title */}
      <h3 className="font-semibold text-xl text-foreground mb-2 mt-2">{package_.title}</h3>

      {/* Description */}
      <p className="text-muted-foreground text-sm mb-6">{package_.description}</p>

      {/* Price */}
      <div className="mb-6">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-foreground">
            {formatPrice(package_.discountPrice)}
          </span>
          <span className="text-sm text-muted-foreground line-through">
            {formatPrice(package_.originalPrice)}
          </span>
        </div>
        <Badge variant="secondary" className="mt-2 bg-green-500/10 text-green-500 hover:bg-green-500/20">
          {discount}% de desconto
        </Badge>
      </div>

      {/* Services Included */}
      <div className="flex-grow">
        <p className="text-sm font-medium text-foreground mb-3">Inclui:</p>
        <ul className="space-y-2">
          {package_.services.map((service, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-primary shrink-0" />
              {service}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <Button
        onClick={onSelect}
        className={cn(
          "w-full mt-6",
          package_.popular
            ? "bg-primary hover:bg-primary/90 text-primary-foreground"
            : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
        )}
      >
        Agendar Pacote
      </Button>
    </div>
  )
}
