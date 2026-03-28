import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Target, Eye, Heart, Users, Award, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "Sobre | Venda+",
  description: "Conheça a história da Venda+, a concessionária premium de carros e motos do Brasil.",
}

const values = [
  {
    icon: Target,
    title: "Missão",
    description: "Proporcionar a melhor experiência na compra de veículos, oferecendo qualidade, transparência e condições acessíveis para realizar o sonho de nossos clientes.",
  },
  {
    icon: Eye,
    title: "Visão",
    description: "Ser reconhecida como a concessionária de referência no mercado brasileiro, expandindo nossa presença nacional enquanto mantemos a excelência em atendimento.",
  },
  {
    icon: Heart,
    title: "Valores",
    description: "Integridade, compromisso com o cliente, qualidade em cada detalhe, transparência nas negociações e respeito em todas as relações.",
  },
]

const stats = [
  { value: "10+", label: "Anos de Experiência" },
  { value: "500+", label: "Veículos Vendidos" },
  { value: "98%", label: "Clientes Satisfeitos" },
  { value: "50+", label: "Colaboradores" },
]

const team = [
  { name: "Ricardo Santos", role: "Diretor Geral" },
  { name: "Marina Oliveira", role: "Gerente de Vendas" },
  { name: "Pedro Costa", role: "Especialista Técnico" },
  { name: "Ana Paula", role: "Atendimento ao Cliente" },
]

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-24 pb-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Sobre a <span className="text-primary">Venda+</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Há mais de 10 anos no mercado, a Venda+ se consolidou como referência 
              em venda de veículos premium no Brasil. Nossa história é construída sobre 
              pilares de qualidade, confiança e compromisso com a satisfação do cliente.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-secondary">
              <Image
                src="https://images.unsplash.com/photo-1562141961-b5d1a83f6c00?w=800&q=80"
                alt="Showroom Venda+"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Nossa História
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A Venda+ nasceu em 2014 com um sonho: transformar a experiência 
                  de comprar veículos no Brasil. Fundada por entusiastas do mundo 
                  automotivo, começamos com uma pequena loja em Três Rios e uma 
                  grande visão de futuro.
                </p>
                <p>
                  Desde o início, nos diferenciamos pela seleção rigorosa de veículos, 
                  garantindo que cada carro e moto em nosso estoque passe por uma 
                  inspeção detalhada de mais de 150 itens. Isso nos permitiu construir 
                  uma reputação sólida baseada em confiança.
                </p>
                <p>
                  Hoje, somos uma das concessionárias mais respeitadas do país, com 
                  milhares de clientes satisfeitos e uma equipe apaixonada pelo que faz. 
                  Continuamos evoluindo, sempre com foco em oferecer o melhor para 
                  quem nos escolhe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 bg-card border border-border rounded-xl text-center"
              >
                <p className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Missão, Visão e Valores
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Princípios que guiam todas as nossas ações e decisões.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 bg-card border border-border rounded-xl"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Nossa Equipe
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Profissionais apaixonados prontos para te atender.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="p-6 bg-card border border-border rounded-xl text-center"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-medium text-foreground">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border border-border rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Quer conhecer nosso showroom?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Venha nos visitar e veja de perto a qualidade dos nossos veículos.
              Nossa equipe está pronta para te receber!
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contato">
                Entre em Contato
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
