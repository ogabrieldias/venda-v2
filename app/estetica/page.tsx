import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Sparkles, Phone, CheckCircle, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ServiceCard } from "@/components/service-card"
import { PackageCard } from "@/components/package-card"
import { TestimonialSlider } from "@/components/testimonial-slider"
import { BeforeAfterGallery } from "@/components/before-after-gallery"
import { QuoteForm } from "@/components/quote-form"
import { 
  aestheticServices, 
  aestheticPackages, 
  beforeAfterImages, 
  getTestimonialsByService 
} from "@/data/services"

export const metadata = {
  title: "Estética Automotiva | AutoElite",
  description: "Serviços premium de estética automotiva. Polimento, cristalização, higienização e envelopamento. Deixe seu carro impecável.",
}

export default function AestheticPage() {
  const testimonials = getTestimonialsByService('aesthetic')

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/aesthetic-hero.jpg"
            alt="Carro com acabamento impecável"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Acabamento Premium</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight text-balance">
              Deixe seu carro
              <br />
              <span className="text-primary">impecável</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed text-pretty">
              Serviços premium de estética automotiva com técnicas avançadas e produtos de alta qualidade. Resultados que impressionam.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg group"
              >
                <a href="#agendar">
                  <Calendar className="w-5 h-5 mr-2" />
                  Agendar Serviço
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-border hover:bg-secondary text-foreground px-8 py-6 text-lg"
              >
                <a href="#servicos">
                  Ver Serviços
                </a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-border">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Produtos importados</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Garantia de serviço</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Profissionais certificados</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicos" className="py-20 bg-secondary/30 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Nossos <span className="text-primary">Serviços</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Oferecemos uma linha completa de serviços para deixar seu veículo como novo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aestheticServices.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                price={service.price}
                duration={service.duration}
                features={service.features}
                ctaText="Agendar"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Galeria <span className="text-primary">Antes & Depois</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Veja a transformação que nossos serviços proporcionam. Resultados reais que falam por si.
            </p>
          </div>

          <BeforeAfterGallery images={beforeAfterImages} />
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Pacotes <span className="text-primary">Promocionais</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Combine serviços e economize. Nossos pacotes oferecem o melhor custo-benefício.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aestheticPackages.map((pkg) => (
              <PackageCard key={pkg.id} package_={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="agendar" className="py-20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Agende seu <span className="text-primary">Serviço</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Preencha o formulário e nossa equipe entrará em contato para confirmar 
                o melhor horário para você. Atendimento personalizado e sem filas.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Agendamento flexível</h4>
                    <p className="text-sm text-muted-foreground">Escolha o dia e horário que melhor se encaixam na sua agenda.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Orçamento transparente</h4>
                    <p className="text-sm text-muted-foreground">Você sabe exatamente quanto vai pagar antes de começar.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Acompanhamento em tempo real</h4>
                    <p className="text-sm text-muted-foreground">Receba fotos e atualizações durante todo o processo.</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Option */}
              <div className="mt-8 p-4 bg-card border border-border rounded-xl">
                <p className="text-sm text-muted-foreground mb-3">
                  Prefere falar diretamente com nossa equipe?
                </p>
                <Button
                  asChild
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                >
                  <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                    <Phone className="w-5 h-5 mr-2" />
                    Chamar no WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            {/* Form */}
            <QuoteForm type="aesthetic" />
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

          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-card border border-border rounded-2xl p-8 sm:p-12 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />

            <div className="relative text-center">
              <Sparkles className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Transforme seu veículo <span className="text-primary">hoje</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Agende agora e descubra como é ter um carro com aparência de novo. Resultados garantidos ou seu dinheiro de volta.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8"
                >
                  <a href="#agendar">
                    <Calendar className="w-5 h-5 mr-2" />
                    Agendar Serviço
                  </a>
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
