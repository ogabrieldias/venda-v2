import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Calendar, Gauge, Fuel, Settings, Palette, MessageCircle, Zap, Gauge as GaugeIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ImageGallery } from "@/components/image-gallery"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { getVehicleById, formatPrice, formatMileage, vehicles } from "@/data/vehicles"
import { cn } from "@/lib/utils"

const fuelLabels: Record<string, string> = {
  flex: "Flex",
  gasoline: "Gasolina",
  diesel: "Diesel",
  electric: "Elétrico",
  hybrid: "Híbrido",
}

const transmissionLabels: Record<string, string> = {
  manual: "Manual",
  automatic: "Automático",
  cvt: "CVT",
}

export function generateStaticParams() {
  return vehicles.map((vehicle) => ({
    id: vehicle.id,
  }))
}

export async function generateMetadata(props: { params: Promise<{ id: string }> }) {
  const params = await props.params
  const vehicle = getVehicleById(params.id)
  
  if (!vehicle) {
    return {
      title: "Veículo não encontrado | AutoElite",
    }
  }

  return {
    title: `${vehicle.brand} ${vehicle.model} ${vehicle.year} | AutoElite`,
    description: vehicle.description,
  }
}

export default async function VehicleDetailsPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params
  const vehicle = getVehicleById(params.id)

  if (!vehicle) {
    notFound()
  }

  const whatsappMessage = encodeURIComponent(
    `Olá! Tenho interesse no ${vehicle.brand} ${vehicle.model} ${vehicle.year} (${formatPrice(vehicle.price)}). Gostaria de mais informações e agendar uma visita.`
  )
  const whatsappLink = `https://wa.me/5511999999999?text=${whatsappMessage}`

  const specs = [
    { icon: Calendar, label: "Ano", value: vehicle.year.toString() },
    { icon: Gauge, label: "Quilometragem", value: formatMileage(vehicle.mileage) },
    { icon: Fuel, label: "Combustível", value: fuelLabels[vehicle.fuel] },
    { icon: Settings, label: "Câmbio", value: transmissionLabels[vehicle.transmission] },
    { icon: Palette, label: "Cor", value: vehicle.color },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="pt-20 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            asChild
            variant="ghost"
            className="mb-4 text-muted-foreground hover:text-foreground"
          >
            <Link href={vehicle.type === "car" ? "/carros" : "/motos"}>
              <ArrowLeft className="w-5 h-5 mr-2" />
              Voltar para {vehicle.type === "car" ? "Carros" : "Motos"}
            </Link>
          </Button>
        </div>
      </section>

      {/* Vehicle Details */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Gallery */}
            <div>
              <ImageGallery images={vehicle.images} alt={`${vehicle.brand} ${vehicle.model}`} />
            </div>

            {/* Info */}
            <div className="space-y-6">
              {/* Title and Status */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Badge
                    className={cn(
                      vehicle.status === "available"
                        ? "bg-green-500/90 hover:bg-green-500 text-white"
                        : "bg-red-500/90 hover:bg-red-500 text-white"
                    )}
                  >
                    {vehicle.status === "available" ? "Disponível" : "Vendido"}
                  </Badge>
                  {vehicle.featured && (
                    <Badge className="bg-primary/90 hover:bg-primary text-primary-foreground">
                      Destaque
                    </Badge>
                  )}
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
                  {vehicle.brand} {vehicle.model}
                </h1>
              </div>

              {/* Price */}
              <div className="p-6 bg-card border border-border rounded-xl">
                <p className="text-muted-foreground text-sm mb-1">Preço</p>
                <p className="text-4xl font-bold text-primary">
                  {formatPrice(vehicle.price)}
                </p>
              </div>

              {/* Main Specs */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {specs.map((spec, index) => (
                  <div
                    key={index}
                    className="p-4 bg-card border border-border rounded-xl"
                  >
                    <spec.icon className="w-5 h-5 text-primary mb-2" />
                    <p className="text-muted-foreground text-xs mb-1">{spec.label}</p>
                    <p className="text-foreground font-medium">{spec.value}</p>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-6 text-lg"
                >
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-6 h-6 mr-2" />
                    Falar no WhatsApp
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="flex-1 border-border hover:bg-secondary py-6 text-lg"
                >
                  <Link href="/contato">
                    Enviar Mensagem
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Description and Technical Specs */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {/* Description */}
            <div className="p-6 bg-card border border-border rounded-xl">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Descrição
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {vehicle.description}
              </p>
            </div>

            {/* Technical Specs */}
            <div className="p-6 bg-card border border-border rounded-xl">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Especificações Técnicas
              </h2>
              <div className="space-y-4">
                {vehicle.specs.engine && (
                  <div className="flex items-center justify-between py-3 border-b border-border">
                    <span className="text-muted-foreground">Motor</span>
                    <span className="font-medium text-foreground">{vehicle.specs.engine}</span>
                  </div>
                )}
                {vehicle.specs.power && (
                  <div className="flex items-center justify-between py-3 border-b border-border">
                    <span className="text-muted-foreground">Potência</span>
                    <span className="font-medium text-foreground">{vehicle.specs.power}</span>
                  </div>
                )}
                {vehicle.specs.torque && (
                  <div className="flex items-center justify-between py-3 border-b border-border">
                    <span className="text-muted-foreground">Torque</span>
                    <span className="font-medium text-foreground">{vehicle.specs.torque}</span>
                  </div>
                )}
                {vehicle.specs.acceleration && (
                  <div className="flex items-center justify-between py-3 border-b border-border">
                    <span className="text-muted-foreground">Aceleração</span>
                    <span className="font-medium text-foreground">{vehicle.specs.acceleration}</span>
                  </div>
                )}
                {vehicle.specs.topSpeed && (
                  <div className="flex items-center justify-between py-3 border-b border-border">
                    <span className="text-muted-foreground">Velocidade Máx.</span>
                    <span className="font-medium text-foreground">{vehicle.specs.topSpeed}</span>
                  </div>
                )}
                {vehicle.specs.fuelConsumption && (
                  <div className="flex items-center justify-between py-3 border-b border-border">
                    <span className="text-muted-foreground">Consumo</span>
                    <span className="font-medium text-foreground">{vehicle.specs.fuelConsumption}</span>
                  </div>
                )}
                {vehicle.specs.cylinders && (
                  <div className="flex items-center justify-between py-3">
                    <span className="text-muted-foreground">Cilindros</span>
                    <span className="font-medium text-foreground">{vehicle.specs.cylinders}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
