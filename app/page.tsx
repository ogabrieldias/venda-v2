import Link from "next/link"
import { ArrowRight, Shield, CreditCard, Award, CheckCircle, Star, Car, Bike } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { VehicleCard } from "@/components/vehicle-card"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { getFeaturedVehicles } from "@/data/vehicles"

const features = [
  {
    icon: Shield,
    title: "Garantia Estendida",
    description: "Todos os veículos com garantia de até 12 meses para sua tranquilidade.",
  },
  {
    icon: CreditCard,
    title: "Financiamento Facilitado",
    description: "Parcelas que cabem no seu bolso com as melhores taxas do mercado.",
  },
  {
    icon: Award,
    title: "Procedência Verificada",
    description: "Histórico completo e verificação rigorosa de todos os veículos.",
  },
  {
    icon: CheckCircle,
    title: "Documentação OK",
    description: "Transferência rápida e toda documentação regularizada.",
  },
]

const testimonials = [
  {
    name: "Carlos Silva",
    role: "Empresário",
    content: "Comprei meu BMW aqui e foi a melhor experiência. Atendimento impecável e o carro estava melhor do que nas fotos!",
    rating: 5,
  },
  {
    name: "Ana Martins",
    role: "Advogada",
    content: "Equipe muito profissional. Me ajudaram a encontrar o carro ideal e o financiamento foi aprovado rapidamente.",
    rating: 5,
  },
  {
    name: "Roberto Almeida",
    role: "Médico",
    content: "Já é a terceira vez que compro na Venda+. Confiança e qualidade que fazem a diferença.",
    rating: 5,
  },
]

export default function HomePage() {
  const featuredVehicles = getFeaturedVehicles()

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-8">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-primary font-medium">Novos veículos toda semana</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight text-balance">
            Encontre o Veículo
            <br />
            <span className="text-primary">Perfeito para Você</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
            Carros e motos selecionados com procedência garantida.
            Financiamento facilitado e as melhores condições do mercado.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg group"
            >
              <Link href="/carros">
                <Car className="w-5 h-5 mr-2" />
                Ver Carros
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-border hover:bg-secondary text-foreground px-8 py-6 text-lg group"
            >
              <Link href="/motos">
                <Bike className="w-5 h-5 mr-2" />
                Ver Motos
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 mt-16 pt-16 border-t border-border">
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-foreground">500+</p>
              <p className="text-muted-foreground text-sm mt-1">Veículos Vendidos</p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-foreground">98%</p>
              <p className="text-muted-foreground text-sm mt-1">Clientes Satisfeitos</p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-foreground">10+</p>
              <p className="text-muted-foreground text-sm mt-1">Anos de Mercado</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Veículos em <span className="text-primary">Destaque</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Seleção especial com os melhores preços e condições. Não perca!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredVehicles.slice(0, 6).map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-border hover:bg-secondary"
            >
              <Link href="/carros">
                Ver Todos os Veículos
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Por que escolher a <span className="text-primary">Venda+</span>?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Diferenciais que fazem da Venda+ a melhor escolha para sua próxima compra.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              O que nossos <span className="text-primary">Clientes</span> dizem
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A satisfação dos nossos clientes é nossa maior conquista.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 bg-card border border-border rounded-xl"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-card border border-border rounded-2xl p-8 sm:p-12 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
            
            <div className="relative text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Pronto para encontrar seu <span className="text-primary">veículo ideal</span>?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Entre em contato conosco agora mesmo e descubra as melhores ofertas.
                Nossa equipe está pronta para te atender!
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8"
                >
                  <Link href="/contato">
                    Fale Conosco
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-8"
                >
                  <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                </Button>
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
