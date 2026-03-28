import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Shield, ShieldCheck, Users, Clock, Car, Map, Headphones, Phone, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ServiceCard } from "@/components/service-card"
import { TestimonialSlider } from "@/components/testimonial-slider"
import { QuoteForm } from "@/components/quote-form"
import { insuranceCoverages, insuranceBenefits, getTestimonialsByService } from "@/data/services"

export const metadata = {
  title: "Seguro de Automóveis | AutoElite",
  description: "Proteja seu veículo com os melhores planos de seguro. Cobertura completa, assistência 24h e atendimento personalizado.",
}

export default function InsurancePage() {
  const testimonials = getTestimonialsByService('insurance')

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/insurance-hero.jpg"
            alt="Carro protegido com seguro"
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
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Proteção Total</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight text-balance">
              Proteja seu carro com
              <br />
              <span className="text-primary">segurança e tranquilidade</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed text-pretty">
              Planos sob medida para você e seu veículo. Cobertura completa, assistência 24 horas e as melhores condições do mercado.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg group"
              >
                <a href="#cotacao">
                  Solicitar Cotação
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-border hover:bg-secondary text-foreground px-8 py-6 text-lg"
              >
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5 mr-2" />
                  Fale com um Consultor
                </a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-border">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Aprovação em 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Sem burocracia</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Melhores preços</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Types */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Tipos de <span className="text-primary">Cobertura</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Escolha o plano ideal para suas necessidades. Temos opções para todos os perfis e orçamentos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {insuranceCoverages.map((coverage, index) => (
              <ServiceCard
                key={coverage.id}
                title={coverage.title}
                description={coverage.description}
                icon={coverage.icon}
                features={coverage.features}
                ctaText="Saiba mais"
                variant={index === 1 ? 'featured' : 'default'}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Benefícios <span className="text-primary">Exclusivos</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Além da proteção, você conta com vantagens que fazem a diferença no seu dia a dia.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {insuranceBenefits.map((benefit) => {
              const IconComponent = 
                benefit.icon === 'clock' ? Clock :
                benefit.icon === 'car' ? Car :
                benefit.icon === 'map' ? Map :
                Headphones

              return (
                <div
                  key={benefit.id}
                  className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors group text-center"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="cotacao" className="py-20 bg-secondary/30 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Solicite sua <span className="text-primary">Cotação Grátis</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Preencha o formulário e receba uma cotação personalizada em até 24 horas. 
                Nossos consultores vão encontrar o melhor plano para você.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Análise personalizada</h4>
                    <p className="text-sm text-muted-foreground">Avaliamos seu perfil para oferecer o melhor custo-benefício.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Sem compromisso</h4>
                    <p className="text-sm text-muted-foreground">Receba a cotação e decida com calma, sem pressão.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Atendimento humanizado</h4>
                    <p className="text-sm text-muted-foreground">Consultores especializados prontos para tirar suas dúvidas.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <QuoteForm type="insurance" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
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
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-card border border-border rounded-2xl p-8 sm:p-12 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />

            <div className="relative text-center">
              <ShieldCheck className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Proteja seu veículo <span className="text-primary">agora mesmo</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Não espere acontecer algo para se arrepender. Garanta a tranquilidade que você e sua família merecem.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8"
                >
                  <a href="#cotacao">
                    Solicitar Cotação
                    <ArrowRight className="w-5 h-5 ml-2" />
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
