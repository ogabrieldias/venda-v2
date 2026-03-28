"use client"

import { 
  Shield, 
  ShieldCheck, 
  Users, 
  Clock, 
  Car, 
  Map, 
  Headphones,
  Sparkles,
  Gem,
  SprayCan,
  Palette
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  shield: Shield,
  'shield-check': ShieldCheck,
  users: Users,
  clock: Clock,
  car: Car,
  map: Map,
  headphones: Headphones,
  sparkles: Sparkles,
  gem: Gem,
  'spray-can': SprayCan,
  palette: Palette,
}

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  features?: string[]
  price?: string
  duration?: string
  ctaText?: string
  onCtaClick?: () => void
  variant?: 'default' | 'featured'
}

export function ServiceCard({
  title,
  description,
  icon,
  features,
  price,
  duration,
  ctaText = "Saiba mais",
  onCtaClick,
  variant = 'default',
}: ServiceCardProps) {
  const IconComponent = iconMap[icon] || Shield

  return (
    <div
      className={cn(
        "group relative p-6 bg-card border rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 flex flex-col h-full",
        variant === 'featured'
          ? "border-primary/50 hover:border-primary"
          : "border-border hover:border-primary/50"
      )}
    >
      {/* Icon */}
      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
        <IconComponent className="w-7 h-7 text-primary" />
      </div>

      {/* Title */}
      <h3 className="font-semibold text-xl text-foreground mb-2">{title}</h3>

      {/* Description */}
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{description}</p>

      {/* Price and Duration */}
      {(price || duration) && (
        <div className="flex flex-wrap gap-3 mb-4 text-sm">
          {price && (
            <span className="text-primary font-semibold">{price}</span>
          )}
          {duration && (
            <span className="text-muted-foreground flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {duration}
            </span>
          )}
        </div>
      )}

      {/* Features */}
      {features && features.length > 0 && (
        <ul className="space-y-2 mb-6 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      )}

      {/* CTA Button */}
      <Button
        onClick={onCtaClick}
        variant={variant === 'featured' ? 'default' : 'outline'}
        className={cn(
          "w-full mt-auto",
          variant === 'featured'
            ? "bg-primary hover:bg-primary/90 text-primary-foreground"
            : "border-border hover:bg-secondary"
        )}
      >
        {ctaText}
      </Button>
    </div>
  )
}
